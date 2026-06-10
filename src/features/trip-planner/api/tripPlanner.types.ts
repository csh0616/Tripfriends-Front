export type TripView = 'detailForm' | 'styleSelector' | 'routePreview' | 'bookingConfirm';

export type TimelineType = 'hotel' | 'attraction' | 'meal' | 'cafe' | 'nightlife' | string;

export interface ServerHotel {
  name: string;
  price_per_night?: number;
  transit?: string;
  booking_url?: string;
  bookingUrl?: string;
  booking_link?: string;
  bookingLink?: string;
  lat: number;
  lng: number;
  [key: string]: unknown;
}

export interface ServerTimelineItem {
  time: string;
  type: TimelineType;
  meal_type?: string;
  name: string;
  category?: string;
  score?: number;
  duration_hr?: number;
  price?: number;
  lat: number;
  lng: number;
  [key: string]: unknown;
}

export interface ServerItineraryDay {
  day: number;
  date?: string;
  cluster?: string;
  hotel?: ServerHotel | null;
  timeline: ServerTimelineItem[];
  notes?: string;
  [key: string]: unknown;
}

export interface ServerVariant {
  variant_id: number | string;
  summary?: {
    cluster_plan?: string[];
    total_days?: number;
    estimated_hotel_cost?: number;
    top_attractions?: string[];
    [key: string]: unknown;
  };
  itinerary: ServerItineraryDay[];
}

export interface ServerPlanResponse {
  variants?: ServerVariant[];
  summary?: ServerVariant['summary'];
  itinerary?: ServerItineraryDay[];
  [key: string]: unknown;
}

export interface TripPlace {
  id: string;
  order: number | 'H';
  name: string;
  time: string;
  type: TimelineType;
  category: string;
  imageUrl: string;
  bookingUrl: string;
  description: string;
  lat: number;
  lng: number;
  isHotel: boolean;
}

export interface TripDay {
  day: number;
  totalStops: number;
  places: TripPlace[];
}

export interface TripRoute {
  id: string;
  title: string;
  durationDays: number;
  totalStops: number;
  totalDistance: string;
  estimatedCost: string;
  highlights: string[];
  schedule: TripDay[];
}
