import { useState } from 'react';
import UserFinder from './components/UserFinder';
import Users from './components/Users';
import UsersContext from './store/users-context';

const [movies, setMovies] = useState([]);

function fetchMoveisHandler(){
  fetch('https://swapi.dev/api/films').then((response) => {
    return response.json();
  }).then((data) => {
    const transformedMovies = data.results.map((movieData) => {return {id: movieData.episode_id, title: movieData.title, openingText: movieData.opening_crawl, releaseData: movieData.release_date}})
    setMovies(transformedMovies)
  })
}

function App() {

  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
