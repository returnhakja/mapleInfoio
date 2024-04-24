import { Outlet } from "react-router-dom";
import { Header } from "../common/Header";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
