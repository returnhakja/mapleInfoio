import { css } from "@emotion/react";

export const Header = css`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
`;

export const HeaderCon = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.08);
`;

export const Logo = css`
  width: 100px;
  height: 100px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const inputCon = css`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 80px;
    height: 56px;
    border-radius: 0 12px 12px 0;
    border: 1px solid #3860c7;
    color: #fff;
    background: #3860c7;

    &:hover {
      background-color: blue;
      cursor: pointer;
    }
  }
`;
