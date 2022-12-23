import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiple param', () => {
        const params = getQueryParams({
            test: 'value',
            order: 'asc',
        });
        expect(params).toBe('?test=value&order=asc');
    });
    test('test with undefined', () => {
        const params = getQueryParams({
            test: undefined,
            order: 'asc',
        });
        expect(params).toBe('?order=asc');
    });
});
