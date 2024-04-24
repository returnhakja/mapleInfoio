import { css } from "@emotion/react";

export const SearchButton = css`
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
`;

export const DetailButton = css`
  margin-left: 8px;
  margin-bottom: 10px;
  width: 97%;
  border-radius: 10px 10px 10px 10px;
  background-color: #313941;
  color: #fff;
  font-size: 8px;
`;
