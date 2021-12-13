
describe('error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies`, {
        statusCode: 404,
        body: {
          message: `Sorry! Something went wrong.`
        }
      });
      cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/*/videos`, {
          statusCode: 201,
          body: {
            "videos": [
              {
                "id": 330,
                "movie_id": 694919,
                "key": "aETz_dRDEys",
                "site": "YouTube",
                "type": "Trailer"
              }
            ]
          }
        });
      cy.visit('http://localhost:3000');
  });
it('should be able to display a 500-status error message', () => {
  cy.get('.movies-container').contains('Sorry!');
  })
})
