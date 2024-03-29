import LogoDark from '@/shared/assets/icons/logo-dark.svg';
import LogoLight from '@/shared/assets/icons/logo-light.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { theme } = useTheme();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                {theme === Theme.DARK ? <LogoLight /> : <LogoDark />}
                <div className={cls.linkWrapper}>
                    <AppLink to={getRouteArticleCreate()}>{t('Создать статью')}</AppLink>
                    <HStack gap='16' className={cls.actions}>
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                </div>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            {theme === Theme.DARK ? <LogoLight /> : <LogoDark />}
            <div className={cls.linkWrapper}>
                <Button onClick={onShowModal}>{t('Войти')}</Button>
            </div>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
});
