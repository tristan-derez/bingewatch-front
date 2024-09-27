import { styled } from "#styled-system/jsx/";
import { useRef } from "react";
import { Movie } from "../types/movie";
import { BookmarkEmptyIcon, BookmarkFullIcon } from "./icons/bookmark-icons";
import { useDraggable } from "react-use-draggable-scroll";
import { useCategoryIcon } from "../hooks/use-category-icon";

interface TrendingMoviesSectionProps {
  movies: Movie[];
  onMovieClick?: (movie: Movie) => void;
}

const TrendingMoviesSection: React.FC<TrendingMoviesSectionProps> = ({ movies, onMovieClick }) => {
  const trendingMovies = movies.filter((movie) => movie.isTrending);
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const handleClick = (movie: Movie) => {
    if (onMovieClick) {
      onMovieClick(movie);
      console.log(movie.id);
    }
  };

  const handleBookmarkClick = (e: React.MouseEvent<HTMLButtonElement>, movieId: string) => {
    e.stopPropagation();

    console.log(movieId);
  };

  return (
    <>
      <TrendingContainer>
        <Title>Trending</Title>
        <MovieScroller ref={ref} {...events}>
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} onClick={() => handleClick(movie)}>
              <MovieImage>
                <img
                  src={movie.thumbnail.trending?.large}
                  srcSet={`${movie.thumbnail.regular.small} 328w, ${movie.thumbnail.regular.medium} 440w, ${movie.thumbnail.regular.large} 560w`}
                  sizes='(max-width: 640px) 328px, (max-width: 1440px) 440px, 560px'
                  alt={movie.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    pointerEvents: "none",
                  }}
                />
                <GradientOverlay />
                <BookmarkButton
                  onClick={(e) => handleBookmarkClick(e, movie.id)}
                  title={movie.isBookmarked ? "Remove Bookmark" : "Add to Bookmark"}
                >
                  {movie.isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
                </BookmarkButton>
                <MovieInfo>
                  <MovieDetails>
                    {movie.year} •{" "}
                    <CategoryIconWrapper>
                      <MovieCategoryIcon category={movie.category} />
                    </CategoryIconWrapper>{" "}
                    {movie.category} • {movie.rating}
                  </MovieDetails>
                  <MovieTitle>{movie.title}</MovieTitle>
                </MovieInfo>
              </MovieImage>
            </MovieCard>
          ))}
        </MovieScroller>
      </TrendingContainer>
    </>
  );
};

const MovieCategoryIcon: React.FC<{ category: string }> = ({ category }) => {
  const CategoryIcon = useCategoryIcon(category);
  return CategoryIcon;
};

const Title = styled("h1", {
  base: {
    textStyle: "h3",
    mb: "24px",
    md: { textStyle: "h1" },
  },
});

const TrendingContainer = styled("div", {
  base: {
    position: "relative",
    width: "100%",
    overflowX: "hidden",
    mt: "24px",
    pl: "32px",
    md: {
      mt: "33px",
    },
    lg: {
      mt: "34px",
      pl: 0,
    },
  },
});

const MovieScroller = styled("div", {
  base: {
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
    width: "100%",
    paddingBottom: 0,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
    cursor: "grab",
    userSelect: "none",
  },
});

const MovieCard = styled("div", {
  base: {
    flexShrink: 0,
    width: "240px",
    pr: "16px",
    md: {
      width: "470px",
      pr: "32px",
    },
    scrollSnapAlign: "start",
  },
});

const MovieImage = styled("div", {
  base: {
    position: "relative",
    height: "230px",
    borderRadius: "lg",
    overflow: "hidden",
    zIndex: 0,
  },
});

const GradientOverlay = styled("div", {
  base: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "70%",
    background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
    pointerEvents: "none",
    zIndex: 1,
  },
});

const BookmarkButton = styled("button", {
  base: {
    position: "absolute",
    top: "8px",
    right: "8px",
    cursor: "pointer",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    border: "none",
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
});

const MovieInfo = styled("div", {
  base: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    padding: "4",
    pointerEvents: "none",
    zIndex: 2,
  },
});

const MovieTitle = styled("p", {
  base: {
    color: "white",
    fontSize: "xl",
    fontWeight: "bold",
  },
});

const MovieDetails = styled("div", {
  base: {
    display: "flex",
    color: "gray.300",
    fontSize: "sm",
  },
});

const CategoryIconWrapper = styled("span", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    mx: "4px",
    "& > svg": {
      marginRight: "4px",
    },
  },
});

export default TrendingMoviesSection;
