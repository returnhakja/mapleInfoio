import { css } from "@emotion/react";

export const MainCon = css`
  margin: 110px auto 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 820px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.15);

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    padding: 10px;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 3px;
    color: #1e1e1e;
  }
`;

export const InputCon = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchRanking = css`
  margin-top: 25px;
  width: 368px;
  height: 240px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.15);
  border: 1px solid #6a87d5;
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 21px;
    font-weight: 600;
  }
`;

export const RankersDisplay = css`
  width: 100%;
`;
