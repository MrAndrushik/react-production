import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import GlobusIcon from '@/shared/assets/icons/earth.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../../../shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';

interface LangSwitcherProps {
    className?: string;
    collapsed?: boolean;
}

export const LangSwitcher = memo(({ className, collapsed }: LangSwitcherProps) => {
    const { i18n } = useTranslation();
    const { theme } = useTheme();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button onClick={toggle} className={classNames(cls.LangSwitcher, {}, [className])} theme={ThemeButton.CLEAR}>
            {!collapsed && (theme === Theme.LIGHT ? <GlobusIcon fill='#fff' /> : <GlobusIcon fill='#000f09' />)}
            {i18n.language?.toUpperCase()}
        </Button>
    );
});
