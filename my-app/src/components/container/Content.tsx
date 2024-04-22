/** @jsxImportSource @emotion/react */

import { useInfo } from "../../hooks/useInfo.hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../states/client";
import style from "./container.module.css";
import basicCharacter from "../../assets/basicCharacter.png";
import { Gnb } from "../header/Gnb";
import * as Styles from "./Content.styles";
import { Button } from "../common/Button";

export const Content = () => {
  const ocId = useSelector((state: RootState) => state.ocId);

  const app = useInfo({ nickName: ocId });

  const characterImage = ocId ? app.userInfo?.character_image : basicCharacter;

  if (app.InfoLoading) return <></>;
  return (
    <>
      <header className={style.header}>
        <Gnb />
      </header>
      <div className={style.content}>
        <h2>InfoMation</h2>

        <div className={style.Info}>
          <p className={style.HeaderText}>CHARACTER INFO</p>

          <div className={style.userConfig}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "grid", alignContent: "start" }}>
                <div
                  css={Styles.ChInfo({ Color: "#9aa2ab" })}
                  style={{ textAlign: "center", fontSize: "14px" }}
                >
                  {app.userInfo?.character_class}
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div css={Styles.ChInfo({ Color: "#c9ced0" })}>
                  <span>유니온</span>
                </div>
                <div css={Styles.ChInfo({ Color: "#c9ced0" })}>
                  <span>무릉도장</span>
                </div>
                <div css={Styles.ChInfo({ Color: "#c9ced0" })}>
                  <span>인기도</span>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  justifyItems: "center",
                }}
              >
                <div css={Styles.ChLev}>{app.userInfo?.character_level}</div>
                <img
                  style={{ alignItems: "center", justifyContent: "center" }}
                  src={characterImage}
                  alt={
                    app.userInfo ? app.userInfo.character_name : "기본캐릭터"
                  }
                />
                <p
                  css={Styles.ChInfo({ Color: "#3dbfd0" })}
                  style={{ textAlign: "center" }}
                >
                  {app.userInfo?.character_name}
                </p>
              </div>

              <div style={{ display: "grid", alignContent: "start" }}>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div css={Styles.ChInfo({ Color: "#c9ced0" })}>
                  <span>길드</span> {app.userInfo?.character_guild_name}
                </div>
              </div>
            </div>
          </div>
          <Button text="Detail" css={Styles.Detail} />
        </div>
        <div css={Styles.DetailContainer}>
          <div css={Styles.Stat}>STAT</div>
          <div css={Styles.Power}>
            <span css={Styles.PowerLabel}>전투력</span>
            <span css={Styles.PowerValue}>2억4049 6048</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>
      </div>
    </>
  );
};
