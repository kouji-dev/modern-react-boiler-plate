import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ComponentWithChildren } from "@common/types";

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

export const MuiConfig: ComponentWithChildren<unknown> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
