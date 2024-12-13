/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useInfo } from "../../hooks/useInfo.hooks";
import { TextInput } from "./TextInput";
import { Button } from "./Button";
import Logo from "../../assets/logo.png";
import * as style from "./styles/Header.style";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [nickName, setNickName] = useState("");
  const app = useInfo({ nickName });
  const inputFlag = useLocation().pathname === "/info";

  const reFetchData = () => {
    app.executeSearch(nickName);
  };
  const onKeyUp = (e: any) => {
    if (e.key === "Enter") {
      reFetchData();
    }
  };

  return (
    <header css={style.Header}>
      <div css={style.HeaderCon}>
        <figure css={style.Logo} onClick={() => (window.location.href = "/")}>
          <img src={Logo} alt="Logo" />
        </figure>
        {inputFlag ? (
          <div css={style.inputCon} onKeyUp={onKeyUp}>
            <TextInput
              placeholder="닉네임을 입력하세요."
              onChange={(e: any) => setNickName(e.target.value)}
            />
            <Button text="조회" onClick={reFetchData} />
          </div>
        ) : null}
      </div>
    </header>
  );
};
