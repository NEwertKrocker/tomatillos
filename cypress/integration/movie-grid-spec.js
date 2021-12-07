
describe('Default movie grid view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  it('should display a header and search bar', () => {
    cy.get('header').contains('Rancid Tomatillos');
    cy.get('input');
  })
  it('should display an array of movie posters', () => {
    cy.get('.movie-poster').should('have.length', 40)
  })
  it('should be able to navigate to movie details view', () => {
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/`, {
        statusCode: 201,
        body: {
          "movie": {
            id: 1,
            title: "Fake Movie Title",
            poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
            release_date: "2019-12-04",
            overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
            average_rating: 6,
            genres: ["Drama"],
            budget:63000000,
            revenue:100853753,
            runtime:139,
            tagline: "It's a movie!"
          }
        }
      });
    cy.get('.movie-poster')
      .first()
      .click();
    cy.get('.details-poster');
  })
  it('should be able to click the "go back" button', () => {
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/`, {
        statusCode: 201,
        body: {
          "movie": {
            id: 1,
            title: "Fake Movie Title",
            poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
            release_date: "2019-12-04",
            overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
            average_rating: 6,
            genres: ["Drama"],
            budget:63000000,
            revenue:100853753,
            runtime:139,
            tagline: "It's a movie!"
          }
        }
      });
    cy.get('.movie-poster')
      .last()
      .click();
    cy.get('.details-poster');
    cy.get('.back-button')
      .click();
    cy.get('.movie-poster').should('have.length', 40);
  })
})
