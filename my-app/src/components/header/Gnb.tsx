import { useState } from "react";
import Logo from "../../assets/logo.png";
import { useInfo } from "../../hooks/useInfo.hooks";
import { Button } from "../common/Button";
import { TextInput } from "../common/TextInput";
import style from "../infoPage/page.module.css";
import { useDispatch } from "react-redux";
import { setOcid } from "../../states/client/userOcid.ts/ocid";
export const Gnb = () => {
  const [nickName, setNickName] = useState("");
  const app = useInfo({ nickName });
  const dispatch = useDispatch();
  const reFetchData = () => {
    app.refetch();
    dispatch(setOcid(nickName));
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.08)",
      }}
    >
      <img
        src={Logo}
        alt="Logo"
        onClick={() => (window.location.href = "/")}
        style={{
          width: "100px",
          height: "100px",
        }}
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
