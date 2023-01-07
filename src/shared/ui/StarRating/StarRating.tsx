import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import Star from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size, selectedStars } = props;
    const [currentStarCount, setCurrentStarCount] = useState(selectedStars ?? 0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames('', {}, [className])}>
            {stars.map((starNum) => (
                <Icon
                    data-testid={`StarRaiting.${starNum}`}
                    data-selected={currentStarCount >= starNum}
                    className={classNames(
                        cls.starIcon,
                        {
                            [cls.hovered]: currentStarCount >= starNum,
                            [cls.selected]: isSelected,
                        },
                        []
                    )}
                    key={starNum}
                    Svg={Star}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNum)}
                    onClick={onClick(starNum)}
                />
            ))}
        </div>
    );
});
