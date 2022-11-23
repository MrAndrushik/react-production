import { classNames } from './classNames';

describe('classNames', () => {
    test('with first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1';
        expect(classNames('someClass', {}, ['class1'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 hover';
        expect(
            classNames('someClass', { hover: true, intel: false }, ['class1'])
        ).toBe(expected);
    });
});
