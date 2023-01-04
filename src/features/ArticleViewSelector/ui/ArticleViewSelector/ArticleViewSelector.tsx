import { ArticleView } from '@/entities/Article';
import BigIcon from '@/shared/assets/icons/big.svg';
import SmallIcon from '@/shared/assets/icons/small.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { memo } from 'react';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: BigIcon,
    },
    {
        view: ArticleView.BIG,
        icon: SmallIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView);
        };
    };

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button key={viewType.view} theme={ThemeButton.CLEAR} onClick={onClick(viewType.view)}>
                    <Icon
                        className={classNames('', { [cls.selected]: viewType.view === view }, [])}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
});
