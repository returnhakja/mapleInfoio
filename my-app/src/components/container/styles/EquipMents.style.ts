import { css } from "@emotion/react";

export const EquContainer = css`
  background-color: red;
  width: 40px;
  height: 40px;
`;

export const EquCon = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  /* justify-content: space-between; */
  margin-left: 7px;
  padding-top: 10px;
`;

export const BtnDiv = css`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
`;
export const Btn = css`
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #74eaf1;
  border: 0px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16),
    0px 3px 6px 0px rgba(0, 0, 0, 0.23);
`;
