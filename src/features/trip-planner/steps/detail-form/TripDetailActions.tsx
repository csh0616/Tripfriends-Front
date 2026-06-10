import type { TripView } from '@/store/useTripStore';

interface TripDetailActionsProps {
  currentView: TripView;
  onSetView: (view: TripView) => void;
}

export default function TripDetailActions({ currentView, onSetView }: TripDetailActionsProps) {
  return (
    <div className="mt-4 transition-all duration-500">
      {currentView === 'detailForm' ? (
        <button onClick={() => onSetView('styleSelector')} className="orange-button w-full py-4 text-base shadow-lg">
          Continue &gt;
        </button>
      ) : (
        <div className="flex flex-col items-center gap-3 animate-in fade-in duration-500">
          <div className="w-full h-px bg-gray-100 mb-1"></div>

          <button
            onClick={() => onSetView('detailForm')}
            className="w-full py-3.5 bg-gray-50 text-gray-500 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors flex justify-center items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            Editing Details...
          </button>

          <p className="text-xs text-gray-400 font-medium">You can edit these details anytime</p>
        </div>
      )}
    </div>
  );
}
