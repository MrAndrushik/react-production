import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Counter rendered', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 12 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('12');
    });

    test('Counter increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 12 } },
        });
        userEvent.click(screen.getByTestId('increment-button'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('13');
    });

    test('Counter decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 12 } },
        });
        userEvent.click(screen.getByTestId('decrement-button'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
});
