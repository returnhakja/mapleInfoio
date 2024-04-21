import { useOcidAPI } from "../states/server/useOcidAPI";
import { useDispatch } from "react-redux";

export const useInfo = ({ nickName }: any) => {
  const { useGetUserOcid, useGetUserConfig } = useOcidAPI();
  const { isLoading, data: ocidData, refetch } = useGetUserOcid({ nickName });

  const dispatch = useDispatch();

  console.log(ocidData);
  return {
    isLoading,
    ocidData,
    refetch,
    // reFetchData,
  };
};
