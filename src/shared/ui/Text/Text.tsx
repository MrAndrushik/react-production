import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TytleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    titleType?: TytleType;
    text?: string;
    theme?: TextTheme;
}

export const Text = memo(
    ({
        className,
        title,
        titleType,
        text,
        theme = TextTheme.PRIMARY,
    }: TextProps) => {
        const { t } = useTranslation();

        return (
            <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
                {title && titleType === 'h1' && (
                    <h1 className={classNames(cls.title)}>{title}</h1>
                )}
                {title && titleType === 'h2' && (
                    <h2 className={classNames(cls.title)}>{title}</h2>
                )}
                {title && titleType === 'h3' && (
                    <h3 className={classNames(cls.title)}>{title}</h3>
                )}
                {title && titleType === 'h4' && (
                    <h4 className={classNames(cls.title)}>{title}</h4>
                )}
                {title && titleType === 'h5' && (
                    <h5 className={classNames(cls.title)}>{title}</h5>
                )}
                {title && titleType === 'h6' && (
                    <h6 className={classNames(cls.title)}>{title}</h6>
                )}
                {title && <h3 className={classNames(cls.title)}>{title}</h3>}

                {text && <p className={classNames(cls.text)}>{text}</p>}
            </div>
        );
    }
);
