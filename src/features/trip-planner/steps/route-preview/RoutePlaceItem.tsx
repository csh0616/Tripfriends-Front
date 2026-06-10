'use client';

import type { MouseEvent } from 'react';
import type { TripPlace } from '../../api/tripPlanner.types';

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800';

interface RoutePlaceItemProps {
  place: TripPlace;
  isExpanded: boolean;
  isConfirmed: boolean;
  onToggle: () => void;
}

export default function RoutePlaceItem({ place, isExpanded, isConfirmed, onToggle }: RoutePlaceItemProps) {
  const displayImage = place.imageUrl || FALLBACK_IMAGE;

  const handleBookHotel = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (!place.bookingUrl) {
      alert('호텔 예약 링크가 아직 제공되지 않았습니다.');
      return;
    }

    window.open(place.bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex gap-4 items-start relative group">
      <div
        className={`w-6 h-6 mt-1.5 rounded-full text-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-md border-2 border-white ring-4 ring-white z-10 ${
          place.isHotel ? 'bg-trip-darkgreen' : 'bg-trip-orange'
        }`}
      >
        {place.isHotel ? 'H' : place.order}
      </div>

      <div
        onClick={onToggle}
        className={`flex flex-col gap-3 bg-white p-3 rounded-2xl border transition-all duration-300 w-full cursor-pointer overflow-hidden ${
          isExpanded
            ? place.isHotel
              ? 'border-trip-darkgreen shadow-md bg-green-50/30'
              : 'border-trip-orange shadow-md bg-orange-50/20'
            : 'border-gray-100 shadow-sm hover:border-orange-100 hover:shadow-md'
        }`}
      >
        <div className="flex gap-4 items-center">
          <img
            src={displayImage}
            alt={place.name}
            referrerPolicy="no-referrer"
            className="w-16 h-16 rounded-xl object-cover shrink-0 bg-gray-100"
          />

          <div className="flex flex-col gap-1 justify-center flex-1">
            <h5
              className={`font-bold text-sm transition-colors ${
                isExpanded
                  ? place.isHotel
                    ? 'text-trip-darkgreen'
                    : 'text-trip-orange'
                  : 'text-gray-900 group-hover:text-trip-orange'
              }`}
            >
              {place.name}
            </h5>
            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium">
              <span className="flex items-center gap-1">{place.time}</span>
              <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
              <span>{place.category}</span>
            </div>
          </div>
        </div>

        {isExpanded && place.description && (
          <div className="pt-2 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
            <p className={`text-[11px] text-gray-500 leading-relaxed font-medium ${isConfirmed && place.isHotel ? 'mb-3' : ''}`}>
              {place.description}
            </p>

            {isConfirmed && place.isHotel && (
              <button
                onClick={handleBookHotel}
                className="w-full py-2.5 bg-gray-900 text-white text-[12px] font-bold rounded-xl hover:bg-gray-800 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Book Hotel
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
