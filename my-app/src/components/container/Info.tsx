/** @jsxImportSource @emotion/react */

import { useInfo } from "../../hooks/useInfo.hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../states/client";
import basicCharacter from "../../assets/basicCharacter.png";
import * as Style from "./styles/Info.style";
import * as StatStyle from "./styles/Stat.style";
import * as ButtonStyle from "../common/styles/Button.style";
import { Button } from "../common/Button";
import { numberAttack } from "../../util/numberAttack";
import { Theme } from "../../styles/theme/index";
import { StatPageView } from "../page/StatPageView";

export const ContentInfo = () => {
  const ocId = useSelector((state: RootState) => state.ocId);
  const app = useInfo({ nickName: ocId });

  const characterImage = ocId ? app.userInfo?.character_image : basicCharacter;
  const attack = app.userStat?.find(
    (item: any) => item.stat_name === "전투력"
  ).stat_value;
  console.log(attack);
  if (app.InfoLoading) return <></>;
  return (
    <div style={{ display: "flex" }}>
      <div css={Style.Content}>
        <h2>InfoMation</h2>
        <div css={Style.Info}>
          <p css={Style.HeaderText}>CHARACTER INFO</p>
          <div css={Style.UserConfig}>
            <div className="userConfigCon">
              <div style={{ display: "grid", alignContent: "start" }}>
                <div
                  css={Style.ChInfo({ Color: Theme.colors.chInfo })}
                  style={{ textAlign: "center", fontSize: "14px" }}
                >
                  {app.userInfo?.character_class}
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div
                  css={[
                    Style.ChInfo({ Color: Theme.colors.subInfo }),
                    Style.flex,
                  ]}
                >
                  <span>유니온</span>
                  <span style={{ textAlign: "right" }}>
                    {app.userUnion?.union_level}
                  </span>
                </div>
                <div
                  css={[
                    Style.ChInfo({ Color: Theme.colors.subInfo }),
                    Style.flex,
                  ]}
                >
                  <span>무릉도장</span>
                  <span style={{ textAlign: "right" }} className="dojang">
                    {app.userDojang?.dojang_best_floor}
                  </span>
                </div>
                <div
                  css={[
                    Style.ChInfo({ Color: Theme.colors.subInfo }),
                    Style.flex,
                  ]}
                >
                  <span>인기도</span>
                  <span style={{ textAlign: "right" }}>
                    {app.userPopularity?.popularity}
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  justifyItems: "center",
                }}
              >
                <div css={Style.ChLev}>{app.userInfo?.character_level}</div>
                <img
                  style={{ alignItems: "center", justifyContent: "center" }}
                  src={characterImage}
                  alt={
                    app.userInfo ? app.userInfo.character_name : "기본캐릭터"
                  }
                />
                <p
                  css={Style.ChInfo({ Color: Theme.colors.name })}
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
                <div css={[Style.ChInfo({ Color: "#c9ced0" }), Style.flex]}>
                  <span>길드</span>
                  <span style={{ textAlign: "right" }}>
                    {app.userInfo?.character_guild_name}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Button text="Detail" css={ButtonStyle.DetailButton} />
        </div>
        <div css={Style.DetailContainer}>
          <div style={{ borderBottom: "1px solid gray" }}>
            <div css={Style.Stat}>STAT</div>
          </div>
          <div css={Style.Power}>
            <span css={Style.PowerLabel}>전투력</span>
            <span css={Style.PowerValue}>{numberAttack(attack)}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
          <div css={StatStyle.statContainer}>
            {app.sortedStats?.map((item) => {
              return (
                <StatPageView
                  statName={item?.stat_name}
                  statValue={parseInt(item?.stat_value).toLocaleString()}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
