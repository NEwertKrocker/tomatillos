
describe('Default movie grid view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies*', {
      // add a status code
      body: {
        "movies": [
          {
            "id": 694919,
            "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
            "title": "Money Plane",
            "average_rating": 6.625,
            "release_date": "2020-09-29"
          },
          {
            "id": 337401,
            "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
            "title": "Mulan",
            "average_rating": 5.2727272727272725,
            "release_date": "2020-09-04"
          },
          {
            "id": 718444,
            "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
            "title": "Rogue",
            "average_rating": 6.166666666666667,
            "release_date": "2020-08-20"
          }
        ]
      }
    })
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/*`, {
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
  })
  it('should display a header and search bar', () => {
    cy.get('header').contains('Rancid Tomatillos');
    cy.get('input');
    // add more testing for the input
  })
  it('should display an array of movie posters', () => {
    cy.get('.movie-poster').should('have.length', 3)
    cy.get('.movie-poster')
      .first().contains('Money Plane');
    cy.get('.movie-poster')
      .last().contains('Rogue');
  })
  it('should be able to navigate to movie details view', () => {
    cy.get('.movie-poster')
      .first()
      .click();
    cy.get('.movie-details-container').contains('Fake Movie Title');
    cy.get('.movie-details-container').contains('2019');
    cy.get('.movie-details-container').contains('It\'s a movie!');
    cy.get('.movie-details-container').contains('Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!');
  })
  it('should be able to click the "go back" button', () => {
    cy.get('.movie-poster')
      .last()
      .click();
    cy.get('.movie-details-container');
    cy.get('.back-arrow-image')
      .click();
    cy.get('.movie-poster').should('have.length', 3);
  })
})
