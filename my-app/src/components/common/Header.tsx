/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../states/client";
import { useInfo } from "../../hooks/useInfo.hooks";
import { setOcid } from "../../states/client/userOcid.ts/ocid";
import { TextInput } from "./TextInput";
import { Button } from "./Button";
import Logo from "../../assets/logo.png";
import * as style from "./styles/header.style";

export const Header = () => {
  const [nickName, setNickName] = useState("");
  const ocId = useSelector((state: RootState) => state.ocId);
  const app = useInfo({ nickName });
  const dispatch = useDispatch();
  const reFetchData = () => {
    app.refetch();
    dispatch(setOcid(nickName));
  };

  return (
    <header css={style.Header}>
      <div css={style.HeaderCon}>
        <figure css={style.Logo} onClick={() => (window.location.href = "/")}>
          <img src={Logo} alt="Logo" />
        </figure>
        {ocId ? (
          <div css={style.inputCon}>
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
