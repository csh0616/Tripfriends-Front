'use client';

import { useMemo, useState } from 'react';
import { useGeneratedRoutesQuery } from '../../api/generatedRoutesQuery';
import RouteMap from '../../map/RouteMap';
import { toTripRoutes } from '../../api/tripPlanner.adapter';
import RouteDetailsPanel from './RouteDetailsPanel';

export default function RoutePreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { data: generatedRoutes } = useGeneratedRoutesQuery();

  const formattedRoutes = useMemo(
    () => toTripRoutes(generatedRoutes),
    [generatedRoutes]
  );

  if (formattedRoutes.length === 0) {
    return (
      <div className="w-full h-full flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[400px] shrink-0 h-full bg-white rounded-[24px] shadow-2xl p-6 md:p-8 flex flex-col border border-gray-50 overflow-hidden animate-pulse">
          <div className="h-8 bg-gray-200 rounded-lg w-3/5 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-2/5 mb-6"></div>
          <div className="flex-1 bg-gray-100 rounded-2xl"></div>
        </div>
        <div className="w-full flex-1 h-full min-h-[400px] rounded-[24px] bg-gray-100 animate-pulse"></div>
      </div>
    );
  }

  const currentRoute = formattedRoutes[currentIndex] || formattedRoutes[0];

  const handleNext = () => {
    if (isConfirmed) return;
    setCurrentIndex((prev) => (prev + 1) % formattedRoutes.length);
    setSelectedDay(1);
  };

  const handlePrev = () => {
    if (isConfirmed) return;
    setCurrentIndex((prev) => (prev - 1 + formattedRoutes.length) % formattedRoutes.length);
    setSelectedDay(1);
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="w-full lg:w-[400px] shrink-0 h-full">
        <RouteDetailsPanel
          route={currentRoute}
          onNext={handleNext}
          onPrev={handlePrev}
          onConfirm={() => setIsConfirmed(true)}
          onCancelConfirm={() => setIsConfirmed(false)}
          routeIndex={currentIndex}
          totalRoutes={formattedRoutes.length}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
          isConfirmed={isConfirmed}
        />
      </div>

      <div className="w-full flex-1 h-full min-h-[400px] rounded-[24px] overflow-hidden shadow-2xl border border-gray-100">
        <RouteMap route={currentRoute} selectedDay={selectedDay} />
      </div>
    </div>
  );
}
