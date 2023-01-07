/* eslint-disable */
import { cy } from 'local-cypress';

export const setRate = (starsCount: number, feedback: string) => {
    cy.getByTestId(`StarRaiting.${starsCount}`).click();
    cy.getByTestId('RaitingCard.Input').type(feedback);
    cy.getByTestId('RaitingCard.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
