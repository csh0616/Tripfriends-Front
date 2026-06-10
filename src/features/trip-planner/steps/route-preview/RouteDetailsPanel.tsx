'use client';

import { useState } from 'react';
import type { TripRoute } from '../../api/tripPlanner.types';
import RouteConfirmFooter from './RouteConfirmFooter';
import RouteDayAccordion from './RouteDayAccordion';

interface RouteDetailsPanelProps {
  route: TripRoute;
  onNext: () => void;
  onPrev: () => void;
  onConfirm: () => void;
  routeIndex?: number;
  totalRoutes?: number;
  selectedDay: number;
  onSelectDay: (day: number) => void;
  isConfirmed?: boolean;
  onCancelConfirm?: () => void;
}

export default function RouteDetailsPanel({
  route,
  onNext,
  onPrev,
  onConfirm,
  routeIndex = 0,
  totalRoutes = 3,
  selectedDay,
  onSelectDay,
  isConfirmed = false,
  onCancelConfirm,
}: RouteDetailsPanelProps) {
  const expansionScope = `${route.id}-${selectedDay}`;
  const [expandedPlace, setExpandedPlace] = useState<{ scope: string; placeId: string } | null>(null);
  const expandedPlaceId = expandedPlace?.scope === expansionScope ? expandedPlace.placeId : null;

  const handleTogglePlace = (placeId: string) => {
    setExpandedPlace((current) => {
      if (current?.scope === expansionScope && current.placeId === placeId) return null;
      return { scope: expansionScope, placeId };
    });
  };

  return (
    <div className="bg-white rounded-[24px] shadow-2xl p-6 md:p-8 flex flex-col h-full overflow-hidden">
      <div key={route.id} className="flex-1 flex flex-col min-h-0 animate-in fade-in slide-in-from-right-8 duration-500 ease-out">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">{route.title}</h2>
          <span className="flex items-center gap-1 text-trip-orange font-bold text-sm bg-orange-50 px-3 py-1.5 rounded-full shrink-0">
            {route.durationDays} Days
          </span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="text-xs text-gray-400 font-medium flex items-center gap-3">
            <span className="flex items-center gap-1">{route.totalStops} stops</span>
            <span className="flex items-center gap-1">{route.totalDistance}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-[10px] font-black text-gray-300 mb-2 uppercase tracking-widest">Highlights</h4>
          <div className="flex flex-wrap gap-2">
            {route.highlights.map((tag, idx) => (
              <span key={`${tag}-${idx}`} className="text-[11px] font-bold text-trip-orange bg-orange-50 px-3 py-1 rounded-md border border-orange-100">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-3 -mr-3 custom-scrollbar flex flex-col gap-4 pb-4">
          <h4 className="text-[10px] font-black text-gray-300 mb-1 uppercase tracking-widest">Daily Schedule</h4>

          {route.schedule.map((daySchedule) => (
            <RouteDayAccordion
              key={daySchedule.day}
              daySchedule={daySchedule}
              selectedDay={selectedDay}
              expandedPlaceId={expandedPlaceId}
              isConfirmed={isConfirmed}
              onSelectDay={onSelectDay}
              onTogglePlace={handleTogglePlace}
            />
          ))}
        </div>
      </div>

      <RouteConfirmFooter
        isConfirmed={isConfirmed}
        routeIndex={routeIndex}
        totalRoutes={totalRoutes}
        onNext={onNext}
        onPrev={onPrev}
        onConfirm={onConfirm}
        onCancelConfirm={onCancelConfirm}
      />
    </div>
  );
}
