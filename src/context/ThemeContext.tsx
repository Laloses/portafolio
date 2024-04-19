import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  createContext,
  useMemo,
  useState,
  type ReactNode,
  useCallback,
} from 'react';
import { customTheme } from './customTheme';
import { Constants } from '../globals/constants';

interface ContextType {
  toggleTheme: () => void;
}

const themeContext = createContext<ContextType>({
  toggleTheme: Constants.EMPTY_FUNCTION,
});
export { themeContext as ThemeContext };

export function ThemeAppProvider(props: { children?: ReactNode }) {
  // Misc
  const systemIsDark = useMediaQuery('(prefers-color-scheme: dark)'); // https://mui.com/material-ui/customization/dark-mode/#system-preference
  // State
  const [mode, setMode] = useState<'light' | 'dark'>(
    systemIsDark ? 'dark' : 'light'
  );
  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);
  const context = useMemo(
    () => ({ toggleTheme }) satisfies ContextType,
    [toggleTheme]
  );
  const theme = useMemo(
    () =>
      createTheme({
        ...customTheme,
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <themeContext.Provider value={context}>
      <ThemeProvider theme={theme}>{props?.children}</ThemeProvider>
    </themeContext.Provider>
  );
}
