import { useState } from "react";
import { Box, Flex } from "#styled-system/jsx";
import MovieGrid from "#components/movie-grid.js";
import { Movie } from "./types/movie";
import movieData from "./data.json";
import NavBar from "#components/navbar.js";
import { css } from "#styled-system/css";
import TrendingMoviesSection from "#components/trending-section.js";
import MovieSearch from "#components/movie-search.js";

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
              <h1
                className={css({
                  textStyle: "h3",
                  my: "24px",
                  md: { textStyle: "h1", mt: "39px", mb: "24px" },
                  lg: { mt: "40px", mb: "24px" },
                })}
              >
                Recommended for you
              </h1>
              <MovieGrid movies={movies} />
            </>
          )}
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
