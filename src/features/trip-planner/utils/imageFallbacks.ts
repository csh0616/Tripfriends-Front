import type { TimelineType } from '../api/tripPlanner.types';

export const getTimelineTypeImageUrl = (type: TimelineType) => {
  switch (type) {
    case 'hotel':
      return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80';
    case 'meal':
      return 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80';
    case 'cafe':
      return 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&q=80';
    case 'nightlife':
      return 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80';
    case 'attraction':
    default:
      return 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80';
  }
};

export const getServerImageUrl = (item: Record<string, unknown>) => {
  return (
    getStringValue(item.image_url) ||
    getStringValue(item.imageUrl) ||
    getStringValue(item.photo_url) ||
    getStringValue(item.photoUrl) ||
    getStringValue(item.thumbnail_url) ||
    getStringValue(item.thumbnailUrl) ||
    getFirstUrl(item.images) ||
    getFirstUrl(item.photos) ||
    ''
  );
};

const getStringValue = (value: unknown) => (typeof value === 'string' ? value : '');

const getFirstUrl = (value: unknown) => {
  if (!Array.isArray(value)) return '';

  const first = value[0];
  if (typeof first === 'string') return first;
  if (!first || typeof first !== 'object') return '';

  const candidate = (first as { url?: unknown }).url;
  return getStringValue(candidate);
};
