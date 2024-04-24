import { css } from "@emotion/react";
interface InfoProps {
  Color?: any;
}
export const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 20px 50px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);

  h2 {
    font-size: 21px;
    text-align: center;
    font-weight: 800;
    padding: 10px 0;
  }
`;

export const Info = css`
  border-radius: 7px;
  width: 500px;
  background-color: #333;
`;

export const HeaderText = css`
  color: yellow;
  margin-top: 5px;
  margin-left: 10px;
  font-weight: bold;
`;

export const UserConfig = css`
  background-color: #fff;
  margin: 10px 10px 3px 10px;
  height: 170px;
  border-radius: 5px;

  .userConfigCon {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ChInfo = ({ Color }: InfoProps) => css`
  border-radius: 20px;
  color: #fff;
  text-align: left;
  background-color: ${Color};
  width: 130px;
  height: 20px;
  margin: 10px 10px 0px 5px;
  font-weight: normal;
  span {
    margin-left: 7px;
    margin-right: 7px;
    font-size: 12px;
  }
  & .dojang {
    ::after {
      content: " 층";
    }
  }
`;

export const ChLev = css`
  color: #fff;
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 20px;
  background-color: #9aa2ab;
  width: 100px;
  height: 20px;
  text-align: center;
  font-weight: normal;
  &::before {
    content: "LV. ";
  }
`;

export const DetailContainer = css`
  justify-content: center;
  border-radius: 7px;
  align-items: center;
  width: 500px;
  background-color: #333333;
`;
export const Stat = css`
  background-color: #6a7583;
  text-align: center;
  margin: 10px 10px 0 10px;
  border-radius: 7px 7px 0 0;
  color: #fff;
`;

export const Power = css`
  background-color: #3e6076;
  margin: 5px 10px 0 10px;
  height: 40px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 10px;
`;

export const PowerLabel = css`
  margin-right: 20px;
`;

export const PowerValue = css`
  font-size: 20px;
  color: #ffff33;
  white-space: nowrap;
`;

// 장비창
export const ItemCon = css`
  background-color: gray;
`;

export const divCon = css`
  background-color: wheat;
`;
