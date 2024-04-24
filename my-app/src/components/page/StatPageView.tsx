/** @jsxImportSource @emotion/react */
import * as StatStyle from "../../components/container/styles/Stat.style";
interface statProps {
  statName: string;
  statValue: string;
}
export const StatPageView = ({ statName, statValue }: statProps) => {
  return (
    <div css={StatStyle.statPair}>
      <span className="shadow">{statName}</span> <span>{statValue}</span>
    </div>
  );
};
