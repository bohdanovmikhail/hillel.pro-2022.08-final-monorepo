import { useTheme } from '@mui/material';

import { useScreenWidth } from './useScreenSize';

export function useIsMobile(): boolean {
  const theme = useTheme();
  const screenWidth = useScreenWidth();

  return screenWidth <= theme.breakpoints.values.sm;
}

export function useIsTablet(): boolean {
  const theme = useTheme();
  const screenWidth = useScreenWidth();

  return screenWidth > theme.breakpoints.values.sm && screenWidth <= theme.breakpoints.values.md;
}

export function useIsDesktop(): boolean {
  const theme = useTheme();
  const screenWidth = useScreenWidth();

  return screenWidth > theme.breakpoints.values.md;
}

export function useIsTabletOrLess(): boolean {
  const theme = useTheme();
  const screenWidth = useScreenWidth();

  return screenWidth <= theme.breakpoints.values.md;
}
