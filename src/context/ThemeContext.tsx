import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  createContext,
  useMemo,
  useState,
  type ReactNode,
  useContext,
} from "react";

interface ContextType {
  toggleTheme: () => void;
}

const context = createContext<ContextType>({ toggleTheme: () => {} });

export function ThemeAppProvider(props: { children?: ReactNode }) {
  // Misc
  const systemIsDark = useMediaQuery("(prefers-color-scheme: dark)"); // https://mui.com/material-ui/customization/dark-mode/#system-preference
  // State
  const [mode, setMode] = useState<"light" | "dark">(
    systemIsDark ? "dark" : "light"
  );
  const colorMode = useMemo(
    () =>
      ({
        toggleTheme: () => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
      } satisfies ContextType),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <context.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props?.children}</ThemeProvider>
    </context.Provider>
  );
}

export function useToogleTheme() {
  return useContext(context).toggleTheme;
}
