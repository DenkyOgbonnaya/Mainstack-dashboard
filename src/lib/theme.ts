import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const pallets = {
  black300: "#131316",
  secondaryOrange: "#FF5403",
  gray0: "#EFF1F6",
  gray400: "#4D5760",
  gray500: "#31373D",
  white: "#ffffff",
  orangeSecondary: "#FF5403",
  orangeDefault: "#FF5403",
};
const themeConfig = {
  colors: {
    brand: {
      500: pallets.orangeDefault,
    },
    gray: {
      0: pallets.gray0,
      400: pallets.gray400,
      500: pallets.gray500,
    },
    background: pallets.white,
    surface: pallets.gray0,
    text: {
      heading: pallets.black300,
      subHeading: pallets.gray500,
      body: pallets.gray400,
      activeText: pallets.orangeDefault,
    },
    icon: {
      default: pallets.gray500,
      active: pallets.orangeSecondary,
    },
  },
  fonts: {
    heading: `var(--font-sohne) ${baseTheme.fonts?.heading}`,
    body: `var(--font-sohne) ${baseTheme.fonts?.body}`,
  },
};

export const theme = extendTheme({
  ...themeConfig,
});

export const darkTheme = {
  ...themeConfig,
};
export default theme;
