import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton view={view} key={index} />);

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, view = ArticleView.BIG, isLoading, target } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => {
        return <ArticleListItem target={target} key={article.id} article={article} view={view} />;
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text theme={TextTheme.ERROR} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div data-testid='ArticleList' className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
