import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Sidebar.module.scss';

import SidebarIcon from 'shared/assets/icons/sidebar-icon.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                className={classNames(
                    cls.sideButton,
                    { [cls.sideButtonActive]: collapsed },
                    []
                )}
                theme={ThemeButton.CIRCLE}
                data-testid='sidebar-toggle'
                onClick={onToggle}
            >
                <SidebarIcon width={20} />
            </Button>
            <nav className={cls.nav}>
                <ul className={cls.navList}>
                    <li>
                        <AppLink className={cls.navItem} to={RoutePath.main}>
                            <div className={cls.icon}>
                                <HomeIcon />
                            </div>
                            <span>{t('Главная')}</span>
                        </AppLink>
                    </li>
                    <li>
                        <AppLink className={cls.navItem} to={RoutePath.about}>
                            <div className={cls.icon}>
                                <AboutIcon />
                            </div>
                            <span>{t('О нас')}</span>
                        </AppLink>
                    </li>
                </ul>
            </nav>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher collapsed={collapsed} />
            </div>
        </div>
    );
};
