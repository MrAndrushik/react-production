/* eslint-disable indent */
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';
import { ArticleBlockType } from '../../model/consts/articleConsts';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { id, className } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent block={block} key={block.id} className={cls.block} />;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent block={block} key={block.id} className={cls.block} />;
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent block={block} key={block.id} className={cls.block} />;
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border='50%' />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width='100%' height={200} />
                <Skeleton className={cls.skeleton} width='100%' height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title={t('Произошла ошибка при загрузке файла')} />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </div>
                <Text className={cls.title} title={article?.title} text={article?.subtitle} size={TextSize.L} />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div data-testid='ArticleDetails' className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
