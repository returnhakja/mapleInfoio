import { useEffect } from "react";
import { useOcidAPI } from "../states/server/useOcidAPI";

interface testPoprs {
  nickName?: string;
}
export const useInfo = ({ nickName }: testPoprs) => {
  const { useGetUserOcid, useGetUserConfig } = useOcidAPI();
  const { isLoading, data: ocidData, refetch } = useGetUserOcid({ nickName });

  const {
    isLoading: InfoLoading,
    data: userInfo,
    refetch: configRefetch,
  } = useGetUserConfig({
    ocid: ocidData,
  });
  console.log(ocidData);
  console.log(userInfo);

  useEffect(() => {
    if (ocidData) {
      configRefetch();
    }
  }, [ocidData, configRefetch]);

  return {
    isLoading,
    ocidData,
    refetch,
    userInfo,
    InfoLoading,
  };
};
