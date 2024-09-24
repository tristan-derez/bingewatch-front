import MovieCard from "./movie-card";
import { Movie } from "../types/movie";
import { Grid } from "#styled-system/jsx/";

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
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
  );
};

export default MovieGrid;
