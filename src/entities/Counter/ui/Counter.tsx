import { Button, ThemeButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const value = useCounterValue();
    const { t } = useTranslation();
    const counterActions = useCounterActions();

    const increment = () => {
        counterActions.increment();
    };

    const decrement = () => {
        counterActions.decrement();
    };

    const add = (value: number) => {
        counterActions.add(value);
    };

    return (
        <div>
            <h1 data-testid='value-title'>{value}</h1>
            <HStack gap='16'>
                <Button data-testid='increment-button' theme={ThemeButton.CLEAR} onClick={increment}>
                    {t('Увеличить')}
                </Button>
                <Button data-testid='decrement-button' theme={ThemeButton.CLEAR} onClick={decrement}>
                    {t('Уменьшить')}
                </Button>
                <Button data-testid='add-button' theme={ThemeButton.CLEAR} onClick={() => add(5)}>
                    {t('ADD')}
                </Button>
            </HStack>
        </div>
    );
};
