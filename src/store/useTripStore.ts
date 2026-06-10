// src/store/useTripStore.ts
import { create } from 'zustand';

export type TripView = 'detailForm' | 'styleSelector' | 'routePreview' | 'bookingConfirm';

export interface TripFormData {
  departFrom: string;
  goingTo: string;
  startDate: string;
  endDate: string;
  travelerCount: number;
  relationship: string;
  budget: number;
  travelCategory: string; 
  selectedStyles: string[]; 
}

const getLocalDateString = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

interface TripStore {
  currentView: TripView;
  locale: 'Eng' | 'Kor';
  formData: TripFormData;

  setView: (view: TripView) => void;
  setLocale: (locale: 'Eng' | 'Kor') => void;
  updateFormData: (newData: Partial<TripFormData>) => void;
  toggleStyle: (style: string) => void; 
}

export const useTripStore = create<TripStore>((set) => ({
  currentView: 'detailForm',
  locale: 'Eng',
  
  formData: {
    departFrom: '',
    goingTo: '',
    startDate: getLocalDateString(today),
    endDate: getLocalDateString(tomorrow),
    travelerCount: 2,
    relationship: 'Friends',
    budget: 0,
    travelCategory: '',
    selectedStyles: [],
  },
  setView: (view) => set({ currentView: view }),
  setLocale: (locale) => set({ locale }),
  
  updateFormData: (newData) => 
    set((state) => ({
      formData: { ...state.formData, ...newData }
    })),

  toggleStyle: (style) => 
    set((state) => {
      const isAlreadySelected = state.formData.selectedStyles.includes(style);
      return {
        formData: {
          ...state.formData,
          selectedStyles: isAlreadySelected
            ? state.formData.selectedStyles.filter((s) => s !== style)
            : [...state.formData.selectedStyles, style]
        }
      };
    }),

}));
