export interface SelectableOption {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export const TRAVEL_CATEGORIES: SelectableOption[] = [
  { id: 'Balanced', icon: '⚖️', title: 'Balanced', desc: 'Well-rounded experience' },
  { id: 'Threshold', icon: '⛰️', title: 'Threshold', desc: 'Push your boundaries' },
  { id: 'Peak', icon: '🏔️', title: 'Peak', desc: 'Ultimate adventure' },
  { id: 'Risk Averse', icon: '🛡️', title: 'Risk Averse', desc: 'Safe and comfortable' },
  { id: 'Budget Safe', icon: '💰', title: 'Budget Safe', desc: 'Cost-effective choices' },
];

export const STYLE_OPTIONS: SelectableOption[] = [
  { id: 'Cleanliness', icon: '✨', title: 'Cleanliness', desc: 'Hygiene and sanitization' },
  { id: 'Food', icon: '🍜', title: 'Food', desc: 'Local cuisine and dining' },
  { id: 'Activity', icon: '🎯', title: 'Activity', desc: 'Sports and adventures' },
  { id: 'Nature', icon: '🌿', title: 'Nature', desc: 'Natural landscapes' },
  { id: 'Culture', icon: '🏛️', title: 'Culture', desc: 'Heritage and traditions' },
  { id: 'Nightlife', icon: '🌃', title: 'Nightlife', desc: 'Evening entertainment' },
  { id: 'Shopping', icon: '🛍️', title: 'Shopping', desc: 'Markets and boutiques' },
  { id: 'Walking Aversion', icon: '🚗', title: 'Walking Aversion', desc: 'Prefer easy transport' },
];
