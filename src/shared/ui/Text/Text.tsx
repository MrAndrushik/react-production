import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TytleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIHGT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    titleType?: TytleType;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string;
}

export const Text = memo(
    ({
        className,
        title,
        titleType,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = '',
    }: TextProps) => {
        return (
            <div
                className={classNames(cls.Text, {}, [
                    className,
                    cls[theme],
                    cls[align],
                    cls[size],
                ])}
            >
                {title && titleType === 'h1' && (
                    <h1
                        data-testid={`${dataTestId}.Header`}
                        className={classNames(cls.title)}
                    >
                        {title}
                    </h1>
                )}
                {title && titleType === 'h2' && (
                    <h2
                        data-testid={`${dataTestId}.Header`}
                        className={classNames(cls.title)}
                    >
                        {title}
                    </h2>
                )}
                {title && titleType === 'h3' && (
                    <h3
                        data-testid={`${dataTestId}.Header`}
                        className={classNames(cls.title)}
                    >
                        {title}
                    </h3>
                )}
                {title && titleType === 'h4' && (
                    <h4
                        data-testid={`${dataTestId}.Header`}
                        className={classNames(cls.title)}
                    >
                        {title}
                    </h4>
                )}
                {title && titleType === 'h5' && (
                    <h5
                        data-testid={`${dataTestId}.Header`}
                        className={classNames(cls.title)}
                    >
                        {title}
                    </h5>
                )}
                {title && titleType === 'h6' && (
                    <h6
                        data-testid={`${dataTestId}.Header`}
                        className={classNames(cls.title)}
                    >
                        {title}
                    </h6>
                )}
                {title && (
                    <h3
                        data-testid={`${dataTestId}.Header`}
                        className={classNames(cls.title)}
                    >
                        {title}
                    </h3>
                )}

                {text && (
                    <p
                        data-testid={`${dataTestId}.Paragraph`}
                        className={classNames(cls.text)}
                    >
                        {text}
                    </p>
                )}
            </div>
        );
    }
);
