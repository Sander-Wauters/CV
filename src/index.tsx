import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
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

const colors = createTheme({
  palette: {
    primary: {
      main: "#458588",
    },
    secondary: {
      main: "#076678",
    },
    background: {
      default: "#FCFCFA",
    },
  },
});

const theme = createTheme(colors, {
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
          borderColor: colors.palette.primary.main,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        sx: {
          lineHeight: 1.4,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        h2, h4 {
          color: ${colors.palette.primary.main};
        }
        h6 {
          color: ${colors.palette.secondary.main};
        }
        // Increase default font size by 0.5rem.
        h2:first-letter {
          font-size: 4.25rem;
        }
        h4:first-letter {
          font-size: 2.625rem;
        }
      `,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
