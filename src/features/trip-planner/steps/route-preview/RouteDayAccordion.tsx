'use client';

import type { TripDay } from '../../api/tripPlanner.types';
import RoutePlaceItem from './RoutePlaceItem';

interface RouteDayAccordionProps {
  daySchedule: TripDay;
  selectedDay: number;
  expandedPlaceId: string | null;
  isConfirmed: boolean;
  onSelectDay: (day: number) => void;
  onTogglePlace: (placeId: string) => void;
}

export default function RouteDayAccordion({
  daySchedule,
  selectedDay,
  expandedPlaceId,
  isConfirmed,
  onSelectDay,
  onTogglePlace,
}: RouteDayAccordionProps) {
  const isExpandedDay = selectedDay === daySchedule.day;

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => onSelectDay(daySchedule.day)}
        className={`w-full flex justify-between items-center px-4 py-3 rounded-xl font-black transition-all duration-300 ${
          isExpandedDay
            ? 'bg-trip-orange text-white shadow-lg shadow-orange-200 sticky top-0 z-30'
            : 'bg-gray-50 text-gray-400 hover:bg-gray-100 border border-gray-100'
        }`}
      >
        <span className="text-sm">Day {daySchedule.day}</span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium opacity-90">{daySchedule.totalStops} stops</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isExpandedDay ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isExpandedDay && (
        <div className="flex flex-col gap-6 pl-2 relative pb-2 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-100 -z-10"></div>

          {daySchedule.places.map((place) => (
            <RoutePlaceItem
              key={place.id}
              place={place}
              isExpanded={expandedPlaceId === place.id}
              isConfirmed={isConfirmed}
              onToggle={() => onTogglePlace(place.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
