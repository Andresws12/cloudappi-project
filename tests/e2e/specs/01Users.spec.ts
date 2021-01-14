import { getElem } from './utilities/utils';

import {
    userCard,
    userTitle,
    usersTable,
    homeOverview,
    userCardTitle,
    userCardImage,
    userCardLoading,
    userCardContent,
    userCardSubtitle,
    userCardImageIcon,
    usersTotalLoading,
    translationButton,
    usersTotalSubtitle,
    usersTotalOverview,
    usersTableSubtitle,
    userCardImageLoading,
    userCardTitleLoading,
    usersTotalProgressBar,
    userCardContentLoading,
    userCardSubtitleLoading,
} from './utilities/01User.selectors';

describe('01 Users', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('01-01 User overview', () => {
        getElem(userTitle).should('be.visible');
        getElem(homeOverview).should('be.visible');
        getElem(translationButton).should('be.visible');

        // User total loading
        getElem(usersTotalLoading).should('be.visible');
        getElem(usersTotalOverview).should('be.visible');
        getElem(usersTotalSubtitle).should('be.visible');

        // User cards loading
        getElem(userCardLoading).should('be.visible');
        getElem(userCardLoading).should('have.length', 4);

        getElem(userCardImageLoading).should('be.visible');
        getElem(userCardTitleLoading).should('be.visible');
        getElem(userCardContentLoading).should('be.visible');
        getElem(userCardSubtitleLoading).should('be.visible');

        // User table loading
        getElem(usersTable).should('be.visible');
        getElem(usersTableSubtitle).should('be.visible');

        cy.wait(3000);

        // User card
        getElem(userCard).should('be.visible');
        getElem(userCard).should('have.length', 4);
        getElem(userCardImage).should('be.visible');
        getElem(userCardTitle).should('be.visible');
        getElem(userCardContent).should('be.visible');
        getElem(userCardSubtitle).should('be.visible');
        getElem(userCardImageIcon).should('be.visible');

        // User total
        getElem(usersTotalProgressBar).should('be.visible');
    });
});
