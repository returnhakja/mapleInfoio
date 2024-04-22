/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Logo from "../../assets/logo.png";
import { useInfo } from "../../hooks/useInfo.hooks";
import { Button } from "../common/Button";
import { TextInput } from "../common/TextInput";
import style from "../infoPage/page.module.css";
import { useDispatch } from "react-redux";
import { setOcid } from "../../states/client/userOcid.ts/ocid";
import * as Styles from "./Header.styles";
export const Gnb = () => {
  const [nickName, setNickName] = useState("");
  const app = useInfo({ nickName });
  const dispatch = useDispatch();
  const reFetchData = () => {
    app.refetch();
    dispatch(setOcid(nickName));
  };
  return (
    <div css={Styles.HeaderCon}>
      <img
        css={Styles.Logo}
        src={Logo}
        alt="Logo"
        onClick={() => (window.location.href = "/")}
      />
      <div className={style.inputCon}>
        <TextInput
          className={style.inPut}
          placeholder="닉네임을 입력하세요."
          onChange={(e: any) => setNickName(e.target.value)}
        />
        <Button text="조회" className={style.button} onClick={reFetchData} />
      </div>
    </div>
  );
};
