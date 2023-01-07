import { DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    between: cls.justifyBetween,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    start: cls.justifyStart,
};

const alignClasses: Record<FlexAlign, string> = {
    center: cls.alignCenter,
    end: cls.alignEnd,
    start: cls.justifyStart,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    '4': cls.gap4,
    '8': cls.gap8,
    '16': cls.gap16,
    '32': cls.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    'data-testid'?: string;
}

export const Flex = (props: FlexProps) => {
    const { className, children, justify = 'start', align = 'center', direction = 'row', gap = '4', max } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div data-testid={props?.['data-testid']} className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    );
};
