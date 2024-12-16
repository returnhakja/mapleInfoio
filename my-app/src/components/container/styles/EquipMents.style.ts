import { css } from "@emotion/react";
const breakpoints = {
  mobile: "@media (max-width: 768px)",
  tablet: "@media (min-width: 769px) and (max-width: 1024px)",
};

export const EquCon = css`
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  gap: 10px;
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

export const GridContainer = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  width: fit-content;
  padding: 15px;
`;

export const GridItem = css`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptySlot = css`
  width: 100%;
  height: 100%;
`;

export const IconContainer = css`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const EquContainer = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const InventoryContainer = css`
  position: relative;
  width: 300px;
  height: 370px;
  border-radius: 8px;
  background: #2b2b2b;
  border: 1px solid #666;
`;

export const ItemSlot = css`
  width: 40px;
  height: 40px;
`;
