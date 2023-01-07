import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { memo } from 'react';
import { Comment } from '../../model/types/comments';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                data-testid='CommentCard.Loading'
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%' />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton className={cls.text} width='100%' height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack data-testid='CommentCard.Content' className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={getRouteProfile(comment.user.id)}>
                <div className={cls.header}>
                    {comment?.user.avatar && <Avatar size={30} src={comment?.user.avatar} />}
                    <Text title={comment?.user.username} />
                </div>
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </VStack>
    );
});
