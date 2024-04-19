import { useEffect, useState } from "react";
import { useOcidAPI } from "../../states/server/useOcidAPI";

export const apiKey =
  "live_d7d02164e7756253a44ed95738dc01d1d4d3e5615523431441bfe2a943898303c8e2a5fc4855ba38eb15d28219f85579";
export const MainInfoPage = () => {
  const [nickName, setNickName] = useState<string>("");
  // const [chData, setChData] = useState<any>();
  const { useGetUserOcid, useGetUserConfig } = useOcidAPI();
  const { data: ocidData, refetch } = useGetUserOcid({ nickName });
  console.log(ocidData);
  const { data: chData, refetch: configRef } = useGetUserConfig({
    ocid: ocidData?.ocid,
  });

  console.log(nickName);
  const currentExp = 8000749733207;
  const totalExp = 16657228589191;

  const percentage = ((currentExp / totalExp) * 100).toFixed(3);

  console.log(percentage);
  console.log(ocidData);
  useEffect(() => {
    if (ocidData && ocidData.ocid) {
      configRef();
    }
  }, [configRef, ocidData]);

  const test = () => {
    refetch();
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setNickName(e.target.value);
        }}
      />
      <button onClick={test}> 조회</button>
      <br />
      <img src={chData?.character_image} />
      <p>캐릭터 명 : {chData?.character_name}</p>
      <p>레벨 : {chData?.character_level}</p>
      <p>길드 : {chData?.character_guild_name}</p>
      <p>직업 : {chData?.character_class}</p>
      <p>월드 : {chData?.world_name}</p>
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
