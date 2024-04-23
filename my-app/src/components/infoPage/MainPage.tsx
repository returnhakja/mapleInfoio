import style from "./page.module.css";

import { TextInput } from "../common/TextInput";
import { Button } from "../common/Button";
import { useState } from "react";
import { useInfo } from "../../hooks/useInfo.hooks";
import { useNavigate } from "react-router-dom";
import { setOcid } from "../../states/client/userOcid.ts/ocid";
import { useDispatch } from "react-redux";
import { Gnb } from "../header/Gnb";

export const MainPage = () => {
  const [nickName, setNickName] = useState<string>("");
  const navigate = useNavigate();
  const app = useInfo({ nickName });

  const dispatch = useDispatch();

  const reFetchData = () => {
    app.refetch();
    dispatch(setOcid(nickName));
    navigate("/info");
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
  return (
    <>
      <header className={style.header}>
        <Gnb />
      </header>
      <div className={style.container}>
        <h2 className={style.logoText}>MapleSearch</h2>
        <div className={style.inputCon}>
          <TextInput
            className={style.inPut}
            placeholder="닉네임을 입력하세요."
            onChange={(e: any) => setNickName(e.target.value)}
          />
          <Button text="조회" className={style.button} onClick={reFetchData} />
        </div>
        <div className={style.searchRanking}>
          <h3>Search Ranking</h3>
          <div className={style.rankersDisplay}></div>
        </div>
      </div>
    </>
  );
};
