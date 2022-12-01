import { FC, useCallback, useState } from 'react';
import LogoDark from 'shared/assets/icons/logo-dark.svg';
import LogoLight from 'shared/assets/icons/logo-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { theme } = useTheme();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {theme === Theme.DARK ? <LogoLight /> : <LogoDark />}
            <div className={cls.linkWrapper}>
                <Button onClick={onShowModal}>{t('Аккаунт')}</Button>
            </div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
