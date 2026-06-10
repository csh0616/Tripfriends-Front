import type { TripPlace } from '../api/tripPlanner.types';

export const getMarkerMeta = (place: TripPlace, index: number) => {
  const isHotel = place.isHotel || place.type === 'hotel';

  return {
    label: isHotel ? 'H' : place.order || index + 1,
    color: isHotel ? '#00A34A' : '#FF5A00',
  };
};

export const createKakaoMarkerContent = (place: TripPlace, index: number) => {
  const marker = getMarkerMeta(place, index);

  return `
    <div style="
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: ${marker.color};
      color: white;
      font-weight: 900;
      font-size: 12px;
      border-radius: 999px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.18);
      border: 2px solid white;
      z-index: 10;
    ">
      ${marker.label}
      <div style="
        position: absolute;
        bottom: -4px;
        left: 50%;
        width: 8px;
        height: 8px;
        background: ${marker.color};
        transform: translateX(-50%) rotate(45deg);
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        z-index: -1;
      "></div>
    </div>
  `;
};
