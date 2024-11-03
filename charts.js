function initializeCharts() {
  createFinancialChart();
  createRegionalChart();
  createEBITDAChart();
  createROIChart();
}

function createFinancialChart() {
  const ctx = document.getElementById("financialChart");
  if (!ctx) return;

  return new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2021", "2022", "2023"],
      datasets: [
        {
          label: "Revenue",
          data: [29.7, 31.6, 33.7],
          borderColor: "#e50914",
          backgroundColor: "rgba(229, 9, 20, 0.1)",
          tension: 0.3,
        },
        {
          label: "EBITDA",
          data: [6.4, 6.0, 7.3],
          borderColor: "#141414",
          backgroundColor: "rgba(20, 20, 20, 0.1)",
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          align: "end",
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: (value) => `$${value}B`,
          },
        },
      },
    },
  });
}

function createRegionalChart() {
  const ctx = document.getElementById("regionChart");
  if (!ctx) return;

  return new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["UCAN", "EMEA", "LATAM", "APAC"],
      datasets: [
        {
          data: [14.9, 10.6, 4.4, 3.8],
          backgroundColor: ["#e50914", "#141414", "#564d4d", "#8c8c8c"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
          align: "center",
        },
      },
    },
  });
}

function createEBITDAChart() {
  const ctx = document.getElementById("ebitdaChart");
  if (!ctx) return;

  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["2021", "2022", "2023"],
      datasets: [
        {
          label: "EBITDA",
          data: [6.4, 6.0, 7.3],
          backgroundColor: "rgba(229, 9, 20, 0.8)",
          yAxisID: "y",
        },
        {
          label: "Margin %",
          data: [21.5, 19.2, 21.7],
          type: "line",
          borderColor: "#141414",
          yAxisID: "y1",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          align: "end",
        },
      },
      scales: {
        y: {
          position: "left",
          ticks: {
            callback: (value) => `$${value}B`,
          },
        },
        y1: {
          position: "right",
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            callback: (value) => `${value}%`,
          },
        },
      },
    },
  });
}

function createROIChart() {
  const ctx = document.getElementById("contentROIChart");
  if (!ctx) return;

  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Original", "Licensed", "Overall"],
      datasets: [
        {
          label: "ROI Multiple",
          data: [1.45, 1.12, 1.32],
          backgroundColor: ["#e50914", "#141414", "#6b7280"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => `${value}x`,
          },
        },
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", initializeCharts);
