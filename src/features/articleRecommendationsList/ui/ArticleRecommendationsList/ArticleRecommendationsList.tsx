import { ArticleList, ArticleView } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleRecommendationsList(5);

    if (isLoading) {
        return <Loader />;
    }

    if (error ?? !articles) {
        return <div>{t('Ошибка загрузки рекоммендаций')}</div>;
    }

    return (
        <VStack
            data-testid='ArticleRecommendationsList'
            gap='8'
            className={classNames(cls.ArticleRecommendationsList, {}, [className])}
        >
            <Text title={t('Рекомендуем')} />
            <ArticleList
                className={cls.recommendations}
                target={'_blank'}
                view={ArticleView.SMALL}
                articles={articles}
                isLoading={isLoading}
            />
        </VStack>
    );
});
