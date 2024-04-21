import { useInfo } from "../../hooks/useInfo.hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../states/client";
import style from "./container.module.css";
import basicCharacter from "../../assets/basicCharacter.png";
import { Gnb } from "../header/Gnb";

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
        {/* <div className={style.characterInformation}>
          <article>
            <p>캐릭터 명 : {app.userInfo?.character_name}</p>
            <p>레벨 : {app.userInfo?.character_level}</p>
            <p>경험치 : {app.userInfo?.character_exp_rate}%</p>
            <p>길드 : {app.userInfo?.character_guild_name}</p>
            <p>직업 : {app.userInfo?.character_class}</p>
            <p>월드 : {app.userInfo?.world_name}</p>
          </article>
          <div className={style.characterImage}>
            <img
              src={characterImage}
              alt={app.userInfo ? app.userInfo.character_name : "기본캐릭터"}
            />
          </div>
        </div> */}
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
                <div className={style.ChInfo} style={{ order: -1 }}>
                  {app.userInfo?.character_class}
                </div>
                <div className={style.ChInfo}>유니온</div>
                <div className={style.ChInfo} style={{ order: 1 }}>
                  무릉도장
                </div>
                <div className={style.ChInfo} style={{ order: 2 }}>
                  인기도
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  justifyItems: "center",
                }}
              >
                <div className={style.ChLev}>
                  {app.userInfo?.character_level}
                </div>
                <img
                  style={{ alignItems: "center", justifyContent: "center" }}
                  src={characterImage}
                  alt={
                    app.userInfo ? app.userInfo.character_name : "기본캐릭터"
                  }
                />
                <p className={style.ChInfo}>{app.userInfo?.character_name}</p>
              </div>
              <div className={style.ChInfo}>
                <p>길드 {app.userInfo?.character_guild_name}</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
