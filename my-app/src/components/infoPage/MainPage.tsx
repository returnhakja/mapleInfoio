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
  return (
    <>
      <header className={style.header}>
        <Gnb />
      </header>
      <div className={style.logoText}>
        <p>MapleSearch</p>
      </div>
      <div className={style.inputCon}>
        <TextInput
          className={style.inPut}
          placeholder="닉네임을 입력하세요."
          onChange={(e: any) => setNickName(e.target.value)}
        />
        <Button text="조회" className={style.button} onClick={reFetchData} />
      </div>
    </>
  );
};
