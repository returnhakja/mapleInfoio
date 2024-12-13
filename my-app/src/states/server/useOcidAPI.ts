import { useQuery } from "@tanstack/react-query";
import {
  getUserConfig,
  getUserDojang,
  getUserItem,
  getUserOcid,
  getUserPopularity,
  getUserStat,
  getUserUnion,
} from "../../api/userConfig";
import useInfoStore from "../../stores/info";

export const useOcidAPI = () => {
  const useGetUserOcid = (param: Parameters<typeof getUserOcid>[0]) => {
    return useQuery({
      queryKey: ["userOcid", param],
      staleTime: 1000 * 60,
      queryFn: () => getUserOcid({ ...param }),
      refetchOnWindowFocus: false,
      onError: () => {
        alert("해당 닉네임이 없습니다");
        window.location.href = "/";
      },
      enabled: false,
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
    const setUnion = useInfoStore((state) => state.setUnion);
    return useQuery({
      queryKey: ["userUnion", param.ocid],
      staleTime: 1000 * 60,
      queryFn: () => getUserUnion({ ...param.ocid }),
      onSuccess: (data) => {
        setUnion(data);
      },
      onError: () => {
        console.log("error");
      },
      enabled: false,
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
  const useGetUserItem = (param: Parameters<typeof getUserItem>[0]) => {
    console.log(param);
    return useQuery({
      queryKey: ["userItem", param.ocid],
      staleTime: 0,
      queryFn: () => getUserItem({ ...param.ocid }),
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
    useGetUserItem,
  };
};
