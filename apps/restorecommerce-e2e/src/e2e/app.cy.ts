import { getLogo } from '../support/app.po';

describe('restorecommerce', () => {
  beforeEach(() => cy.visit('/'));

  it('should display logo', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getLogo().contains('Restore Commerce');
  });
});
