import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material';

const ThemeContext = createContext<IThemeContext>({
  activeTheme: 'default',
  themeNames: [],
  setTheme: () => void 0,
});

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider({ children, themes, defaultTheme }: IThemeProviderProps) {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);

  const theme = useMemo(() => themes[activeTheme || defaultTheme], [themes, activeTheme]);

  const ctx = useMemo(() => ({
    activeTheme,
    themeNames: Object.keys(themes),
    setTheme: setActiveTheme,
  }), []);

  return (
    <ThemeContext.Provider value={ctx}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

interface IThemeContext {
  themeNames: string[];
  setTheme: (themeName: string) => void;
  activeTheme: string;
}

interface IThemeProviderProps {
  children: any;
  themes: Record<string, Theme>;
  defaultTheme: string;
}
