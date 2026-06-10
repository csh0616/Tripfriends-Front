interface StyleSubmitButtonProps {
  selectedCount: number;
  isSubmitting: boolean;
  onSubmit: () => void;
}

export default function StyleSubmitButton({ selectedCount, isSubmitting, onSubmit }: StyleSubmitButtonProps) {
  const canSubmit = selectedCount > 0 && !isSubmitting;

  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className="text-center bg-[#FFF9F5] py-3 rounded-xl border border-orange-100">
        <span className="text-trip-orange font-bold text-sm">{selectedCount} styles selected</span>
      </div>

      <button
        onClick={onSubmit}
        disabled={!canSubmit}
        className={`w-full py-4 text-lg font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 ${
          canSubmit ? 'orange-button text-white hover:-translate-y-1' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating Plan...
          </>
        ) : (
          "Let's go!"
        )}
      </button>
    </div>
  );
}
