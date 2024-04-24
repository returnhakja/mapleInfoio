const Sizes = {
  xxl: "20px",
  xl: "18px",
  lg: "16px",
  md: "14px",
  nm: "13px",
  sm: "12px",
  xs: "11px",
} as const;

const MediaSizes = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1240px",
  xxl: "1400px",
} as const;

const Colors = {
  blue: "#377dff",
  lightBlue: "rgb(243, 247, 249)",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#e83e8c",
  red: "#ed4c78",
  orange: "#fd7e14",
  yellow: "#f5ca99",
  green: "#28a745",
  teal: "#00c9a7",
  cyan: "#00c9db",
  white: "#fff",
  gray: "#8c98a4",
  lightGray: "rgb(231, 236, 238)",
  darkGray: "#71869d",
  primary: "#377dff",
  secondary: "#71869d",
  success: "#00c9a7",
  info: "#00c9db",
  warning: "#f5ca99",
  danger: "#ed4c78",
  light: "#eeeef0",
  dark: "#183153",
  border: "rgb(203, 212, 222)",
  label: "#647287",
  black: "#333",
  transparent: "transparent",
  input: "#f3f7f9",
  chInfo: "#9aa2ab",
  subInfo: "#c9ced0",
  name: "#3dbfd0",
} as const;

const Borders = {
  default: `1px solid ${Colors.border}`,
} as const;

const BoxShadow = {
  default: `0px 4px 6px -1px rgba(0, 0, 0, 0.1),
  0px 2px 4px -1px rgba(0, 0, 0, 0.06);`,
} as const;

const Media = (size: any) => `@media (min-width: ${size})`;

export const Theme = {
  colors: Colors,
  border: Borders,
  BoxShadow: BoxShadow,
  size: Sizes,
  mediaSizes: MediaSizes,
  media: Media,
} as const;
