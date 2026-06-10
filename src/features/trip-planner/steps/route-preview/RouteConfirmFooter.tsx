interface RouteConfirmFooterProps {
  isConfirmed: boolean;
  routeIndex: number;
  totalRoutes: number;
  onNext: () => void;
  onPrev: () => void;
  onConfirm: () => void;
  onCancelConfirm?: () => void;
}

export default function RouteConfirmFooter({
  isConfirmed,
  routeIndex,
  totalRoutes,
  onNext,
  onPrev,
  onConfirm,
  onCancelConfirm,
}: RouteConfirmFooterProps) {
  if (isConfirmed) {
    return (
      <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col items-center gap-3 shrink-0 bg-white z-20 animate-in fade-in slide-in-from-bottom-4">
        <div className="w-full flex items-center justify-center gap-2 text-[#00E676] font-black text-sm bg-[#F0FDF4] py-3.5 rounded-xl border border-[#DCFCE7]">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Route Confirmed!
        </div>

        {onCancelConfirm && (
          <button onClick={onCancelConfirm} className="text-[11px] text-gray-400 font-medium hover:text-gray-600 underline underline-offset-2 transition-colors">
            Looking for other routes?
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col gap-4 shrink-0 bg-white z-20">
      <div className="flex justify-between items-center px-2">
        <button onClick={onPrev} className="text-gray-300 hover:text-trip-orange transition-colors p-2 active:scale-90">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalRoutes }).map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
                idx === routeIndex ? 'w-8 bg-trip-orange' : 'w-1.5 bg-gray-200'
              }`}
            ></div>
          ))}
        </div>

        <button onClick={onNext} className="text-gray-300 hover:text-trip-orange transition-colors p-2 active:scale-90">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <button onClick={onConfirm} className="orange-button w-full py-4 text-base font-black shadow-xl shadow-orange-100 flex justify-center items-center gap-2 active:scale-95 transition-transform">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Confirm This Route
      </button>
    </div>
  );
}
