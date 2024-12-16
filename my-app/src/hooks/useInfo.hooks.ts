import { useEffect, useState } from "react";
import { useOcidAPI } from "../states/server/useOcidAPI";
import { numberAttack } from "../util/numberAttack";
import { USER_STAT } from "../constants/stat";
import { css } from "@emotion/react";
import useInfoStore from "../stores/info";

interface testProps {
  nickName?: string;
}
export const useInfo = ({ nickName }: testProps) => {
  const {
    useGetUserOcid,
    useGetUserConfig,
    useGetUserStat,
    useGetUserUnion,
    useGetUserPopularity,
    useGetUserDojang,
    useGetUserItem,
  } = useOcidAPI();

  const {
    fetchUnion,
    union: userUnion,
    refetchUnion,
    fetchHexa,
    hexa: userHexa,
    refetchHexa,
    fetchOcid,
    ocId: ocidData,
  } = useInfoStore((state) => state);

  const [searchNickName, setSearchNickName] = useState<string>("");
  // const {
  //   isLoading,
  //   data: ocidData,
  //   refetch,
  // } = useGetUserOcid({ nickName: searchNickName });
  console.log(searchNickName);
  const executeSearch = (name: string) => {
    console.log(nickName);
    setSearchNickName(name);
    fetchOcid({ nickName: name });
  };

  const {
    isLoading: InfoLoading,
    data: userInfo,
    refetch: configRefetch,
  } = useGetUserConfig({
    ocid: ocidData,
  });
  console.log(userHexa);
  // console.log(userUnion);
  // console.log(ocidData);
  useEffect(() => {
    if (ocidData) {
      fetchUnion({ ocid: ocidData.ocid });
      fetchHexa({ ocid: ocidData.ocid });
    }
  }, [ocidData, searchNickName]);
  const {
    isLoading: StatLoading,
    data: userStat,
    refetch: StatRefetch,
  } = useGetUserStat({
    ocid: ocidData,
  });
  const {
    isLoading: UnionLoading,
    // data: userUnion,
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
  const { data: userItem, refetch: ItemRefetch } = useGetUserItem({
    ocid: ocidData,
  });
  console.log(userItem);
  console.log(ocidData);
  console.log(userInfo);
  console.log(userStat);
  console.log(userUnion);

  useEffect(() => {
    if (ocidData) {
      configRefetch();
      StatRefetch();
      // UnionRefetch();
      refetchUnion({ ocid: ocidData.ocid });
      refetchHexa({ ocid: ocidData.ocid });
      popularityRefetch();
      DojangRefetch();
      ItemRefetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ocidData, searchNickName]);

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

  const itemSlots = [
    "모자",
    "엠블렘",
    "얼굴장식",
    "눈장식",
    "귀고리",
    "상의",
    "하의",
    "신발",
    "장갑",
    "망토",
    "보조무기",
    "무기",
    "반지1",
    "반지2",
    "반지3",
    "반지4",
    "펜던트",
    "훈장",
    "벨트",
    "어깨장식",
    "포켓 아이템",
    "기계 심장",
    "뱃지",
    "펜던트2",
  ];

  const getItemIcon = (slotName: any, items: any) => {
    const item = items.find(
      (item: any) => item.item_equipment_slot === slotName
    );
    return item?.item_icon;
  };
  const getItemStarForce = (slotName: any, items: any) => {
    const item = items.find(
      (item: any) => item.item_equipment_slot === slotName
    );
    return item?.starforce;
  };
  const getItemStarName = (slotName: any, items: any) => {
    const item = items.find(
      (item: any) => item.item_equipment_slot === slotName
    );
    return item?.item_name;
  };
  const getItemStat = (slotName: any, items: any) => {
    const item = items.find(
      (item: any) => item.item_equipment_slot === slotName
    );
    console.log(item);
    return {
      part: item?.item_equipment_part,
      ignore_monster_armor: item?.item_base_option?.ignore_monster_armor,
      dex: item?.item_base_option?.dex,
      int: item?.item_base_option?.int,
      luk: item?.item_base_option?.luk,
      str: item?.item_base_option?.str,
      maxHp: item?.item_base_option?.maxHp,
      maxMp: item?.item_base_option?.maxMp,
      potential_option_grade: item?.potential_option_grade,
      additional_potential_option_grade:
        item?.additional_potential_option_grade,
      potential_option_1: item?.potential_option_1,
      potential_option_2: item?.potential_option_2,
      potential_option_3: item?.potential_option_3,
      additional_potential_option_1: item?.additional_potential_option_1,
      additional_potential_option_2: item?.additional_potential_option_2,
      additional_potential_option_3: item?.additional_potential_option_3,
      item_add_option: item?.item_add_option, //추옵
      item_starforce_option: item?.item_starforce_option, //스타포스
      item_etc_option: item?.item_etc_option, // 강화옵션
      scroll_upgrade: item?.scroll_upgrade,
      item_total_option: item?.item_total_option,
    };
  };

  const userItemIcons = itemSlots.reduce((icons: any, slotName) => {
    const key = `${slotName}`;
    icons[key] = getItemIcon(slotName, userItem?.item_equipment || []);
    return icons;
  }, []);
  const userItemStarForce = itemSlots.reduce((icons: any, slotName) => {
    const key = `${slotName}`;
    icons[key] = getItemStarForce(slotName, userItem?.item_equipment || []);
    return icons;
  }, []);
  const userItemName = itemSlots.reduce((icons: any, slotName) => {
    const key = `${slotName}`;
    icons[key] = getItemStarName(slotName, userItem?.item_equipment || []);
    return icons;
  }, []);
  const userItemStat = itemSlots.reduce((icons: any, slotName) => {
    const key = `${slotName}`;
    icons[key] = getItemStat(slotName, userItem?.item_equipment || []);
    return icons;
  }, []);
  console.log(userItemStat);
  console.log(userItem?.item_equipment);
  // console.log(userItemStarForce);
  console.log(userItemStat);

  // ... existing code ...

  const getPotentialGradeStyle = (grade: string) => {
    switch (grade) {
      case "레전드리":
        return css`
          color: #4b9f46;
          &::before {
            content: "L";
            margin-right: 4px;
            width: 16px;
            height: 16px;
            padding: 0 2px;
            background-color: #4b9f46;
            color: white;
            border-radius: 2px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        `;
      case "레어":
        return css`
          color: skyblue;
          &::before {
            content: "R";
            margin-right: 4px;
            width: 16px;
            height: 16px;
            padding: 0 2px;
            background-color: skyblue;
            color: white;
            border-radius: 2px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        `;
      case "유니크":
        return css`
          color: #ffd338;
          &::before {
            content: "U";
            margin-right: 4px;
            width: 16px;
            height: 16px;
            padding: 0 2px;
            background-color: #ffd338;
            color: white;
            border-radius: 2px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        `;
      case "에픽":
        return css`
          color: #9b48d4;
          &::before {
            content: "E";
            margin-right: 4px;
            width: 16px;
            height: 16px;
            padding: 0 2px;
            background-color: #9b48d4;
            color: white;
            border-radius: 2px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        `;
      default:
        return css``;
    }
  };

  return {
    isLoading: false,
    ocidData,
    // refetch,
    userInfo,
    InfoLoading,
    userStat,
    userUnion,
    userPopularity,
    userDojang,
    sortedStats,
    secondStats,
    ThirdStats,
    userItem,
    userItemIcons,
    userItemStarForce,
    userItemName,
    userItemStat,
    getPotentialGradeStyle,
    executeSearch,
    userHexa: userHexa?.character_hexa_core_equipment,
  };
};
