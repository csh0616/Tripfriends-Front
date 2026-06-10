import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { generatePlan } from './generatePlan';
import type { ServerPlanResponse } from './tripPlanner.types';

export const GENERATED_ROUTES_QUERY_KEY = ['tripPlanner', 'generatedRoutes'] as const;

export const useGeneratePlanMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: generatePlan,
    onSuccess: (responseData) => {
      queryClient.setQueryData(GENERATED_ROUTES_QUERY_KEY, responseData);
    },
  });
};

export const useGeneratedRoutesQuery = () => {
  return useQuery<ServerPlanResponse | null>({
    queryKey: GENERATED_ROUTES_QUERY_KEY,
    queryFn: async () => null,
    enabled: false,
    initialData: null,
  });
};
