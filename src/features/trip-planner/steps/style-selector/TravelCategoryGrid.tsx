import { TRAVEL_CATEGORIES } from './styleSelectorOptions';

interface TravelCategoryGridProps {
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function TravelCategoryGrid({ selectedCategory, onSelect }: TravelCategoryGridProps) {
  return (
    <div className="bg-white rounded-[24px] shadow-2xl p-6 md:p-8 flex flex-col gap-5">
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">Travel Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {TRAVEL_CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.id;

          return (
            <button
              type="button"
              key={category.id}
              onClick={() => onSelect(category.id)}
              className={`relative cursor-pointer rounded-2xl p-3 flex flex-col items-center justify-center text-center border-2 transition-all duration-200 ${
                isSelected ? 'border-blue-500 bg-blue-50 shadow-md scale-[1.02]' : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-0.5 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              <span className="text-2xl mb-2 drop-shadow-sm">{category.icon}</span>
              <h3 className={`font-bold text-[12px] mb-1 ${isSelected ? 'text-blue-600' : 'text-gray-900'}`}>{category.title}</h3>
              <p className="text-[9px] text-gray-500 leading-tight">{category.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
