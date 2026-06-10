import { STYLE_OPTIONS } from './styleSelectorOptions';

interface PreferenceGridProps {
  selectedStyles: string[];
  onToggleStyle: (style: string) => void;
}

export default function PreferenceGrid({ selectedStyles, onToggleStyle }: PreferenceGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {STYLE_OPTIONS.map((option) => {
        const isSelected = selectedStyles.includes(option.id);

        return (
          <button
            type="button"
            key={option.id}
            onClick={() => onToggleStyle(option.id)}
            className={`relative cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center text-center border-2 transition-all duration-200 ${
              isSelected ? 'border-trip-orange bg-[#FFF9F5] shadow-md scale-[1.02]' : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
            }`}
          >
            {isSelected && (
              <div className="absolute top-2 right-2 bg-trip-orange text-white rounded-full p-0.5 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <span className="text-3xl mb-3 drop-shadow-sm">{option.icon}</span>
            <h3 className={`font-bold text-sm mb-1 ${isSelected ? 'text-trip-orange' : 'text-gray-900'}`}>{option.title}</h3>
            <p className="text-[10px] text-gray-500 leading-tight">{option.desc}</p>
          </button>
        );
      })}
    </div>
  );
}
