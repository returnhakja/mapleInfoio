import { useQuery } from "@tanstack/react-query";
import {
  getUserConfig,
  getUserDojang,
  getUserOcid,
  getUserPopularity,
  getUserStat,
  getUserUnion,
} from "../../api/userConfig";

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
  const useGetUserStat = (param: Parameters<typeof getUserStat>[0]) => {
    return useQuery({
      queryKey: ["userStat", param.ocid],
      staleTime: 1000 * 60,
      queryFn: () => getUserStat({ ...param.ocid }),
      onError: () => {
        console.log("error");
      },
      enabled: Boolean(!param),
    });
  };
  const useGetUserUnion = (param: Parameters<typeof getUserUnion>[0]) => {
    return useQuery({
      queryKey: ["userUnion", param.ocid],
      staleTime: 1000 * 60,
      queryFn: () => getUserUnion({ ...param.ocid }),
      onError: () => {
        console.log("error");
      },
      enabled: Boolean(!param),
    });
  };
  const useGetUserPopularity = (
    param: Parameters<typeof getUserPopularity>[0]
  ) => {
    return useQuery({
      queryKey: ["userPopularity", param.ocid],
      staleTime: 1000 * 60,
      queryFn: () => getUserPopularity({ ...param.ocid }),
      onError: () => {
        console.log("error");
      },
      enabled: Boolean(!param),
    });
  };
  const useGetUserDojang = (param: Parameters<typeof getUserDojang>[0]) => {
    return useQuery({
      queryKey: ["userDojang", param.ocid],
      staleTime: 1000 * 60,
      queryFn: () => getUserDojang({ ...param.ocid }),
      onError: () => {
        console.log("error");
      },
      enabled: Boolean(!param),
    });
  };
  return {
    useGetUserOcid,
    useGetUserConfig,
    useGetUserStat,
    useGetUserUnion,
    useGetUserPopularity,
    useGetUserDojang,
  };
};
