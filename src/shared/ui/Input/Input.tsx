import {
    InputHTMLAttributes,
    memo,
    MutableRefObject,
    useEffect,
    useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    type?: string;
    autoFocused?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo(function Input(props: InputProps) {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autoFocused,
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

    return (
        <input
            ref={ref}
            className={classNames(cls.Input, {}, [className])}
            {...otherProps}
            type={type}
            value={value}
            onChange={onChangeHandler}
        />
    );
});
