import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
    const data = {
        first: 'Андрей',
        lastname: 'Петров',
        age: 21,
        city: 'Moscow',
        currency: Currency.RUB,
        country: Country.Russia,
        username: 'mrandrushik',
    };

    test('test readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(false)
            )
        ).toEqual({ readonly: false });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit())
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: data };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    first: 'Anton',
                })
            )
        ).toEqual({
            form: { ...data, first: 'Anton' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, '')
            )
        ).toEqual({
            data,
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
        });
    });
});
