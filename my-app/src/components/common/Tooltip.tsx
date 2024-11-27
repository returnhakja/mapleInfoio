/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface TooltipProps {
  content: React.ReactNode;
  isVisible: boolean;
}

export const Tooltip = ({ content, isVisible }: TooltipProps) => {
  if (!isVisible) return null;

  return <div css={tooltipStyle}>{content}</div>;
};

const tooltipStyle = css`
  position: absolute;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 10px;
  border-radius: 4px;
  z-index: 1000;
  min-width: 300px;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 8px;
  border: 1px solid #666;
`;
