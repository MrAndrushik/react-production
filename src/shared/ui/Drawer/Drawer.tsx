import { useTheme } from '@/app/providers/ThemeProvider';
import { memo, ReactNode, useCallback, useEffect } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import {
    AnimationProvider,
    useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

const DrawerContent = memo(
    ({ className, children, isOpen, onClose, lazy }: DrawerProps) => {
        const { Spring, Gesture } = useAnimationLibs();
        const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
        const { theme } = useTheme();

        const openDrawer = useCallback(() => {
            api.start({ y: 0, immediate: false });
        }, [api]);

        useEffect(() => {
            if (isOpen) {
                openDrawer();
            }
        }, [isOpen, openDrawer]);

        const closeDrawer = (velocity = 0) => {
            api.start({
                y: height,
                immediate: false,
                config: { ...Spring.config.stiff, velocity },
                onResolve: onClose,
            });
        };

        const bind = Gesture.useDrag(
            ({
                last,
                velocity: [, vy],
                direction: [, dy],
                movement: [, my],
                cancel,
            }) => {
                if (my < -70) cancel();

                if (last) {
                    if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                        closeDrawer();
                    } else {
                        openDrawer();
                    }
                } else {
                    api.start({ y: my, immediate: true });
                }
            },
            {
                from: () => [0, y.get()],
                filterTaps: true,
                bounds: { top: 0 },
                rubberband: true,
            }
        );

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

        const display = y.to((py) => (py < height ? 'block' : 'none'));

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
                    <Spring.a.div
                        className={cls.sheet}
                        style={{
                            display,
                            bottom: `calc(-100vh + ${height - 100}px)`,
                            y,
                        }}
                        {...bind()}
                    >
                        {children}
                    </Spring.a.div>
                </div>
            </Portal>
        );
    }
);

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props} />
        </AnimationProvider>
    );
};
