import type { GeneratePlanPayload } from '../steps/style-selector/buildGeneratePlanPayload';
import type { ServerPlanResponse } from './tripPlanner.types';

export const generatePlan = async (payload: GeneratePlanPayload): Promise<ServerPlanResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(`${baseUrl}/api/v1/plans/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('백엔드 에러 상세:', errorText);
    throw new Error(`서버 에러 발생: 상태 코드 ${response.status}`);
  }

  return (await response.json()) as ServerPlanResponse;
};
