import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
    const data = {
        first: 'Андрей',
        lastname: 'Петров',
        age: 21,
        city: 'Moscow',
        currency: Currency.RUB,
        country: Country.Russia,
        username: 'mrandrushik',
    };

    test('all correct', () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('no firstname or lastname', () => {
        const result = validateProfileData({ ...data, first: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorect age', () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorect country', () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorect all', () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
