import { afterEach, beforeEach, cy, describe, it } from 'local-cypress';

let profileId: string;

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.login('testuser', '123').then((data) => {
            cy.visit(`profile/${data.id}`);
            profileId = data.id;
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль успешно загрузился', () => {
        cy.getByTestId('ProfileCard.First').should('have.value', 'Андрей1');
    });
    it('И редактирует его', () => {
        cy.updateProfile('new', 'last');
        cy.getByTestId('ProfileCard.First').should('have.value', 'new');
        cy.getByTestId('ProfileCard.Second').should('have.value', 'last');
    });
});
