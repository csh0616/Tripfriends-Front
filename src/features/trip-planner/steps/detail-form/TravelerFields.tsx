import type { TripFormData } from '@/store/useTripStore';

interface TravelerFieldsProps {
  travelerCount: number;
  relationship: string;
  onChange: (data: Partial<TripFormData>) => void;
}

export default function TravelerFields({ travelerCount, relationship, onChange }: TravelerFieldsProps) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-trip-orange font-bold text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
        <h3 className="text-gray-900">Travelers</h3>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 whitespace-nowrap">Person/People</label>
          <div className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg border border-gray-200">
            <button
              type="button"
              onClick={() => onChange({ travelerCount: Math.max(1, travelerCount - 1) })}
              className="text-trip-orange text-xl font-bold w-8 h-8 flex items-center justify-center hover:bg-orange-50 rounded-full transition-colors shrink-0"
            >
              -
            </button>

            <span className="text-gray-900 font-semibold whitespace-nowrap mx-2">
              {travelerCount} <span className="text-gray-500 font-normal ml-1">Travelers</span>
            </span>

            <button
              type="button"
              onClick={() => onChange({ travelerCount: travelerCount + 1 })}
              className="text-trip-orange text-xl font-bold w-8 h-8 flex items-center justify-center hover:bg-orange-50 rounded-full transition-colors shrink-0"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-5 hidden md:flex opacity-0">
          <svg className="w-5 h-5" />
        </div>

        <div className="w-full flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 whitespace-nowrap">Relationship</label>
          <div className="relative">
            <select
              value={relationship}
              onChange={(event) => onChange({ relationship: event.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 focus:outline-none focus:ring-1 focus:ring-trip-orange appearance-none cursor-pointer bg-white"
            >
              <option value="Solo">Solo</option>
              <option value="Couple">Couple</option>
              <option value="Friends">Friends</option>
              <option value="Family">Family</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
