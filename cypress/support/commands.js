// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("registerLocalStorage", () => {
  const mockMenu = {
    menu: {
      espresso: [
        { id: 1, name: "Espresso", isSoldOut: false },
        { id: 2, name: "Americano", isSoldOut: false },
      ],
      frappuccino: [
        { id: 1, name: "Frappuccino", isSoldOut: false },
        { id: 2, name: "Mocha Frappuccino", isSoldOut: true },
      ],
      blended: [],
      teavana: [],
      desert: [],
    },
    curCategory: "espresso",
  };

  cy.window().then((win) => {
    win.localStorage.setItem("menuName", JSON.stringify(mockMenu));
  });

  cy.reload();
});

Cypress.Commands.add("getMenuItem", (menuName, menuItemName) => {
  cy.get(`[data-category-name="${menuName}"] [data-menu-name="${menuItemName}"]`);
});
