import type { TripView } from '../api/tripPlanner.types';

interface TripStepHeaderProps {
  currentView: TripView;
}

export default function TripStepHeader({ currentView }: TripStepHeaderProps) {
  if (currentView === 'routePreview') return null;

  const isDetailForm = currentView === 'detailForm';

  return (
    <div
      className={`text-center text-white mb-10 w-full transition-all duration-700 ease-in-out ${
        isDetailForm ? 'max-w-3xl' : 'max-w-5xl'
      }`}
    >
      {isDetailForm ? (
        <div className="animate-in fade-in zoom-in-95 duration-500">
          <h1 className="font-title text-5xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg text-white">
            Be a traveler, nothing else.
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
            Discover your next adventure with friends
          </p>
        </div>
      ) : (
        <div className="animate-in fade-in zoom-in-95 duration-500">
          <h1 className="font-title text-4xl md:text-5xl font-bold tracking-tight drop-shadow-lg text-white flex items-center justify-center gap-2">
            Choose Your <span className="italic font-light">Travel Style</span>
          </h1>
          <p className="text-base text-white/90 drop-shadow-md mt-2">
            Select experiences that match your interests
          </p>
        </div>
      )}
    </div>
  );
}
