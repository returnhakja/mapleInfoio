import { useEffect, useState } from "react";
import { useOcidAPI } from "../../states/server/useOcidAPI";
import { useInfo } from "../../hooks/useInfo.hooks";
import { TextInput } from "../common/TextInput";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { queryClientActions } from "../../states/client/queryClient.ts/queryClient";

export const apiKey =
  "live_d7d02164e7756253a44ed95738dc01d1d4d3e5615523431441bfe2a943898303c8e2a5fc4855ba38eb15d28219f85579";
export const MainInfoPage = () => {
  const queryClient = useQueryClient();
  const [nickName, setNickName] = useState<string>("");
  const app = useInfo({ nickName });
  console.log(app.ocidData);
  // const [chData, setChData] = useState<any>();
  const { useGetUserOcid, useGetUserConfig } = useOcidAPI();
  const { data: ocidData, refetch } = useGetUserOcid({ nickName });
  console.log(ocidData);
  const { data: chData, refetch: configRef } = useGetUserConfig({
    ocid: ocidData?.ocid,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(queryClientActions.setQueryClient(queryClient));
  }, [dispatch, queryClient]);
  // console.log(nickName);
  console.log(ocidData);
  // useEffect(() => {
  //   if (ocidData && ocidData.ocid) {
  //     configRef();
  //   }
  // }, [configRef, ocidData]);

  const test = () => {
    refetch();
  };
  // if (app.isLoading) return null;
  return (
    <div>
      <TextInput
        onChange={(e: any) => {
          setNickName(e.target.value);
        }}
      />
      <button onClick={test}> 조회</button>
      <br />
      <img src={ocidData?.character_image} />
      <p>캐릭터 명 : {ocidData?.character_name}</p>
      <p>레벨 : {ocidData?.character_level}</p>
      <p>경험치 : {ocidData?.character_exp_rate}%</p>
      <p>길드 : {ocidData?.character_guild_name}</p>
      <p>직업 : {ocidData?.character_class}</p>
      <p>월드 : {ocidData?.world_name}</p>
    </div>
  );
};

// const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       `https://open.api.nexon.com/maplestory/v1/id?character_name=${nickName}`,
//       {//         headers: {
//           "x-nxopen-api-key": apiKey,
//         },
//       }
//     );
//     console.log(response);
//     if (response) {
//       const test = await axios.get(
//         // "https://open.api.nexon.com/maplestory/v1/character/basic?ocid=5232a9528459c6b9fd5a923c5e039e83&date=2024-04-16",
//         `https://open.api.nexon.com/maplestory/v1/character/basic?ocid=${response.data?.ocid}&date=${finalDate}`,
//         {
//           headers: {
//             "x-nxopen-api-key": apiKey,
//           },
//         }
//       );
//       console.log(test);
//       // setChData(test.data);
//     }
//   } catch (error) {
//     alert("캐릭터 정보를 받아오는데 실패했습니다. 다시 시도 해 주세요.");
//     console.error("Error fetching character data:", error);
//   }
// };
