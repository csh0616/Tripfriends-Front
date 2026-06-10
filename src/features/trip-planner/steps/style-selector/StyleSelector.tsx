'use client';

import { useTripStore } from '@/store/useTripStore';
import { useGeneratePlanMutation } from '../../api/generatedRoutesQuery';
import { buildGeneratePlanPayload } from './buildGeneratePlanPayload';
import PreferenceGrid from './PreferenceGrid';
import StyleSubmitButton from './StyleSubmitButton';
import TravelCategoryGrid from './TravelCategoryGrid';

export default function StyleSelector() {
  const { formData, toggleStyle, updateFormData, setView } = useTripStore();
  const { selectedStyles, travelCategory } = formData;
  const generatePlanMutation = useGeneratePlanMutation();

  const handleSubmit = () => {
    generatePlanMutation.mutate(buildGeneratePlanPayload(formData), {
      onSuccess: (responseData) => {
        console.log('서버 응답 성공 (경로 데이터 도착!):', responseData);
        setView('routePreview');
      },
      onError: (error) => {
        console.error('API 통신 에러:', error);
        alert('경로를 생성하는 중 문제가 발생했습니다. 개발자 도구를 확인해 주세요.');
      },
    });
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <TravelCategoryGrid
        selectedCategory={travelCategory}
        onSelect={(category) => updateFormData({ travelCategory: category })}
      />

      <div className="bg-white rounded-[24px] shadow-2xl p-6 md:p-8 flex flex-col gap-6">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">Travel Preferences</h2>
        <PreferenceGrid selectedStyles={selectedStyles} onToggleStyle={toggleStyle} />
        <StyleSubmitButton
          selectedCount={selectedStyles.length}
          isSubmitting={generatePlanMutation.isPending}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
