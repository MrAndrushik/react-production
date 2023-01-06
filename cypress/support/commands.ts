/* eslint-disable */
import { login } from './commands/login';
import { Cypress } from 'local-cypress';

Cypress.Commands.add('login', login);

declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<void>;
        }
    }
}

export {};
