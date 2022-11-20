import { useState } from 'react';
import cls from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span>{count}</span>
            <button className={cls.btn} onClick={() => setCount(count + 1)}>
                +
            </button>
            <button className={cls.btn} onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
};
