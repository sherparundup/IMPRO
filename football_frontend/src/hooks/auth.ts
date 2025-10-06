import { useMutation, useQueryClient } from "@tanstack/react-query";
import { syncGoogleUser } from "@/services/api/auth.api";
import { GoogleUser } from "@/types/auth.type";
export const useSyncGoogleUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: GoogleUser) => syncGoogleUser(user),
    onSuccess: () => {
      // Optionally refetch or invalidate other queries
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Failed to sync Google user:", error);
    },
  });
};
