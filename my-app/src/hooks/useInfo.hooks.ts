import { useEffect } from "react";
import { useOcidAPI } from "../states/server/useOcidAPI";
import { numberAttack } from "../util/numberAttack";
import { USER_STAT } from "../constants/stat";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ocidData]);

  const filteredStats = userStat?.filter((stat: any) =>
    ["HP", "MP", "STR", "DEX", "INT", "LUK"].includes(stat.stat_name)
  );

  const sortedStats = ["HP", "MP", "STR", "DEX", "INT", "LUK"].map(
    (stat_name) =>
      filteredStats?.find((stat: any) => stat.stat_name === stat_name)
  );

  const formattedStats = userStat?.map((stat: any) => {
    let formattedValue: string | number = stat.stat_value;
    let formattedName: string | number = stat.stat_name;

    switch (stat.stat_name) {
      case "최대 스탯공격력":
        formattedValue = `${numberAttack(parseInt(stat.stat_value))}`;
        // formattedName = "스텟 공격력";
        break;
      case "공격력":
        formattedValue = `${parseInt(stat.stat_value).toLocaleString()}`;
        break;
      case "데미지":
      case "보스 몬스터 데미지":
      case "최종 데미지":
      case "방어율 무시":
      case "일반 몬스터 데미지":
      case "상태이상 추가 데미지":
        formattedValue = `${stat.stat_value}%`;
        break;
      case "크리티컬 확률":
      case "크리티컬 데미지":
      case "재사용 대기시간 감소(%)":
      case "재사용 대기시간 미적용":
      case "속성 내성 무시":
      case "소환수 지속시간 증가":
      case "버프 지속시간":
        formattedValue = `${stat.stat_value}%`;
        break;
      case "재사용 대기시간 감소 (초)":
        formattedValue = `${stat.stat_value}초`;
        break;
      default:
        break;
    }

    return { ...stat, stat_name: formattedName, stat_value: formattedValue };
  });
  const secondStats = [
    USER_STAT.MAX_ATTACK,
    USER_STAT.DAMAGE,
    USER_STAT.FINAL_DAMAGE,
    USER_STAT.BOSS_ATTACK,
    USER_STAT.BANG_MU,
    USER_STAT.NORMAL_DAMAGE,
    USER_STAT.ATTACK,
    USER_STAT.CRITICAL_CHANCE,
    USER_STAT.HORSEPOWER,
    USER_STAT.CRITICAL_DAMAGE,
    USER_STAT.COLLDOWN,
    USER_STAT.BUFF_DURATION,
    USER_STAT.NOT_COLLDOWN,
    USER_STAT.IGNORE_RESISTANCE,
    USER_STAT.ADDITIONAL_DAMAGE,
    USER_STAT.INCREASED_DURATION,
  ].map((stat_name) =>
    formattedStats?.find((stat: any) => stat.stat_name === stat_name)
  );
  console.log(formattedStats);

  console.log(sortedStats);
  console.log(secondStats);
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
    sortedStats,
    secondStats,
  };
};
