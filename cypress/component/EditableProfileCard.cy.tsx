import { EditableProfileCard } from '@/features/editableProfileCard';
import { cy, describe, it } from 'local-cypress';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';
describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: '4',
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id='4' />
            </TestProvider>
        );
    });
});
