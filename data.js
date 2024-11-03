const dashboardData = {
  base: {
    metrics: {
      revenue: {
        value: "$33.7B",
        change: "+7.2%",
        trend: [28.5, 29.7, 31.6, 33.7],
      },
      "operating margin": {
        value: "21.0%",
        change: "+3.0%",
        trend: [18.0, 20.9, 17.8, 21.0],
      },
      subscribers: {
        value: "260.3M",
        change: "+29.5M",
        trend: [221.8, 230.7, 247.2, 260.3],
      },
      arpu: {
        value: "$11.64",
        change: "-0.12",
        trend: [11.45, 11.67, 11.76, 11.64],
      },
    },
    content: {
      categories: [
        {
          type: "Premium Series",
          spend: 5200,
          hours: 1200,
          roi: 1.48,
          engagement: 0.85,
        },
        {
          type: "Original Films",
          spend: 4800,
          hours: 800,
          roi: 1.32,
          engagement: 0.75,
        },
        {
          type: "Licensed Content",
          spend: 3000,
          hours: 3000,
          roi: 0.95,
          engagement: 0.6,
        },
        {
          type: "Local Content",
          spend: 2800,
          hours: 1500,
          roi: 1.28,
          engagement: 0.78,
        },
      ],
      distribution: {
        original: 55,
        licensed: 45,
      },
    },
    regional: {
      UCAN: {
        revenue: 14874,
        subscribers: 80.1,
        arpu: 16.28,
        margin: 29,
        penetration: 75,
        growth: 6,
      },
      EMEA: {
        revenue: 10556,
        subscribers: 88.8,
        arpu: 10.87,
        margin: 20,
        penetration: 45,
        growth: 8,
      },
      LATAM: {
        revenue: 4446,
        subscribers: 46.0,
        arpu: 8.66,
        margin: 18,
        penetration: 40,
        growth: 9,
      },
      APAC: {
        revenue: 3764,
        subscribers: 45.3,
        arpu: 7.64,
        margin: 15,
        penetration: 25,
        growth: 5,
      },
    },
    synergies: {
      cost: [
        {
          category: "Content Production",
          target: 2000,
          achieved: 800,
          timeline: 36,
        },
        {
          category: "Technology Platform",
          target: 800,
          achieved: 200,
          timeline: 24,
        },
        { category: "Marketing", target: 600, achieved: 150, timeline: 12 },
        { category: "Operations", target: 400, achieved: 100, timeline: 18 },
      ],
      revenue: [
        { category: "Cross-selling", target: 500, achieved: 100, timeline: 24 },
        {
          category: "Price Optimization",
          target: 300,
          achieved: 50,
          timeline: 18,
        },
        { category: "Ad Revenue", target: 400, achieved: 75, timeline: 12 },
      ],
    },
  },
  bull: {
    metrics: {
      revenue: {
        value: "$36.0B",
        change: "+8.5%",
        trend: [28.5, 29.7, 31.6, 36.0],
      },
      "operating margin": {
        value: "23.0%",
        change: "+4.0%",
        trend: [18.0, 20.9, 17.8, 23.0],
      },
      subscribers: {
        value: "275.0M",
        change: "+35.0M",
        trend: [221.8, 230.7, 247.2, 275.0],
      },
      arpu: {
        value: "$12.50",
        change: "+0.86",
        trend: [11.45, 11.67, 11.76, 12.5],
      },
    },
    // Similar structure with optimistic scenarios
  },
  bear: {
    metrics: {
      revenue: {
        value: "$31.5B",
        change: "+5.8%",
        trend: [28.5, 29.7, 31.6, 31.5],
      },
      "operating margin": {
        value: "19.0%",
        change: "+2.0%",
        trend: [18.0, 20.9, 17.8, 19.0],
      },
      subscribers: {
        value: "245.0M",
        change: "+25.0M",
        trend: [221.8, 230.7, 247.2, 245.0],
      },
      arpu: {
        value: "$10.80",
        change: "-0.84",
        trend: [11.45, 11.67, 11.76, 10.8],
      },
    },
    // Similar structure with conservative scenarios
  },
};

const valuationAnalysis = {
  methodology: {
    ebitdaMultiple: {
      base: 26,
      bull: 28,
      bear: 24,
    },
    revenueMultiple: {
      base: 5.8,
      bull: 6.2,
      bear: 5.4,
    },
    peMultiple: {
      base: 38,
      bull: 42,
      bear: 35,
    },
  },
  synergies: {
    base: 4000,
    bull: 4800,
    bear: 3200,
  },
  recommendedPremium: {
    base: 30,
    bull: 35,
    bear: 25,
  },
  enterpriseValue: {
    base: 185000,
    bull: 200000,
    bear: 170000,
  },
};

const investmentSummary = {
  recommendation: "Strong Buy",
  targetPrice: {
    base: 550,
    bull: 600,
    bear: 500,
  },
  keyFactors: [
    "Market leadership in streaming",
    "Strong original content capabilities",
    "Global scale and distribution",
    "Significant synergy potential",
    "Ad-tier growth opportunity",
  ],
  risks: [
    "Integration complexity",
    "Content cost inflation",
    "Competitive pressure",
    "Regulatory scrutiny",
  ],
};
