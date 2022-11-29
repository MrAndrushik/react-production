import { FC } from 'react';
import LogoDark from 'shared/assets/icons/logo-dark.svg';
import LogoLight from 'shared/assets/icons/logo-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { theme } = useTheme();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {theme === Theme.DARK ? <LogoLight /> : <LogoDark />}
            <div className={cls.linkWrapper}></div>
        </div>
    );
};
