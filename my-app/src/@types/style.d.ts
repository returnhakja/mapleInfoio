// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Theme = typeof import("../styles/theme/index").Theme;

declare module Style {
  type Size = keyof Theme["size"];
  type Colors = keyof Theme["colors"];
  type Border = keyof Theme["border"];
}
