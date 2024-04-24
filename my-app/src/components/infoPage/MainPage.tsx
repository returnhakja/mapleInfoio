import style from "./page.module.css";

import { TextInput } from "../common/TextInput";
import { Button } from "../common/Button";
import { useState } from "react";
import { useInfo } from "../../hooks/useInfo.hooks";
import { useNavigate } from "react-router-dom";
import { setOcid } from "../../states/client/userOcid.ts/ocid";
import { useDispatch } from "react-redux";
import { Header } from "../common/Header";
import { Main } from "../container/Main";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
