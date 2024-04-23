import { useEffect } from "react";
import { useOcidAPI } from "../states/server/useOcidAPI";

interface testPoprs {
  nickName?: string;
}
export const useInfo = ({ nickName }: testPoprs) => {
  const {
    useGetUserOcid,
    useGetUserConfig,
    useGetUserStat,
    useGetUserUnion,
    useGetUserPopularity,
    useGetUserDojang,
  } = useOcidAPI();
  const { isLoading, data: ocidData, refetch } = useGetUserOcid({ nickName });

  const {
    isLoading: InfoLoading,
    data: userInfo,
    refetch: configRefetch,
  } = useGetUserConfig({
    ocid: ocidData,
  });
  const {
    isLoading: StatLoading,
    data: userStat,
    refetch: StatRefetch,
  } = useGetUserStat({
    ocid: ocidData,
  });
  const {
    isLoading: UnionLoading,
    data: userUnion,
    refetch: UnionRefetch,
  } = useGetUserUnion({
    ocid: ocidData,
  });
  const {
    isLoading: PopularityLoading,
    data: userPopularity,
    refetch: popularityRefetch,
  } = useGetUserPopularity({
    ocid: ocidData,
  });
  const {
    isLoading: dojangLoading,
    data: userDojang,
    refetch: DojangRefetch,
  } = useGetUserDojang({
    ocid: ocidData,
  });
  console.log(ocidData);
  console.log(userInfo);
  console.log(userStat);
  console.log(userUnion);
  useEffect(() => {
    if (ocidData) {
      configRefetch();
      StatRefetch();
      UnionRefetch();
      popularityRefetch();
      DojangRefetch();
    }
  }, [ocidData]);

  return {
    isLoading,
    ocidData,
    refetch,
    userInfo,
    InfoLoading,
    userStat,
    userUnion,
    userPopularity,
    userDojang,
  };
};
