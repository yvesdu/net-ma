document.addEventListener("DOMContentLoaded", function () {
  // Initialize core dashboard features
  initializeDashboard();
  initializeFilters();
  initializeInteractions();
});

function initializeDashboard() {
  // Initialize all charts
  initializeCharts();
  // Set up initial data states
  updateMetricCards();
}

function initializeFilters() {
  // Time range filter
  const timeRanges = ["1Y", "3Y", "5Y", "Custom"];
  const timeFilter = createFilter("time-filter", "Time Range", timeRanges);

  // Region filter
  const regions = ["All Regions", "UCAN", "EMEA", "LATAM", "APAC"];
  const regionFilter = createFilter("region-filter", "Region", regions);

  // Metric filter
  const metrics = ["Revenue", "EBITDA", "Subscribers", "Content"];
  const metricFilter = createFilter("metric-filter", "Metrics", metrics);

  document
    .querySelector(".filter-container")
    .append(timeFilter, regionFilter, metricFilter);

  // Add filter event listeners
  addFilterListeners();
}

function createFilter(id, title, options) {
  const filter = document.createElement("div");
  filter.className = "filter-group";
  filter.innerHTML = `
        <div class="filter-title">${title}</div>
        <div class="filter-options">
            ${options
              .map(
                (opt) => `
                <button class="filter-btn ${
                  opt.includes("All") ? "active" : ""
                }" 
                        data-value="${opt.toLowerCase()}">
                    ${opt}
                </button>
            `
              )
              .join("")}
        </div>
    `;
  return filter;
}

function addFilterListeners() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Update active state
      const filterGroup = e.target.closest(".filter-group");
      filterGroup
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");

      // Update dashboard based on filter
      updateDashboardWithFilters();
    });
  });
}

function initializeInteractions() {
  // Drill-down functionality for metric cards
  document.querySelectorAll(".metric-card").forEach((card) => {
    card.addEventListener("click", handleMetricDrilldown);
  });

  // Comparative analysis toggles
  document.querySelectorAll(".competitor-toggle").forEach((toggle) => {
    toggle.addEventListener("change", updateComparativeAnalysis);
  });

  // Interactive tooltips
  initializeCustomTooltips();
}

function handleMetricDrilldown(e) {
  const metricType = e.currentTarget.dataset.metric;
  const drilldownData = getDrilldownData(metricType);

  // Update drilldown view
  updateDrilldownView(metricType, drilldownData);
}

function updateDrilldownView(metricType, data) {
  const drilldownContainer = document.getElementById("metric-drilldown");
  drilldownContainer.innerHTML = `
        <div class="drilldown-header">
            <h3>${metricType} Detailed Analysis</h3>
            <button class="close-btn">×</button>
        </div>
        <div class="drilldown-content">
            <div class="drilldown-chart"></div>
            <div class="drilldown-metrics"></div>
        </div>
    `;

  // Create detailed chart for drilldown
  createDrilldownChart(
    drilldownContainer.querySelector(".drilldown-chart"),
    metricType,
    data
  );

  drilldownContainer.style.display = "block";
}

function updateDashboardWithFilters() {
  const activeFilters = {
    timeRange: getActiveFilter("time-filter"),
    region: getActiveFilter("region-filter"),
    metric: getActiveFilter("metric-filter"),
  };

  // Update all visualizations with new filters
  updateChartData(activeFilters);
  updateMetricCards(activeFilters);
  updateComparativeAnalysis(activeFilters);
}

function getActiveFilter(filterGroupId) {
  return document.querySelector(`#${filterGroupId} .filter-btn.active`).dataset
    .value;
}

function initializeCustomTooltips() {
  const tooltipConfig = {
    position: "average",
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (context) {
        const label = context.dataset.label || "";
        const value = formatMetricValue(context.raw, label);
        return `${label}: ${value}`;
      },
    },
  };

  // Apply custom tooltips to all charts
  Chart.defaults.plugins.tooltip = tooltipConfig;
}

function formatMetricValue(value, metricType) {
  if (metricType.includes("Revenue") || metricType.includes("EBITDA")) {
    return `$${value.toFixed(1)}B`;
  } else if (metricType.includes("Margin")) {
    return `${value.toFixed(1)}%`;
  } else if (metricType.includes("Subscribers")) {
    return `${value.toFixed(1)}M`;
  }
  return value.toFixed(1);
}

function updateComparativeAnalysis(filters) {
  const selectedCompetitors = getSelectedCompetitors();
  const comparisonData = getComparisonData(filters, selectedCompetitors);

  updateCompetitorCharts(comparisonData);
}

function getSelectedCompetitors() {
  return Array.from(
    document.querySelectorAll(".competitor-toggle:checked")
  ).map((checkbox) => checkbox.value);
}
