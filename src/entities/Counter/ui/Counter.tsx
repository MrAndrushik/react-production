import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const value = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid='value-title'>{value}</h1>
            <Button
                data-testid='increment-button'
                theme={ThemeButton.CLEAR}
                onClick={increment}
            >
                {t('Увеличить')}
            </Button>
            <Button
                data-testid='decrement-button'
                theme={ThemeButton.CLEAR}
                onClick={decrement}
            >
                {t('Уменьшить')}
            </Button>
        </div>
    );
};
