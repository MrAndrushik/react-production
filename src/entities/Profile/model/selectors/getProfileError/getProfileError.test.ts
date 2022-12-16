import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });
    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
