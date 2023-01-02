import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('return loading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { isLoading: true },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { error: 'error' },
        };
        expect(getArticleDetailsError(state as StateSchema)).toBe('error');
    });
});
