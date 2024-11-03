// Main application logic
document.addEventListener("DOMContentLoaded", function () {
  // Initialize charts
  initializeCharts();

  // Tab switching
  const tabs = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  // Scenario switching
  const scenarioButtons = document.querySelectorAll("[data-scenario]");
  scenarioButtons.forEach((button) => {
    button.addEventListener("click", () => {
      scenarioButtons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      updateDashboard(button.dataset.scenario);
    });
  });

  // Initial load with base scenario
  updateDashboard("base");
});

function updateDashboard(scenario) {
  const scenarioData = dashboardData[scenario];

  // Update metrics
  updateMetrics(scenarioData.metrics);

  // Update charts
  updateCharts(scenario);
}

function updateMetrics(metrics) {
  const cards = document.querySelectorAll(".metric-card");
  cards.forEach((card) => {
    const header = card
      .querySelector(".metric-header")
      .textContent.toLowerCase();
    const value = card.querySelector(".metric-value");
    const change = card.querySelector(".metric-change");

    if (metrics[header]) {
      value.textContent = metrics[header].value;
      change.textContent = metrics[header].change;
      change.className = `metric-change ${
        metrics[header].change.startsWith("+") ? "positive" : "negative"
      }`;
    }
  });
}
