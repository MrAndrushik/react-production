import { useTheme } from 'app/providers/ThemeProvider';
import { memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = memo(
    ({ className, children, isOpen, onClose, lazy }: DrawerProps) => {
        const { theme } = useTheme();

        const { close, isClosing, isMounted } = useModal({
            animationDelay: 300,
            onClose,
            isOpen,
        });

        const mods: Mods = {
            [cls.opened]: isOpen,
            [cls.closing]: isClosing,
        };

        if (lazy && !isMounted) {
            return null;
        }

        return (
            <Portal>
                <div
                    className={classNames(cls.Drawer, mods, [
                        className,
                        theme,
                        'app_drawer',
                    ])}
                >
                    <Overlay onClick={close} />
                    <div className={cls.content}>{children}</div>
                </div>
            </Portal>
        );
    }
);
