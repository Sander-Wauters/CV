import "@fontsource-variable/roboto";
import "@fontsource-variable/lora";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./layout";
import "./i18n";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

const primaryFont = `"Roboto Variable", sans-serif` as const;
const secondaryFont = `"Lora Variable", sans-serif` as const;

const theme = createTheme({
  palette: {
    primary: {
      main: "#076678",
    },
    secondary: {
      main: "#458588",
    },
    background: {
      default: "#FCFCFA",
    },
  },
});

const components = createTheme(theme, {
  typography: {
    fontFamily: primaryFont,
    h1: {
      fontFamily: secondaryFont,
    },
    h2: {
      fontFamily: secondaryFont,
    },
    h3: {
      fontFamily: secondaryFont,
    },
    h4: {
      fontFamily: secondaryFont,
    },
    h5: {
      fontFamily: secondaryFont,
    },
    h6: {
      fontFamily: secondaryFont,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
    MuiList: {
      defaultProps: {
        sx: {
          p: 0,
        },
      },
    },
    MuiListItem: {
      defaultProps: {
        sx: {
          px: 0,
          py: 0.5,
        },
      },
    },
    MuiDivider: {
      defaultProps: {
        sx: {
          borderColor: theme.palette.secondary.main,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h2: "h1",
          h4: "h2",
          h6: "h3",
        },
        sx: {
          lineHeight: 1.4,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        h1, h2 {
          color: ${theme.palette.primary.main};
        }
        h3, h4 {
          color: ${theme.palette.secondary.main};
        }
        h1:first-letter {
          font-size: calc(100% + 0.5rem);
        }
        h2:first-letter {
          font-size: calc(100% + 0.5rem);
        }
      `,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={components}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
