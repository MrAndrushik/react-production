import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

import SidebarIcon from '@/shared/assets/icons/sidebar-icon.svg';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const sidebarList = useSelector(getSidebarItems);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemList = useMemo(
        () =>
            sidebarList.map((item) => (
                <li key={item.path}>
                    <SidebarItem collapsed={collapsed} item={item} />
                </li>
            )),
        [collapsed, sidebarList]
    );

    return (
        <aside data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                className={classNames(cls.sideButton, { [cls.sideButtonActive]: collapsed }, [])}
                theme={ThemeButton.CIRCLE}
                data-testid='sidebar-toggle'
                onClick={onToggle}
            >
                <SidebarIcon width={20} />
            </Button>
            <nav className={cls.nav}>
                <ul className={cls.navList}>{itemList}</ul>
            </nav>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher collapsed={collapsed} />
            </div>
        </aside>
    );
});
