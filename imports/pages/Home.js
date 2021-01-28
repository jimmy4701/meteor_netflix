import React, {useState} from 'react'
import MovieHeader from '../components/MovieHeader'
import CategoryDisplayer from '../components/CategoryDisplayer'
import categories from '../categories.json'

const Home = () => {

  const main_movie = {
    title: "Avengers",
    type: "Film",
    image: "https://wallpaperaccess.com/full/329583.jpg"
  }

  return (
    <div>
      <MovieHeader movie={main_movie} />
      {categories.map(cat => <CategoryDisplayer category={cat} />)}
    </div>
  );
}

export default Home;
