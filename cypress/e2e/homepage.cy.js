describe('My first test', () => {
  it('visit the Coctails app', () => {
    cy.intercept(
      'GET',
      'https://thecocktaildb.com/api/json/v1/1/search.php?f=M',
      { fixture: 'example.json' }
    );
    cy.visit('http://localhost:3000/');
  });
});
