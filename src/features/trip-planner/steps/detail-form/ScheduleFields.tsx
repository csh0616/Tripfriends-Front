import type { TripFormData } from '@/store/useTripStore';

interface ScheduleFieldsProps {
  startDate: string;
  endDate: string;
  onChange: (data: Partial<TripFormData>) => void;
}

export default function ScheduleFields({ startDate, endDate, onChange }: ScheduleFieldsProps) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-trip-orange font-bold text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
        </svg>
        <h2 className="text-gray-900">Schedule</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 whitespace-nowrap">Departure Date</label>
          <input
            type="date"
            value={startDate || ''}
            onChange={(event) => onChange({ startDate: event.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-trip-orange transition-all text-gray-800 cursor-pointer"
          />
        </div>

        <div className="mt-5 hidden md:flex opacity-0">
          <svg className="w-5 h-5" />
        </div>

        <div className="w-full flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 whitespace-nowrap">Return Date</label>
          <input
            type="date"
            value={endDate || ''}
            onChange={(event) => onChange({ endDate: event.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-trip-orange transition-all text-gray-800 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
