import { getUserAuthData } from '@/entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/types/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    const mods: Mods = {
        [cls.collapsed]: collapsed,
    };

    return (
        <AppLink className={classNames(cls.navItem, mods, [])} to={item.path}>
            <div className={cls.icon}>
                <item.Icon />
            </div>
            <span>{t(item.text)}</span>
        </AppLink>
    );
});
