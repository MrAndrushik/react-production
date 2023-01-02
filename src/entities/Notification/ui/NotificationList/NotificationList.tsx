import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    // const { data, isLoading } = useNotifications(null, {
    //     pollingInterval: 5000,
    // });

    const { data, isLoading } = useNotifications(null);

    if (isLoading) {
        return (
            <VStack
                gap='16'
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width='100%' border='8px' height={88} />
                <Skeleton width='100%' border='8px' height={88} />
                <Skeleton width='100%' border='8px' height={88} />
            </VStack>
        );
    }

    return (
        <VStack
            gap='16'
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((notification) => (
                <NotificationItem key={notification.id} item={notification} />
            ))}
        </VStack>
    );
});
