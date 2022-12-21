import { ArticleView } from '../../model/types/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import BigIcon from 'shared/assets/icons/big.svg';
import SmallIcon from 'shared/assets/icons/small.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: SmallIcon,
    },
    {
        view: ArticleView.BIG,
        icon: BigIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView);
        };
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        className={classNames(
                            '',
                            { [cls.selected]: viewType.view === view },
                            []
                        )}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
});
