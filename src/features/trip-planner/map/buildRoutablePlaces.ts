import type { TripPlace } from '../api/tripPlanner.types';

export const buildRoutablePlaces = (places: TripPlace[]) => {
  return places.filter((place) => {
    if (place.isHotel || place.type === 'hotel') return true;

    const keyword = String(place.type || place.category || '').toLowerCase();

    return (
      keyword.includes('attraction') ||
      keyword.includes('nightlife') ||
      keyword.includes('관광지') ||
      keyword.includes('명소') ||
      keyword.includes('landmark')
    );
  });
};
