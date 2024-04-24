import { css } from "@emotion/react";

export const statContainer = css`
  background-color: #a6afb9;
  margin: 5px 20px 3px 10px;
  border-radius: 7px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const statPair = css`
  flex: 0 0 calc(50% - 10px); /* 한 줄에 2쌍씩 표시되도록 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px; /* 스탯과 값 쌍 사이의 간격을 조정 */
  color: white;
  & .shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
