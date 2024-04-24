/** @jsxImportSource @emotion/react */

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInfo } from "../../hooks/useInfo.hooks";
import { useDispatch } from "react-redux";
import { setOcid } from "../../states/client/userOcid.ts/ocid";
import { TextInput } from "../common/TextInput";
import { Button } from "../common/Button";
import * as style from "./styles/Main.style";
import * as ButtonStyle from "../common/styles/Button.style";

export const Main = () => {
  const [nickName, setNickName] = useState<string>("");
  const navigate = useNavigate();
  const app = useInfo({ nickName });

  const dispatch = useDispatch();

  const reFetchData = () => {
    app.refetch();
    dispatch(setOcid(nickName));
    if (!app.ocidData) {
      navigate("/info");
    }
  };

  const rankers = [
    { order: 1, rankerNickName: "거프" },
    { order: 2, rankerNickName: "루피" },
    { order: 3, rankerNickName: "상디" },
    { order: 4, rankerNickName: "조로" },
    { order: 5, rankerNickName: "거프임" },
    { order: 6, rankerNickName: "피그마" },
    { order: 7, rankerNickName: "하이요" },
    { order: 8, rankerNickName: "조로" },
    { order: 9, rankerNickName: "뚱땡이" },
    { order: 10, rankerNickName: "루피" },
    { order: 11, rankerNickName: "상디" },
    { order: 12, rankerNickName: "조로" },
  ];
  const onKeyUp = (e: any) => {
    if (e.key === "Enter") {
      reFetchData();
    }
  };
  const ref = useRef<HTMLInputElement>();
  useEffect(() => {
    ref?.current?.focus();
  }, []);
  return (
    <div css={style.MainCon}>
      <h2>MapleSearch</h2>
      <div css={style.InputCon} onKeyUp={onKeyUp}>
        <TextInput
          placeholder="닉네임을 입력하세요."
          onChange={(e: any) => setNickName(e.target.value)}
          dom={ref}
        />
        <Button
          css={ButtonStyle.SearchButton}
          text="조회"
          onClick={reFetchData}
        />
      </div>
      <div css={style.SearchRanking}>
        <h3>Search Ranking</h3>
        <div css={style.RankersDisplay}></div>
      </div>
    </div>
  );
};
