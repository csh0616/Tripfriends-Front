'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTripStore } from '@/store/useTripStore';
import BudgetField from './BudgetField';
import { fetchCityCost } from './cityCost';
import DestinationFields from './DestinationFields';
import ScheduleFields from './ScheduleFields';
import TravelerFields from './TravelerFields';
import TripDetailActions from './TripDetailActions';

export default function TripDetailForm() {
  const { currentView, setView, formData, updateFormData } = useTripStore();
  const [debouncedCity, setDebouncedCity] = useState(formData.goingTo);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedCity(formData.goingTo), 500);
    return () => clearTimeout(timer);
  }, [formData.goingTo]);

  const { data: dailyCost = 250000 } = useQuery({
    queryKey: ['cityCost', debouncedCity],
    queryFn: () => fetchCityCost(debouncedCity),
    enabled: debouncedCity.length > 0,
  });

  const start = new Date(formData.startDate);
  const end = new Date(formData.endDate);
  const days = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
  const recommendedBudget = dailyCost * days * formData.travelerCount;
  const budgetPercentage = (formData.budget / 10000000) * 100;

  return (
    <div className="bg-white rounded-[24px] shadow-2xl w-full p-8 md:p-10 flex flex-col gap-8">
      <DestinationFields departFrom={formData.departFrom} goingTo={formData.goingTo} onChange={updateFormData} />
      <ScheduleFields startDate={formData.startDate} endDate={formData.endDate} onChange={updateFormData} />
      <TravelerFields travelerCount={formData.travelerCount} relationship={formData.relationship} onChange={updateFormData} />
      <BudgetField
        budget={formData.budget}
        recommendedBudget={recommendedBudget}
        budgetPercentage={budgetPercentage}
        onBudgetChange={(budget) => updateFormData({ budget })}
      />
      <TripDetailActions currentView={currentView} onSetView={setView} />
    </div>
  );
}
