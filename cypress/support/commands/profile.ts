/* eslint-disable */

import { cy } from 'local-cypress';

export const updateProfile = (first: string, last: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditBtn').click();
    cy.getByTestId('ProfileCard.First').clear().type(first);
    cy.getByTestId('ProfileCard.Second').clear().type(last);
    cy.getByTestId('EditableProfileCardHeader.SaveBtn').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asd' },
        body: {
            id: '4',
            first: 'Андрей1',
            lastname: 'Петров',
            age: 21,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://dgbijzg00pxv8.cloudfront.net/10148489-ca80-4911-b76a-878da46e1eba/000000-0000000002/15377113736242044468441686163017542525599537000685968960702751402001230352437/ITEM_PREVIEW1.jpeg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(first: string, last: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
