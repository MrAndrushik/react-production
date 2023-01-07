import { Cypress } from 'local-cypress';
import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as comentsCommands from './commands/comments';
import * as raitingCommands from './commands/raiting';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(comentsCommands);
Cypress.Commands.addAll(raitingCommands);
