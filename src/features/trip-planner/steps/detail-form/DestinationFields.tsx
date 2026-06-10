import type { TripFormData } from '@/store/useTripStore';

interface DestinationFieldsProps {
  departFrom: string;
  goingTo: string;
  onChange: (data: Partial<TripFormData>) => void;
}

export default function DestinationFields({ departFrom, goingTo, onChange }: DestinationFieldsProps) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-trip-orange font-bold text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
        <h2 className="text-gray-900">Destination</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 whitespace-nowrap">Depart From</label>
          <input
            type="text"
            placeholder="Origin"
            value={departFrom}
            onChange={(event) => onChange({ departFrom: event.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-trip-orange transition-all text-gray-800"
          />
        </div>

        <button
          type="button"
          onClick={() => onChange({ departFrom: goingTo, goingTo: departFrom })}
          className="mt-5 hidden md:flex text-trip-orange cursor-pointer hover:scale-110 active:scale-95 transition-transform"
          aria-label="Swap origin and destination"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        </button>

        <div className="w-full flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 whitespace-nowrap">Going to</label>
          <input
            type="text"
            placeholder="Destination"
            value={goingTo}
            onChange={(event) => onChange({ goingTo: event.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-trip-orange transition-all text-gray-800"
          />
        </div>
      </div>
    </section>
  );
}
