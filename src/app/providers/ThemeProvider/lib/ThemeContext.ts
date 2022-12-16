import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    LIGHT_BLUE = 'light_blue',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'production-theme';
