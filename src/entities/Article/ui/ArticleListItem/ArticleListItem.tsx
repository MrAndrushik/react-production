import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <AppLink className={cls.cardLink} to={getRouteArticleDetails(article.id)} target={target}>
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text text={article.user.username} className={cls.username} />
                            <Text text={article.createdAt} className={cls.date} />
                        </div>
                        <Text title={article.title} className={cls.title} />
                        <div className={cls.infoBlock}>{types}</div>
                        <img src={article.img} alt={article.title} className={cls.img} />
                        {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                        <div className={cls.footer}>
                            <Button>{t('Читать далее')}</Button>
                            <div className={cls.viewBlock}>{views}</div>
                        </div>
                    </Card>
                </AppLink>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppLink className={cls.cardLink} to={getRouteArticleDetails(article.id)} target={target}>
                <Card className={cls.card}>
                    <div className={cls.imgBlock}>
                        <img src={article.img} alt={article.title} className={cls.img} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoBlock}>
                        {types}
                        <div className={cls.viewBlock}>{views}</div>
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </AppLink>
        </div>
    );
});
