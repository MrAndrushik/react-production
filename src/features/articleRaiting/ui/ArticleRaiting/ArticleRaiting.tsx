import { RaitingCard } from '@/entities/Raiting';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetArticleRaiting, userRateArticle } from '../../api/articleRaitingApi';

export interface ArticleRaitingProps {
    className?: string;
    articleId: string;
}

const ArticleRaiting = memo((props: ArticleRaitingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('raiting');
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRaiting({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = userRateArticle();

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                void rateArticleMutation({
                    articleId,
                    userId: userData?.id ?? '',
                    rate: starsCount,
                    feedback,
                });
            } catch (error) {
                console.log(error);
            }
        },
        [articleId, rateArticleMutation, userData?.id]
    );
    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle]
    );
    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle]
    );

    const raiting = data?.[0];

    if (isLoading) {
        return <Skeleton width='100%' height={120} />;
    }

    return (
        <RaitingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={raiting?.rate}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте отзыв')}
            hasFeedback
            className={className}
        />
    );
});

export default ArticleRaiting;
