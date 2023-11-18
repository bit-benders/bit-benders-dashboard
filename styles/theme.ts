import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#F3F6FB",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#A0A0A0",
    lightGray: "#F3F6FB",
    darkerGray: "#233EFF",
    input: "#040825",
    background: "#050A30",
    darkerBlue: "#040825",
    lightBlue: "#233EFF",
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "IBM Plex Mono, monospace",
  },
  blacks: {
    400: "#2D2D2D",
    500: "#1B1A1A",
    600: "#151414",
    700: "#0D0D0D",
  },
  green: {
    700: "#00BF63",
  },
  red: {
    700: "#FF3131",
  },
  components: {
    Input: {
      baseStyle: (props: { colorMode: string }) => ({
        field: {
          color: props.colorMode === "dark" ? "white" : "gray.800",
          _focus: { boxShadow: "none" },
          "::-webkit-calendar-picker-indicator": {
            cursor: "pointer",

            filter: "invert(1)",
          },
        },
      }),
    },
  },
});

export default theme;
