import { useState } from "react";
import { MovieCard } from "../movie-card/moviecard";
import { MovieView } from "../movie-view/movieview";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who enters dreams to steal secrets.",
      image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      genre: {
        name: "Sci-Fi",
        description:
          "Science fiction movies explore futuristic concepts, space travel, and advanced technology.",
      },
      director: {
        name: "Christopher Nolan",
        bio: "Christopher Nolan is a British-American filmmaker known for his complex narratives and visually stunning movies, including 'The Dark Knight Trilogy', 'Inception', and 'Interstellar'.",
        birth: "1970-07-30",
      },
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A team travels through a wormhole in search of a new home.",
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      genre: {
        name: "Adventure",
        description:
          "Adventure films often feature journeys, exploration, and thrilling experiences.",
      },
      director: {
        name: "Christopher Nolan",
        bio: "Christopher Nolan is a British-American filmmaker known for his complex narratives and visually stunning movies, including 'The Dark Knight Trilogy', 'Inception', and 'Interstellar'.",
        birth: "1970-07-30",
      },
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "Batman faces the Joker, a criminal mastermind spreading chaos in Gotham.",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      genre: {
        name: "Action",
        description:
          "Action movies are filled with intense sequences, fights, and high-paced storytelling.",
      },
      director: {
        name: "Christopher Nolan",
        bio: "Christopher Nolan is a British-American filmmaker known for his work on 'The Dark Knight Trilogy', which redefined the superhero genre with its realism and depth.",
        birth: "1970-07-30",
      },
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }
  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
