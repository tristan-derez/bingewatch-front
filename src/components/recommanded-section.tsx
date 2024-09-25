import MovieCard from "./movie-card";
import { Movie } from "../types/movie";
import { Box, Grid, styled } from "#styled-system/jsx/";

interface RecommendedMoviesSectionProps {
  movies: Movie[];
}

const RecommendedMoviesSection = ({ movies }: RecommendedMoviesSectionProps) => {
  return (
    <Box pr='32px' pl={{ base: "32px", md: "32px", lg: 0 }} pb={{ base: "40px", md: "32px", lg: 0 }}>
      <Title>Recommended for you</Title>
      <Grid
        gridTemplateColumns={{
          base: "repeat(auto-fit, minmax(164px, 1fr))",
          md: "repeat(auto-fit, minmax(220px, 1fr))",
          lg: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
        gap='24px'
        w='100%'
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imageUrl={movie.thumbnail.regular.small}
            srcSet={`
              ${movie.thumbnail.regular.small} 300w, 
              ${movie.thumbnail.regular.medium} 600w, 
              ${movie.thumbnail.regular.large} 1440w,
            `}
            year={movie.year}
            category={movie.category}
            rating={movie.rating}
            isBookmarked={movie.isBookmarked}
            isTrending={movie.isTrending}
            size='sm'
          />
        ))}
      </Grid>
    </Box>
  );
};

const Title = styled("h1", {
  base: {
    textStyle: "h3",
    my: "24px",
    md: { textStyle: "h1", mt: "39px", mb: "24px" },
    lg: { mt: "40px", mb: "24px" },
  },
});

export default RecommendedMoviesSection;
