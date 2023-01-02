import { NotificationList } from '@/entities/Notification';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Notification from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const trigger = (
        <Button
            onClick={onOpenDrawer}
            className={cls.notification}
            theme={ThemeButton.CLEAR}
        >
            <Icon Svg={Notification} />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    direction='bottom left'
                    trigger={trigger}
                >
                    <NotificationList className={cls.notificationList} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList className={cls.notificationList} />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );
});
