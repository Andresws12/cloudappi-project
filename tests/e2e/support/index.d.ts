/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<> {
        /**
         * Checks UI by using Jest snapshots
         * @param name snapshot file name
         */
        checkUI(name?: string): Chainable<any>;
    }
}
