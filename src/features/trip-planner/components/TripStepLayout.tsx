import type { ReactNode } from 'react';
import type { TripView } from '../api/tripPlanner.types';

interface TripStepLayoutProps {
  currentView: TripView;
  children: ReactNode;
}

const getContainerWidth = (currentView: TripView) => {
  if (currentView === 'routePreview') return 'max-w-[1400px]';
  if (currentView === 'detailForm') return 'max-w-3xl';
  return 'max-w-[1200px]';
};

export default function TripStepLayout({ currentView, children }: TripStepLayoutProps) {
  return (
    <div className={`w-full transition-all duration-700 ease-in-out ${getContainerWidth(currentView)}`}>
      {children}
    </div>
  );
}
