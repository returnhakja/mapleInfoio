import { Outlet } from "react-router-dom";
import { Header } from "../common/Header";

export const Layout = () => {
  return (
    <div style={{ paddingTop: "110px" }}>
      <Header />
      <Outlet />
    </div>
  );
};
