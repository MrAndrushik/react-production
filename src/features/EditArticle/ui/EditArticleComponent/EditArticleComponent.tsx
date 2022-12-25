import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './EditArticleComponent.module.scss';

interface EditArticleComponentProps {
    className?: string;
    id: string;
}

export const EditArticleComponent = memo((props: EditArticleComponentProps) => {
    const { className, id } = props;
    const { t } = useTranslation();

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.EditArticleComponent, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
});
