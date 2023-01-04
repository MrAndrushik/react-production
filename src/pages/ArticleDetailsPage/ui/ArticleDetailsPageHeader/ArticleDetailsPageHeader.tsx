import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Button } from '@/shared/ui/Button/Button';
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
            <AppLink to={RoutePath.articles}>{t('Назад к списку')}</AppLink>
            {canEdit && (
                <AppLink to={`${RoutePath.article_details}${article!.id}/edit`} className={cls.editBtn}>
                    {t('Редактировать')}
                </AppLink>
            )}
        </div>
    );
});
