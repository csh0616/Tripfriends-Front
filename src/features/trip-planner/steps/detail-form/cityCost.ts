const CITY_COSTS: Record<string, number> = {
  paris: 350000,
  'new york': 400000,
  london: 380000,
  tokyo: 200000,
  osaka: 180000,
  bangkok: 130000,
  seoul: 150000,
  jeju: 120000,
  default: 250000,
};

export const fetchCityCost = async (cityName: string) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const key = Object.keys(CITY_COSTS).find((costKey) => cityName.toLowerCase().includes(costKey)) || 'default';
  return CITY_COSTS[key];
};
