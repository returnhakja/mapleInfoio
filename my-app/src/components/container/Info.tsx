/** @jsxImportSource @emotion/react */

import { useInfo } from "../../hooks/useInfo.hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../states/client";
import basicCharacter from "../../assets/basicCharacter.png";
import * as Style from "./styles/Info.style";
import * as StatStyle from "./styles/Stat.style";
import * as ButtonStyle from "../common/styles/Button.style";
import * as EquipStyle from "./styles/EquipMents.style";
import { Button } from "../common/Button";
import { numberAttack } from "../../util/numberAttack";
import { Theme } from "../../styles/theme/index";
import { StatPageView } from "../page/StatPageView";
import { useState } from "react";
import { Tooltip } from "../common/Tooltip";
import { css } from "@emotion/react";
export const ContentInfo = () => {
  const ocId = useSelector((state: RootState) => state.ocId);
  const app = useInfo({ nickName: ocId });

  const characterImage = ocId ? app.userInfo?.character_image : basicCharacter;
  const attack = app.userStat?.find(
    (item: any) => item.stat_name === "전투력"
  ).stat_value;
  console.log(attack);
  // console.log(app.ring4Icon);
  console.log(app.userItemIcons["귀고리"]);

  const itemIcons = [
    "반지4",
    "모자",
    "엠블렘",
    "반지3",
    "펜던트2",
    "얼굴장식",
    "뱃지",
    "반지2",
    "펜던트",
    "눈장식",
    "귀고리",
    "훈장",
    "반지1",
    "무기",
    "상의",
    "어깨장식",
    "보조무기",
    "포켓 아이템",
    "벨트",
    "하의",
    "장갑",
    "망토",
    "",
    "신발",
    "기계 심장",
  ];
  interface Position {
    top: string;
    left: string;
  }

  interface Positions {
    [key: number]: Position;
  }

  const getPositionStyle = (index: number) => {
    const positions: Positions = {
      0: { top: "10px", left: "10px" },
      1: { top: "10px", left: "120px" },
      2: { top: "10px", left: "250px" },
      3: { top: "70px", left: "10px" },
      4: { top: "70px", left: "70px" },
      5: { top: "70px", left: "120px" },
      6: { top: "70px", left: "250px" },
      7: { top: "130px", left: "10px" },
      8: { top: "130px", left: "70px" },
      9: { top: "130px", left: "120px" },
      10: { top: "130px", left: "180px" },
      11: { top: "130px", left: "250px" },
      12: { top: "190px", left: "10px" },
      13: { top: "190px", left: "70px" },
      14: { top: "190px", left: "120px" },
      15: { top: "190px", left: "180px" },
      16: { top: "190px", left: "250px" },
      17: { top: "250px", left: "10px" },
      18: { top: "250px", left: "70px" },
      19: { top: "250px", left: "120px" },
      20: { top: "250px", left: "180px" },
      21: { top: "250px", left: "250px" },
      22: { top: "310px", left: "10px" },
      23: { top: "310px", left: "120px" },
      24: { top: "310px", left: "250px" },
      25: { top: "310px", left: "250px" },
      26: { top: "310px", left: "250px" },
    };
    return css`
      position: absolute;
      top: ${positions[index]?.top || "0px"};
      left: ${positions[index]?.left || "0px"};
    `;
  };

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  console.log(app.userItemIcons);

  const renderStars = (itemName: string) => {
    const starCount = app.userItemStarForce[itemName] || 0;

    const renderStarGroup = (start: number, count: number) => (
      <div
        css={css`
          display: flex;
          gap: 2px;
        `}
      >
        {[...Array(count)].map((_, index) => (
          <span
            key={start + index}
            css={css`
              color: ${start + index < starCount ? "#FFD700" : "#4a4a4a"};
              font-size: 12px;
            `}
          >
            ★
          </span>
        ))}
      </div>
    );

    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 2px;
        `}
      >
        <div
          css={css`
            display: flex;
            gap: 8px;
            justify-content: center;
          `}
        >
          {renderStarGroup(0, 5)}
          {renderStarGroup(5, 5)}
          {renderStarGroup(10, 5)}
        </div>
        <div
          css={css`
            display: flex;
            gap: 8px;
            justify-content: center;
          `}
        >
          {renderStarGroup(15, 5)}
          {renderStarGroup(20, 5)}
        </div>
      </div>
    );
  };
  const renderItemIcons = () => {
    return (
      <div css={EquipStyle.InventoryContainer}>
        {itemIcons.map((icon, index) => (
          <div key={index} css={[EquipStyle.ItemSlot, getPositionStyle(index)]}>
            {icon && (
              <div
                css={EquipStyle.IconContainer}
                onMouseEnter={() => setHoveredItem(icon)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={app.userItemIcons[icon]}
                  css={EquipStyle.EquContainer}
                  alt={icon}
                />
                <Tooltip
                  isVisible={hoveredItem === icon}
                  content={
                    <div>
                      {renderStars(icon)}
                      <h3
                        css={css`
                          display: flex;
                          justify-content: center;
                          margin-top: 10px;
                          font-size: 18px;
                          font-weight: bold;
                        `}
                      >
                        {`${app.userItemName[icon]}${
                          app.userItemStat[icon]?.scroll_upgrade > 0
                            ? ` (+${app.userItemStat[icon]?.scroll_upgrade})`
                            : ""
                        }`}
                      </h3>
                      <p
                        css={css`
                          display: flex;
                          justify-content: center;
                          margin-top: 10px;
                          font-size: 18px;
                          font-weight: bold;
                        `}
                      >
                        {app.userItemStat[icon]?.potential_option_grade &&
                          `(${app.userItemStat[icon]?.potential_option_grade})`}
                      </p>
                      <div
                        css={css`
                          border-top: 1px dotted #666;
                          margin: 8px 0;
                        `}
                      />
                      <div
                        css={css`
                          background-color: #fff;
                          width: 40%;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        `}
                      >
                        <img
                          src={app.userItemIcons[icon]}
                          css={css`
                            width: 50px;
                            height: 50px;
                            object-fit: contain;
                          `}
                          alt={icon}
                        />
                      </div>
                      <div
                        css={css`
                          p {
                            margin: 5px 0;
                          }
                          p:first-of-type {
                            margin-top: 0;
                          }
                          p:last-of-type {
                            margin-bottom: 0;
                          }
                        `}
                      >
                        <p>장비분류 : {app.userItemStat[icon]?.part}</p>
                        <br />

                        {app.userItemStat[icon].item_total_option?.str > 0 && (
                          <p>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              STR +{" "}
                            </span>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              {app.userItemStat[icon].item_total_option?.str}
                            </span>{" "}
                            ({app.userItemStat[icon]?.str} +
                            <span
                              css={css`
                                color: #90ee90;
                              `}
                            >
                              {app.userItemStat[icon]?.item_add_option?.str}
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #4a90e2;
                              `}
                            >
                              {app.userItemStat[icon]?.item_etc_option?.str}
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #ffd700;
                              `}
                            >
                              {
                                app.userItemStat[icon]?.item_starforce_option
                                  ?.str
                              }
                            </span>
                            )
                          </p>
                        )}
                        {app.userItemStat[icon].item_total_option?.dex > 0 && (
                          <p>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              DEX +{" "}
                            </span>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              {app.userItemStat[icon].item_total_option?.dex}
                            </span>{" "}
                            ({app.userItemStat[icon]?.dex} +
                            <span
                              css={css`
                                color: #90ee90;
                              `}
                            >
                              {app.userItemStat[icon]?.item_add_option?.dex}
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #4a90e2;
                              `}
                            >
                              {app.userItemStat[icon]?.item_etc_option?.dex}
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #ffd700;
                              `}
                            >
                              {
                                app.userItemStat[icon]?.item_starforce_option
                                  ?.dex
                              }
                            </span>
                            )
                          </p>
                        )}

                        {app.userItemStat[icon].item_total_option?.int > 0 && (
                          <p>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              INT +{" "}
                            </span>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              {app.userItemStat[icon].item_total_option?.int}
                            </span>{" "}
                            ({app.userItemStat[icon]?.int} +
                            <span
                              css={css`
                                color: #90ee90;
                              `}
                            >
                              {app.userItemStat[icon]?.item_add_option?.int}
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #4a90e2;
                              `}
                            >
                              {app.userItemStat[icon]?.item_etc_option?.int}
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #ffd700;
                              `}
                            >
                              {
                                app.userItemStat[icon]?.item_starforce_option
                                  ?.int
                              }
                            </span>
                            )
                          </p>
                        )}

                        {app.userItemStat[icon].item_total_option?.luk > 0 && (
                          <p>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              LUK +{" "}
                            </span>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              {app.userItemStat[icon].item_total_option?.luk}
                            </span>{" "}
                            ({app.userItemStat[icon]?.luk} +
                            <span
                              css={css`
                                color: #90ee90;
                              `}
                            >
                              {app.userItemStat[icon]?.item_add_option?.luk}
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #4a90e2;
                              `}
                            >
                              {app.userItemStat[icon]?.item_etc_option?.luk}
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #ffd700;
                              `}
                            >
                              {
                                app.userItemStat[icon]?.item_starforce_option
                                  ?.luk
                              }
                            </span>
                            )
                          </p>
                        )}
                        {app.userItemStat[icon].item_total_option
                          ?.attack_power > 0 && (
                          <p>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              공격력 +{" "}
                            </span>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              {
                                app.userItemStat[icon].item_total_option
                                  ?.attack_power
                              }
                            </span>{" "}
                            ({app.userItemStat[icon]?.attack_power} +
                            <span
                              css={css`
                                color: #90ee90;
                              `}
                            >
                              {
                                app.userItemStat[icon]?.item_add_option
                                  ?.attack_power
                              }
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #4a90e2;
                              `}
                            >
                              {
                                app.userItemStat[icon]?.item_etc_option
                                  ?.attack_power
                              }
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #ffd700;
                              `}
                            >
                              {
                                app.userItemStat[icon]?.item_starforce_option
                                  ?.attack_power
                              }
                            </span>
                            )
                          </p>
                        )}
                        {app.userItemStat[icon].item_total_option?.magic_power >
                          0 && (
                          <p>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              마력 +{" "}
                            </span>
                            <span
                              css={css`
                                color: skyblue;
                              `}
                            >
                              {
                                app.userItemStat[icon].item_total_option
                                  ?.magic_power
                              }
                            </span>{" "}
                            ({app.userItemStat[icon]?.magic_power} +
                            <span
                              css={css`
                                color: #90ee90;
                              `}
                            >
                              {
                                app.userItemStat[icon]?.item_add_option
                                  ?.magic_power
                              }
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #4a90e2;
                              `}
                            >
                              {
                                app.userItemStat[icon]?.item_etc_option
                                  ?.magic_power
                              }
                            </span>{" "}
                            +
                            <span
                              css={css`
                                color: #ffd700;
                              `}
                            >
                              {
                                app.userItemStat[icon]?.item_starforce_option
                                  ?.magic_power
                              }
                            </span>
                            )
                          </p>
                        )}
                        {app.userItemStat[icon]?.ignore_monster_armor > 0 && (
                          <p>
                            몬스터 방어률 무시 +{" "}
                            {app.userItemStat[icon]?.ignore_monster_armor}%
                          </p>
                        )}
                      </div>
                      <div
                        css={css`
                          border-top: 1px dotted #666;
                          margin: 8px 0;
                        `}
                      />
                      <div>
                        <p
                          css={app.getPotentialGradeStyle(
                            app.userItemStat[icon]?.potential_option_grade
                          )}
                        >
                          {app.userItemStat[icon]?.potential_option_grade &&
                            "잠재옵션"}
                        </p>
                        <p>{app.userItemStat[icon]?.potential_option_1}</p>
                        <p>{app.userItemStat[icon]?.potential_option_2}</p>
                        <p>{app.userItemStat[icon]?.potential_option_3}</p>
                      </div>
                      <div
                        css={css`
                          border-top: 1px dotted #666;
                          margin: 8px 0;
                        `}
                      />
                      <div>
                        <p
                          css={app.getPotentialGradeStyle(
                            app.userItemStat[icon]
                              ?.additional_potential_option_grade
                          )}
                        >
                          {app.userItemStat[icon]
                            ?.additional_potential_option_grade &&
                            "에디셔널 잠재옵션"}
                        </p>
                        <p>
                          {
                            app.userItemStat[icon]
                              ?.additional_potential_option_1
                          }
                        </p>
                        <p>
                          {
                            app.userItemStat[icon]
                              ?.additional_potential_option_2
                          }
                        </p>
                        <p>
                          {
                            app.userItemStat[icon]
                              ?.additional_potential_option_3
                          }
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  if (app.InfoLoading) return <>로딩중...</>;
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
          <div
            css={StatStyle.statContainer({
              color: "#a6afb9",
              marginRight: "20",
            })}
          >
            {app.sortedStats?.map((item) => {
              return (
                <StatPageView
                  key={item?.stat_name}
                  statName={item?.stat_name}
                  statValue={parseInt(item?.stat_value).toLocaleString()}
                />
              );
            })}
          </div>
          <div
            css={StatStyle.statContainer({
              color: "#6c7884",
              marginRight: "10",
            })}
          >
            {app.secondStats?.map((item) => {
              return (
                <StatPageView
                  key={item?.stat_name}
                  statName={item?.stat_name}
                  statValue={item?.stat_value}
                />
              );
            })}
          </div>
          <div
            css={StatStyle.statContainer({
              color: "#6c7884",
              marginRight: "10",
            })}
          >
            {app.ThirdStats?.map((item) => {
              return (
                <>
                  <StatPageView
                    key={item?.stat_name}
                    statName={item?.stat_name}
                    statValue={item?.stat_value}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div css={Style.Content}>
        <div css={EquipStyle.BtnDiv}>
          <Button text="Equipments" css={EquipStyle.Btn} />
          <Button text="Skills" css={EquipStyle.Btn} />
        </div>
        <div css={Style.Info} style={{ width: "340px", height: "60%" }}>
          <p css={Style.HeaderText} style={{ textAlign: "center" }}>
            EQUIPMENT INVENTORY
          </p>
          <div css={Style.UserConfig} style={{ height: "85%" }}>
            <div css={Style.UserConfig}>
              <div css={EquipStyle.EquCon}>{renderItemIcons()}</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "5px",
              marginRight: "5%",
              height: "4%",
            }}
          >
            <button>어센틱 심볼</button>
            <button>아케인 심볼</button>
          </div>
        </div>
      </div>
    </div>
  );
};
