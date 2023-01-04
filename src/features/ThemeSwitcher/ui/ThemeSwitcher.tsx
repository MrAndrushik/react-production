import { memo } from 'react';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames('', {}, [className])}>
            {theme === Theme.LIGHT ? <ThemeIcon fill='#fff' /> : <ThemeIcon fill='#000f09' />}
        </Button>
    );
});
