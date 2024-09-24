import { useState } from "react";
import { Box, Flex } from "#styled-system/jsx";
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
    <Flex
      w='100%'
      maxW='100vw'
      minH='100vh'
      color='text'
      bg='background'
      p={{ base: "32px", md: "32px", lg: 0 }}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <NavBar />
      <Box w='100%' pr={{ base: 0, md: 0, lg: "32px" }} pl={{ lg: "146px" }} pb={{ lg: "24px" }}>
        <Flex flexDir='column' w='100%'>
          <MovieSearch movies={movies} onSearchActiveChange={setIsSearchActive} />
          {!isSearchActive && (
            <>
              <TrendingMoviesSection movies={movies} />
              <RecommendedMoviesSection movies={movies} />
            </>
          )}
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
