import { useState } from "react";
import { Flex } from "#styled-system/jsx";
import { Movie } from "./types/movie";
import movieData from "./data.json";
import NavBar from "#components/navbar.js";
import TrendingMoviesSection from "#components/trending-section.js";
import MovieSearch from "#components/movie-search.js";
import RecommendedMoviesSection from "#components/recommanded-section.js";

function App() {
  const movies: Movie[] = movieData;
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <Flex w='100%' maxW='100vw' minH='100vh' color='text' bg='background' flexDirection={{ base: "column", lg: "row" }}>
      <NavBar />
      <Flex flexDir='column' w='100%' pl={{ lg: "146px" }} pb={{ lg: "24px" }} role='main'>
        <MovieSearch movies={movies} onSearchActiveChange={setIsSearchActive} />
        {!isSearchActive && (
          <>
            <TrendingMoviesSection movies={movies} />
            <RecommendedMoviesSection movies={movies} />
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default App;
