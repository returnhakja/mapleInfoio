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

  const sortedStats = ["HP", "MP", "STR", "DEX", "INT", "LUK"]
    .map((stat_name) =>
      userStat?.find((stat: any) => stat.stat_name === stat_name)
    )
    .filter((stat) => stat !== undefined);

  const formattedStats = userStat?.map((stat: any) => {
    const { stat_name, stat_value } = stat;

    const formatStatName = (name: string) => {
      switch (name) {
        case USER_STAT.MAX_ATTACK:
          return USER_STAT.STAT_ATTACK;
        default:
          return name;
      }
    };

    const formatStatValue = (name: string, value: string) => {
      switch (name) {
        case USER_STAT.MAX_ATTACK:
          return `${numberAttack(parseInt(value))}`;
        case USER_STAT.ATTACK:
          return `${parseInt(value).toLocaleString()}`;
        case USER_STAT.DAMAGE:
        case USER_STAT.BOSS_ATTACK:
        case USER_STAT.FINAL_DAMAGE:
        case USER_STAT.BANG_MU:
        case USER_STAT.NORMAL_DAMAGE:
        case USER_STAT.ADDITIONAL_DAMAGE:
        case USER_STAT.CRITICAL_CHANCE:
        case USER_STAT.CRITICAL_DAMAGE:
        case USER_STAT.COLLDOWN_PERCENT:
        case USER_STAT.NOT_COLLDOWN:
        case USER_STAT.IGNORE_RESISTANCE:
        case USER_STAT.INCREASED_DURATION:
        case USER_STAT.BUFF_DURATION:
        case USER_STAT.MESO_DROP:
        case USER_STAT.ITEM_DROP:
        case USER_STAT.STANS:
        case USER_STAT.EXP:
        case USER_STAT.SPEED:
        case USER_STAT.JUMPING_POWER:
          return `${value}%`;
        case USER_STAT.COLLDOWN:
          return `${value}초`;
        case USER_STAT.ATTACK_SPEED:
          return `${value}단계`;
        default:
          return value;
      }
    };

    const formattedName = formatStatName(stat_name);
    const formattedValue = formatStatValue(stat_name, stat_value);

    return { ...stat, stat_name: formattedName, stat_value: formattedValue };
  });

  const secondStats = [
    USER_STAT.STAT_ATTACK,
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
  const ThirdStats = [
    USER_STAT.MESO_DROP,
    USER_STAT.STAR_FORCE,
    USER_STAT.ITEM_DROP,
    USER_STAT.ARCANDE_FORCE,
    USER_STAT.EXP,
    USER_STAT.AUTHENTIC_FORCE,
  ].map((stat_name) =>
    formattedStats?.find((stat: any) => stat.stat_name === stat_name)
  );
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
    ThirdStats,
  };
};
