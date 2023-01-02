import {
    InputHTMLAttributes,
    memo,
    MutableRefObject,
    useEffect,
    useRef,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    type?: string;
    autoFocused?: boolean;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Input = memo(function Input(props: InputProps) {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autoFocused,
        readOnly,
        ...otherProps
    } = props;

    const ref = useRef() as MutableRefObject<HTMLInputElement>;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocused) {
            ref.current.focus();
        }
    }, [autoFocused]);

    const mods: Mods = {
        [cls.readonly]: readOnly,
    };

    return (
        <input
            ref={ref}
            className={classNames(cls.Input, mods, [className])}
            {...otherProps}
            type={type}
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
