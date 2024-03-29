import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType]
    );

    const typeTabs = useMemo<TabItem[]>(
        () => [
            { value: ArticleType.ALL, content: t('ALL') },
            { value: ArticleType.IT, content: t('IT') },
            { value: ArticleType.SCIENCE, content: t('SCIENCE') },
            { value: ArticleType.ECONOMICS, content: t('ECONOMICS') },
        ],
        [t]
    );

    return <Tabs className={classNames('', {}, [className])} tabs={typeTabs} value={value} onTabClick={onTabClick} />;
});
