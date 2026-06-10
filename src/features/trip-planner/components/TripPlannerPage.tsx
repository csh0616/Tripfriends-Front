'use client';

import { useTripStore } from '@/store/useTripStore';
import TripDetailForm from '../steps/detail-form/TripDetailForm';
import RoutePreview from '../steps/route-preview/RoutePreview';
import StyleSelector from '../steps/style-selector/StyleSelector';
import TripStepHeader from './TripStepHeader';
import TripStepLayout from './TripStepLayout';
import type { TripView } from '../api/tripPlanner.types';

export default function TripPlannerPage() {
  const { currentView } = useTripStore();
  const view = currentView as TripView;

  return (
    <main className="relative min-h-screen pt-24 pb-16 px-4 md:px-6 font-body flex flex-col items-center overflow-x-hidden">
      <TripStepHeader currentView={view} />

      <TripStepLayout currentView={view}>
        {view === 'detailForm' && (
          <div className="w-full mx-auto animate-in fade-in zoom-in-95 duration-500">
            <TripDetailForm />
          </div>
        )}

        {view === 'styleSelector' && (
          <div className="grid w-full grid-cols-1 lg:grid-cols-[42%_58%] gap-8 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-full">
              <TripDetailForm />
            </div>

            <div className="w-full min-w-0">
              <StyleSelector />
            </div>
          </div>
        )}

        {view === 'routePreview' && (
          <div className="w-full h-[700px] lg:h-[800px] animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <RoutePreview />
          </div>
        )}
      </TripStepLayout>
    </main>
  );
}
