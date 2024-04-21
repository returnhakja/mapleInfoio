import { useQuery } from "@tanstack/react-query";
import { getUserConfig, getUserOcid } from "../../api/userConfig";

export const useOcidAPI = () => {
  const useGetUserOcid = (param: Parameters<typeof getUserOcid>[0]) => {
    return useQuery({
      queryKey: ["userOcid", param],
      staleTime: 1000 * 60,
      queryFn: () => getUserOcid({ ...param }),
      refetchOnWindowFocus: false,
      enabled: Boolean(!param),
    });
  };

  const useGetUserConfig = (param: Parameters<typeof getUserConfig>[0]) => {
    return useQuery({
      queryKey: ["userConfig", param.ocid],
      staleTime: 1000 * 60,
      queryFn: () => getUserConfig({ ...param.ocid }),
      onError: () => {
        console.log("error");
      },
      enabled: Boolean(!param),
    });
  };
  return {
    useGetUserOcid,
    useGetUserConfig,
  };
};
