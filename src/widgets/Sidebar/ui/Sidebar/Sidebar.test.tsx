import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/classNames/tests/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar';

describe('button', () => {
    test('Sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle', () => {
        componentRender(<Sidebar />);
        const btn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
