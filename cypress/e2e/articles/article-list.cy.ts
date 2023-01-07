import { beforeEach, cy, describe, it } from 'local-cypress';

describe('Пользователь заходит на страницу article', () => {
    beforeEach(() => {
        cy.login('testuser', '123').then((data) => {
            cy.visit('/articles');
        });
    });
    it.skip('Отображение статей', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.at.least', 3);
    });

    it('Отображение статей на стабах', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.at.least', 3);
    });
});
