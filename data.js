// Enhanced financial data with EBITDA and CAGR calculations
const financialData = [
  {
    year: "2021",
    revenue: 29.7,
    operatingIncome: 6.2,
    ebitda: 6.4,
    ebitdaMargin: 21.5,
    netIncome: 5.1,
    operatingMargin: 21,
  },
  {
    year: "2022",
    revenue: 31.6,
    operatingIncome: 5.6,
    ebitda: 6.0,
    ebitdaMargin: 19.2,
    netIncome: 4.5,
    operatingMargin: 18,
  },
  {
    year: "2023",
    revenue: 33.7,
    operatingIncome: 7.0,
    ebitda: 7.3,
    ebitdaMargin: 21.7,
    netIncome: 5.4,
    operatingMargin: 21,
  },
];

// Calculate CAGRs
const calculateCAGR = (endValue, startValue, years) => {
  return ((Math.pow(endValue / startValue, 1 / years) - 1) * 100).toFixed(1);
};

const growthMetrics = {
  revenueCAGR: calculateCAGR(
    financialData[2].revenue,
    financialData[0].revenue,
    2
  ),
  ebitdaCAGR: calculateCAGR(
    financialData[2].ebitda,
    financialData[0].ebitda,
    2
  ),
  marginExpansion: (
    financialData[2].ebitdaMargin - financialData[0].ebitdaMargin
  ).toFixed(1),
};

// Regional performance data with enhanced metrics
const regionData = [
  {
    region: "UCAN",
    revenue: 14.9,
    subscribers: 80.1,
    arpu: 16.28,
    netAdditions: 5.8,
    ebitdaMargin: 23.5,
    marketPenetration: 75,
  },
  {
    region: "EMEA",
    revenue: 10.6,
    subscribers: 88.8,
    arpu: 10.87,
    netAdditions: 12.1,
    ebitdaMargin: 20.1,
    marketPenetration: 45,
  },
  {
    region: "LATAM",
    revenue: 4.4,
    subscribers: 46.0,
    arpu: 8.66,
    netAdditions: 4.3,
    ebitdaMargin: 18.2,
    marketPenetration: 40,
  },
  {
    region: "APAC",
    revenue: 3.8,
    subscribers: 45.3,
    arpu: 7.64,
    netAdditions: 7.3,
    ebitdaMargin: 15.4,
    marketPenetration: 25,
  },
];

// Enhanced content investment metrics
const contentData = {
  assets: 31.7,
  liabilities: 7.0,
  commitments: 21.7,
  amortization: 14.2,
  roi: {
    original: 1.45,
    licensed: 1.12,
    overall: 1.32,
  },
  efficiency: {
    costPerSub: 121,
    viewingHoursPerDollar: 3.2,
    retentionImpact: 0.85,
  },
};

// Valuation metrics
const valuationMetrics = {
  enterpriseValue: 185000,
  evToEbitda: 25.3,
  evToRevenue: 5.5,
  debtToEbitda: 2.1,
  freeCashFlowYield: 0.037,
};
