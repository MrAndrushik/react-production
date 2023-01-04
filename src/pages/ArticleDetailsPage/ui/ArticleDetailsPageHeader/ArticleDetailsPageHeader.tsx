import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <AppLink to={getRouteArticles()}>{t('Назад к списку')}</AppLink>
            {canEdit && (
                <AppLink to={getRouteArticleEdit(article!.id)} className={cls.editBtn}>
                    {t('Редактировать')}
                </AppLink>
            )}
        </div>
    );
});
