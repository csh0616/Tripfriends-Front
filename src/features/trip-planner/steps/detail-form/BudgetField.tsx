interface BudgetFieldProps {
  budget: number;
  recommendedBudget: number;
  budgetPercentage: number;
  onBudgetChange: (budget: number) => void;
}

export default function BudgetField({ budget, recommendedBudget, budgetPercentage, onBudgetChange }: BudgetFieldProps) {
  return (
    <section className="flex flex-col gap-4 pt-2">
      <div className="flex items-center gap-2 text-trip-orange font-bold text-lg mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 7.5a2.25 2.25 0 100 4.5h.75a.75.75 0 010 1.5H9.75a.75.75 0 01-.75-.75V12a.75.75 0 10-1.5 0v.75a2.25 2.25 0 002.25 2.25h.375V16.5a.75.75 0 101.5 0v-1.5h.75a2.25 2.25 0 100-4.5H11.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v.375a.75.75 0 101.5 0V9a2.25 2.25 0 00-2.25-2.25h-.375V5.25a.75.75 0 10-1.5 0v1.5H12z" />
        </svg>
        <h2 className="text-gray-900">Budget</h2>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-end mb-2">
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-gray-500 whitespace-nowrap">Total Budget</label>
            <span className="text-[11px] font-bold text-[#00A34A] mt-1 bg-[#F0FDF4] px-2 py-1 rounded-md border border-[#DCFCE7] inline-block w-fit animate-pulse whitespace-nowrap">
              Recommended: ₩{recommendedBudget.toLocaleString()}
            </span>
          </div>
          <span className="text-3xl font-bold text-trip-orange whitespace-nowrap">
            ₩{budget.toLocaleString()}{budget >= 10000000 ? '+' : ''}
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="10000000"
          step="10000"
          value={budget}
          onChange={(event) => onBudgetChange(Number(event.target.value))}
          className="budget-slider cursor-pointer"
          style={{ background: `linear-gradient(to right, var(--color-trip-orange) ${budgetPercentage}%, #E5E7EB ${budgetPercentage}%)` }}
        />

        <div className="relative w-full text-xs font-medium text-gray-400 mt-2 h-4">
          <span className="absolute left-0">0원</span>
          <span className="absolute left-[10%] -translate-x-1/2">100만</span>
          <span className="absolute left-[30%] -translate-x-1/2">300만</span>
          <span className="absolute left-[50%] -translate-x-1/2">500만</span>
          <span className="absolute right-0">1000만+</span>
        </div>
      </div>
    </section>
  );
}
