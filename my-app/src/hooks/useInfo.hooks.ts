import { useOcidAPI } from "../states/server/useOcidAPI";

export const useInfo = ({ nickName }: any) => {
  const { useGetUserOcid, useGetUserConfig } = useOcidAPI();
  const { isLoading, data: ocidData, refetch } = useGetUserOcid({ nickName });
  const reFetchData = () => {
    refetch();
  };
  console.log(ocidData);
  return {
    isLoading,
    ocidData,
    reFetchData,
  };
};
