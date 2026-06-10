import type { TripFormData } from '@/store/useTripStore';

export interface GeneratePlanPayload {
  destination: string;
  duration_days: number;
  traveler_count: number;
  age_group: string;
  budget_krw: number;
  checkin: string;
  variants: number;
  scoring_style: string;
  preferences: {
    cleanliness: number;
    food: number;
    activity: number;
    nature: number;
    culture: number;
    nightlife: number;
    shopping: number;
    walking_aversion: number;
  };
}

export const buildGeneratePlanPayload = (formData: TripFormData): GeneratePlanPayload => {
  const start = new Date(formData.startDate);
  const end = new Date(formData.endDate);
  const durationDays = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
  const selectedStyles = formData.selectedStyles;

  return {
    destination: formData.goingTo.toLowerCase(),
    duration_days: durationDays,
    traveler_count: formData.travelerCount,
    age_group: '20s',
    budget_krw: formData.budget,
    checkin: formData.startDate,
    variants: 3,
    scoring_style: formData.travelCategory ? formData.travelCategory.toLowerCase().replace(' ', '_') : 'balanced',
    preferences: {
      cleanliness: selectedStyles.includes('Cleanliness') ? 5 : 3,
      food: selectedStyles.includes('Food') ? 5 : 3,
      activity: selectedStyles.includes('Activity') ? 5 : 3,
      nature: selectedStyles.includes('Nature') ? 5 : 3,
      culture: selectedStyles.includes('Culture') ? 5 : 3,
      nightlife: selectedStyles.includes('Nightlife') ? 5 : 3,
      shopping: selectedStyles.includes('Shopping') ? 5 : 3,
      walking_aversion: selectedStyles.includes('Walking Aversion') ? 5 : 3,
    },
  };
};
