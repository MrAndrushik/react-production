import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Sidebar.module.scss';

import SidebarIcon from 'shared/assets/icons/sidebar-icon.svg';
import { SidebarItemList } from '../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
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
                    {SidebarItemList.map((item) => (
                        <li key={item.path}>
                            <SidebarItem collapsed={collapsed} item={item} />
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher collapsed={collapsed} />
            </div>
        </div>
    );
});
