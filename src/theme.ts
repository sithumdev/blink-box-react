import { Shadows, ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#161616",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fbe5cc",
    },
    background: {
      default: "#edf0f1",
    },
    // grey: {
    //   "100": "#000000",
    // },
    // text: {
    //   primary: "#ffffff",
    // },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, "Open Sans"',
  },
  shadows: Array(25).fill("none") as Shadows,
};

const theme = createTheme(themeOptions);

export default theme;
