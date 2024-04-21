import { useEffect, useState } from "react";
import { useOcidAPI } from "../../states/server/useOcidAPI";
import { useInfo } from "../../hooks/useInfo.hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../states/client";
import { setOcid } from "../../states/client/userOcid.ts/ocid";
import { queryClientActions } from "../../states/client/queryClient.ts/queryClient";
import style from "./container.module.css";
import basicCharacter from "../../assets/basicCharacter.png";
import { TextInput } from "../common/TextInput";
import Gnb from "../header/Gnb";

interface ContentProps {
  heading?: string;
}

export const Content = ({ heading }: ContentProps) => {
  const queryClient = useQueryClient();
  const ocId = useSelector((state: RootState) => state.ocId);
  const [nickName, setNickName] = useState<string>(ocId);
  const app = useInfo({ nickName });
  console.log(app.ocidData);

  const { useGetUserOcid } = useOcidAPI();
  const { data: ocidData, refetch } = useGetUserOcid({ nickName });
  const characterImage = ocId ? ocId.character_image : basicCharacter;
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
    <>
      <header className={style.header}>
        <Gnb />
      </header>
      <div className={style.content}>
        <h2>{heading}</h2>
        <div className={style.characterSearch}>
          <TextInput
            onChange={(e: any) => {
              setNickName(e.target.value);
            }}
          />
          <button onClick={reFetchData}>캐릭터 조회</button>
        </div>
        <div className={style.characterInformation}>
          <article>
            <p>캐릭터 명 : {ocId?.character_name}</p>
            <p>레벨 : {ocId?.character_level}</p>
            <p>경험치 : {ocId?.character_exp_rate}%</p>
            <p>길드 : {ocId?.character_guild_name}</p>
            <p>직업 : {ocId?.character_class}</p>
            <p>월드 : {ocId?.world_name}</p>
          </article>
          <div className={style.characterImage}>
            <img
              src={characterImage}
              alt={ocId ? ocId.character_name : "기본캐릭터"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
