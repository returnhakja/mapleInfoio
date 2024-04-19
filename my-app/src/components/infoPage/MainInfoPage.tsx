import { useEffect, useState } from "react";
import { useOcidAPI } from "../../states/server/useOcidAPI";
import { useInfo } from "../../hooks/useInfo.hooks";
import { TextInput } from "../common/TextInput";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../states/client";
import { setOcid } from "../../states/client/userOcid.ts/ocid";
import { queryClientActions } from "../../states/client/queryClient.ts/queryClient";

export const MainInfoPage = () => {
  const queryClient = useQueryClient();
  const [nickName, setNickName] = useState<string>("");
  const app = useInfo({ nickName });
  console.log(app.ocidData);
  const ocId = useSelector((state: RootState) => state.ocId);
  // const [chData, setChData] = useState<any>();
  const { useGetUserOcid, useGetUserConfig } = useOcidAPI();
  const { data: ocidData, refetch } = useGetUserOcid({ nickName });
  console.log(ocidData);

  console.log(ocId?.character_class);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryClientActions.setQueryClient(queryClient));
    if (ocidData) {
      dispatch(setOcid(ocidData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ocidData]);

  const reFetchData = () => {
    refetch();
  };

  return (
    <div>
      <TextInput
        onChange={(e: any) => {
          setNickName(e.target.value);
        }}
      />
      <button onClick={reFetchData}> 조회</button>
      <br />
      <img src={ocId?.character_image} />
      <p>캐릭터 명 : {ocId?.character_name}</p>
      <p>레벨 : {ocId?.character_level}</p>
      <p>경험치 : {ocId?.character_exp_rate}%</p>
      <p>길드 : {ocId?.character_guild_name}</p>
      <p>직업 : {ocId?.character_class}</p>
      <p>월드 : {ocId?.world_name}</p>
    </div>
  );
};
