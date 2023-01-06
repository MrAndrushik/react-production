import { selectByTestId } from 'cypress/helpers/selectByTestId';
import { beforeEach, cy, describe, it } from 'local-cypress';

describe('Пользователь не авторизован', () => {
    it('Переход на главную страницу', () => {
        cy.visit('/');
        cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Переход на страницу профиля', () => {
        cy.visit('/profile/1');
        cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Переход на несуществующий route', () => {
        cy.visit('/pro');
        cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
});

describe('Пользователь авторизован', () => {
    beforeEach(() => {
        cy.login('testuser', '123');
    });
    it('Переход на страницу профиля', () => {
        cy.visit('/profile/1');
        cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Переход на страницу со списком статей', () => {
        cy.visit('/articles');
        cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
});

export {};
