import MovieCard from "./movie-card";
import { Movie } from "../types/movie";
import { Box, Grid, styled } from "#styled-system/jsx/";
import { useStore } from "../store/movies";

interface RecommendedMoviesSectionProps {
  movies: Movie[];
}

const RecommendedMoviesSection = ({ movies }: RecommendedMoviesSectionProps) => {
  const { getRecommendedTitle } = useStore();

  return (
    <Box pr='32px' pl={{ base: "32px", md: "32px", lg: 0 }} pb={{ base: "40px", md: "32px", lg: 0 }}>
      <Title>{getRecommendedTitle()}</Title>
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
          <MovieCard key={movie.id} {...movie} sizes='(max-width: 640px) 328px, (max-width: 1440px) 440px, 560px' />
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
