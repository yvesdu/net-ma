function initializeCharts() {
  // Overview Chart - Revenue and Margin Trends
  const overviewCtx = document.getElementById("overviewChart").getContext("2d");
  window.overviewChart = new Chart(overviewCtx, {
    type: "line",
    data: {
      labels: ["2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "Revenue ($B)",
          data: [],
          borderColor: "rgb(229, 9, 20)",
          tension: 0.1,
        },
        {
          label: "Operating Margin (%)",
          data: [],
          borderColor: "rgb(45, 55, 72)",
          tension: 0.1,
          yAxisID: "y1",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: "Revenue ($B)",
          },
        },
        y1: {
          beginAtZero: true,
          position: "right",
          title: {
            display: true,
            text: "Margin (%)",
          },
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  });

  // Content Strategy Chart - ROI vs Engagement
  const contentCtx = document.getElementById("contentChart").getContext("2d");
  window.contentChart = new Chart(contentCtx, {
    type: "bubble",
    data: {
      datasets: [
        {
          label: "Content Categories",
          data: [],
          backgroundColor: "rgba(229, 9, 20, 0.5)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "ROI",
          },
        },
        y: {
          title: {
            display: true,
            text: "Engagement Rate",
          },
        },
      },
    },
  });

  // Regional Analysis Chart
  const regionalCtx = document.getElementById("regionalChart").getContext("2d");
  window.regionalChart = new Chart(regionalCtx, {
    type: "radar",
    data: {
      labels: [
        "Revenue",
        "Subscribers",
        "ARPU",
        "Margin",
        "Penetration",
        "Growth",
      ],
      datasets: [
        {
          label: "UCAN",
          data: [],
          fill: true,
          backgroundColor: "rgba(229, 9, 20, 0.2)",
          borderColor: "rgb(229, 9, 20)",
          pointBackgroundColor: "rgb(229, 9, 20)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(229, 9, 20)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  // Synergy Tracking Chart
  const synergyCtx = document.getElementById("synergyChart").getContext("2d");
  window.synergyChart = new Chart(synergyCtx, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          label: "Target",
          data: [],
          backgroundColor: "rgba(229, 9, 20, 0.2)",
          borderColor: "rgb(229, 9, 20)",
          borderWidth: 1,
        },
        {
          label: "Achieved",
          data: [],
          backgroundColor: "rgba(45, 55, 72, 0.2)",
          borderColor: "rgb(45, 55, 72)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Value ($M)",
          },
        },
      },
    },
  });
}
