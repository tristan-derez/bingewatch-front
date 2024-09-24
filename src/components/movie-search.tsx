import { useState, useEffect } from "react";
import { Box, Grid, styled } from "#styled-system/jsx/";
import { SearchIcon } from "./icons/search-icon";
import { Movie, MovieCardProps } from "../types/movie";
import MovieCard from "./movie-card";
import { css } from "#styled-system/css/";

interface MovieSearchProps {
  movies: Movie[];
  onSearchActiveChange: (isActive: boolean) => void;
}

const MovieSearch = ({ movies, onSearchActiveChange }: MovieSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  useEffect(() => {
    if (searchTerm) {
      const results = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setSearchResults(results);
      onSearchActiveChange(true);
    } else {
      setSearchResults([]);
      onSearchActiveChange(false);
    }
  }, [searchTerm, movies, onSearchActiveChange]);

  return (
    <Box width='full' mt={{ base: "24px", md: "33px", lg: "64px" }} mb='0'>
      <Box display='flex' alignItems='center' position='relative'>
        <SearchIcon height={34} width={34} color='white' />
        <Input
          type='text'
          placeholder='Search for movies or TV series'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      {searchTerm && (
        <Box mt='4'>
          <p className={css({ pb: "15px", textStyle: "h4", md: { textStyle: "h1" } })}>
            Found {searchResults.length} results for '{searchTerm}'
          </p>
          <Grid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap='4'>
            {searchResults.map((movie) => {
              const movieCardProps: MovieCardProps = {
                id: movie.id,
                isTrending: movie.isTrending,
                imageUrl: movie.thumbnail.regular.small,
                year: movie.year,
                category: movie.category,
                rating: movie.rating,
                title: movie.title,
                isBookmarked: movie.isBookmarked,
                size: "sm",
              };
              return <MovieCard key={movie.id} {...movieCardProps} />;
            })}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

const Input = styled("input", {
  base: {
    ml: "16px",
    md: {
      ml: "24px",
      textStyle: "h3",
    },
    pr: "4",
    py: "2",
    width: "full",
    bg: "background",
    border: "none",
    borderBottom: "2px solid transparent",
    outline: "none",
    textStyle: "inputText",
    transition: "border-color 0.8s ease-in-out",
    "&:focus": {
      borderColor: "secondary",
    },
    borderRadius: "0",
  },
});

export default MovieSearch;
