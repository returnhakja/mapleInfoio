import style from "./page.module.css";
import Gnb from "../header/Gnb";
import { TextInput } from "../common/TextInput";
import { Button } from "../common/Button";
import { useState } from "react";
import { useInfo } from "../../hooks/useInfo.hooks";
import { useNavigate } from "react-router-dom";
import { setOcid } from "../../states/client/userOcid.ts/ocid";
import { useDispatch } from "react-redux";

export const MainPage = () => {
  const [nickName, setNickName] = useState<string>("");
  const navigate = useNavigate();
  const app = useInfo({ nickName });
  const contents = [
    { heading: "컨텐츠1" },
    { heading: "컨텐츠2" },
    { heading: "컨텐츠2" },
    { heading: "컨텐츠2" },
  ];

  // const navigate = useNavigate();
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
