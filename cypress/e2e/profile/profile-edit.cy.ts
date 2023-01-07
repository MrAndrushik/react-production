import { beforeEach, cy, describe, it } from 'local-cypress';

describe('template spec', () => {
    beforeEach(() => {
        cy.visit('/profile');
    });
    it('passes', () => {
        cy.visit('https://example.cypress.io');
    });
});
