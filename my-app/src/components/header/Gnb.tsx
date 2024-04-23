/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { useInfo } from "../../hooks/useInfo.hooks";
import { Button } from "../common/Button";
import { TextInput } from "../common/TextInput";
import style from "../infoPage/page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setOcid } from "../../states/client/userOcid.ts/ocid";
import * as Styles from "./Header.styles";
import { RootState } from "../../states/client";
export const Gnb = () => {
  const [nickName, setNickName] = useState("");
  const ocId = useSelector((state: RootState) => state.ocId);
  const app = useInfo({ nickName });
  const dispatch = useDispatch();
  const reFetchData = () => {
    app.refetch();
    dispatch(setOcid(nickName));
  };
  return (
    <div css={Styles.HeaderCon}>
      <figure css={Styles.Logo} onClick={() => (window.location.href = "/")}>
        <img src={Logo} alt="Logo" />
      </figure>
      {ocId ? (
        <div css={Styles.inputCon}>
          <TextInput
            className={style.inPut}
            placeholder="닉네임을 입력하세요."
            onChange={(e: any) => setNickName(e.target.value)}
          />
          <Button text="조회" className={style.button} onClick={reFetchData} />
        </div>
      ) : null}
    </div>
  );
};
