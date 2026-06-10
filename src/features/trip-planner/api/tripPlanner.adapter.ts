import type {
  ServerHotel,
  ServerItineraryDay,
  ServerPlanResponse,
  ServerTimelineItem,
  ServerVariant,
  TripDay,
  TripPlace,
  TripRoute,
} from './tripPlanner.types';
import { getBookingUrl } from '../utils/booking';
import { getServerImageUrl, getTimelineTypeImageUrl } from '../utils/imageFallbacks';

const toCurrency = (amount?: number) => {
  if (!amount) return '계산 중';
  return `₩${amount.toLocaleString()}`;
};

const getVariants = (response: ServerPlanResponse | ServerVariant[] | null): ServerVariant[] => {
  if (!response) return [];
  if (Array.isArray(response)) return response;
  if (response.variants) return response.variants;
  if (response.itinerary) {
    return [
      {
        variant_id: 1,
        summary: response.summary,
        itinerary: response.itinerary,
      },
    ];
  }
  return [];
};

const toHotelPlace = (variantId: string, day: number, hotel: ServerHotel): TripPlace => {
  const price = Number(hotel.price_per_night || 0);

  return {
    id: `${variantId}-${day}-hotel-${hotel.name}`,
    order: 'H',
    name: hotel.name,
    time: 'Hotel',
    type: 'hotel',
    category: 'Hotel',
    imageUrl: getServerImageUrl(hotel) || getTimelineTypeImageUrl('hotel'),
    bookingUrl: getBookingUrl(hotel),
    description: `숙소 기준 출발지입니다. 1박 예상 비용: ₩${price.toLocaleString()}`,
    lat: hotel.lat,
    lng: hotel.lng,
    isHotel: true,
  };
};

const toTimelinePlace = (variantId: string, day: number, item: ServerTimelineItem, index: number): TripPlace => {
  const score = Math.round(Number(item.score || 0) * 100);
  const duration = item.duration_hr ?? 0;
  const price = Number(item.price || 0);

  return {
    id: `${variantId}-${day}-${index}-${item.name}`,
    order: index + 1,
    name: item.name,
    time: item.time,
    type: item.type,
    category: item.category || item.type || '관광지',
    imageUrl: getServerImageUrl(item) || getTimelineTypeImageUrl(item.type || ''),
    bookingUrl: getBookingUrl(item),
    description: `평점 가치: ${score}점 | 예상 체류: ${duration}시간 | 예상 비용: ₩${price.toLocaleString()}`,
    lat: item.lat,
    lng: item.lng,
    isHotel: false,
  };
};

const toTripDay = (variantId: string, dayData: ServerItineraryDay): TripDay => {
  const hotelPlace = dayData.hotel ? toHotelPlace(variantId, dayData.day, dayData.hotel) : null;
  const timelinePlaces = (dayData.timeline || []).map((item, index) =>
    toTimelinePlace(variantId, dayData.day, item, index)
  );

  return {
    day: dayData.day,
    totalStops: timelinePlaces.length + (hotelPlace ? 1 : 0),
    places: hotelPlace ? [hotelPlace, ...timelinePlaces] : timelinePlaces,
  };
};

export const toTripRoutes = (response: ServerPlanResponse | ServerVariant[] | null): TripRoute[] => {
  return getVariants(response).map((variant) => {
    const variantId = String(variant.variant_id);
    const schedule = (variant.itinerary || []).map((day) => toTripDay(variantId, day));
    const totalStops = schedule.reduce((acc, day) => acc + day.totalStops, 0);

    return {
      id: variantId,
      title: variant.summary?.cluster_plan ? variant.summary.cluster_plan.join(' -> ') : `Route Option ${variantId}`,
      durationDays: variant.summary?.total_days || schedule.length || 1,
      totalStops,
      totalDistance: '최적 경로 이동',
      estimatedCost: toCurrency(variant.summary?.estimated_hotel_cost),
      highlights: variant.summary?.top_attractions?.slice(0, 3) || ['서울 여행'],
      schedule,
    };
  });
};
