# Assignment 1 - ReactJS app.

Name: Gowriswarup Kailas Perumal
20087165

## Overview.

A simple MOVIEAPP ReactJS App is developed using TMDB API. 

### Features.

[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

- Popular Actors Page
- Pagination
- Dark mode toggle
- Firebase auth (attempted) (visible code in secondary branch)
- Protected route code implementation (attempted) (visible code in secondary branch)

## Setup requirements.

Once repo is cloned, user will have to create a .env file in the src folder with their REACT_APP_TMDB_KEY value thus:

```
REACT_APP_TMDB_KEY = <enter value here>
```

once completed, the application can be setup by running (npm version in project: 9.6.3) 
```
npm install
```
and 

to run the application, 
```npm start```

## API endpoints.

- Discover list of movies - discover/movie
- Movie details - movie/:id
- Movie genres = /genre/movie/list
- Movies upcoming
- Movies now playing
- Movies Trending
- Movie actors page
- Popular Actors Page
  

## App Design.

### UI Design.
<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-MovieApp-Assignment1/assets/58232821/a5ddb8ef-83bb-4d51-8c51-41d4644662ee">
Movie App homepage

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-MovieApp-Assignment1/assets/58232821/3085108c-0c11-445e-b7ed-74c013369a75">
Pagination in focus

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-MovieApp-Assignment1/assets/58232821/6b2e0c7e-272f-4d80-8674-b242bd0d6b85">
Dark theme in focus

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-MovieApp-Assignment1/assets/58232821/d450dd85-e771-4969-8095-a75588bfa7c5">
various routing options displayed such at Trending, Upcoming, Favourites, etc.

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-MovieApp-Assignment1/assets/58232821/4e2a85f1-7a10-4f9b-b98c-9054f15ca223">
Favorites Page (with couple of movies selected)

<img width="1679" alt="image" src="https://github.com/gowriswarupk/wad2-MovieApp-Assignment1/assets/58232821/ddb13a7d-01e9-4320-b900-459febfb7944">
Add review page in focus

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-MovieApp-Assignment1/assets/58232821/578b5bab-29a1-48ec-899e-4c6c8589dbbf">
Movies info in focus

<img width="1680" alt="image" src="https://github.com/gowriswarupk/wad2-MovieApp-Assignment1/assets/58232821/6d315335-fcac-443c-b19d-a4ec9224bf29">
Review excerpts in focus



### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

- /movies/topRated - displays all top-rated movies.
- /movies/favorites - displays all favorited movies.
- /movies/nowPlaying - displays all movies currently in cinemas.
- /movies/upcoming - displays all upcoming movies.
- /movies/trending - displays all trending movies.
- /popular_actors - displays all popular actors.
- movies/<id> - displays movie info
- reviews/<id> - displays specific full reviews
- reviews/form - displays form for leaving reviews





Protected routes attempted along with firebase authentication, breaking changes, therefore had to rollback. code is still available in second branch for review.

## Independent learning (If relevant).

Firebase Authentication had been attempted after last two years of implementing the same successfully for other projects as well as my Fourth year project, as it led me to gain some confidence in my abilities. Further self-learning was applied after reviewing tmdb api endpoints, and identifying ways to implement the same. 

Additional endpoints from TMDB API documentaion, as well as Material UI Documentation for icons/dark theme implemented
