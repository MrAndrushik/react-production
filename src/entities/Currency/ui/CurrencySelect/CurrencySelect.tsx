import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation('profile');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange]
        );

        return (
            <ListBox
                direction='top right'
                readonly={readonly}
                onChange={onChangeHandler}
                value={value}
                defaultValue={t('Укажите валюту')}
                items={options}
                label={t('Укажите валюту')}
            />
        );

        // return (
        //     <Select
        //         readonly={readonly}
        //         className={classNames('', {}, [className])}
        //         label={t('Укажите валюту')}
        //         options={options}
        //         value={value}
        //         onChange={onChangeHandler}
        //     />
        // );
    }
);
