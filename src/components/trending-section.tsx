import { styled } from "#styled-system/jsx/";
import { MouseEvent, useRef, useState, TouchEvent } from "react";
import { Movie } from "../types/movie";
import { BookmarkEmptyIcon, BookmarkFullIcon } from "./icons/bookmark-icons";
import { css } from "#styled-system/css/";

interface TrendingMoviesSectionProps {
  movies: Movie[];
  onMovieClick?: (movie: Movie) => void;
}

const TrendingMoviesSection: React.FC<TrendingMoviesSectionProps> = ({ movies, onMovieClick }) => {
  const trendingMovies = movies.filter((movie) => movie.isTrending);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleDragStart = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
    scrollRef.current.style.userSelect = "none";
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.removeProperty("user-select");
    }
  };

  const handleDrag = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const x = pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClick = (movie: Movie) => {
    if (!isDragging && onMovieClick) {
      onMovieClick(movie);
    }
  };

  const handleBookmarkClick = (e: React.MouseEvent<HTMLButtonElement>, movieId: string) => {
    e.stopPropagation();

    console.log(movieId);
  };

  return (
    <TrendingContainer>
      <h1
        className={css({
          textStyle: "h3",
          mb: "24px",
          md: { textStyle: "h1" },
        })}
      >
        Trending
      </h1>
      <MovieScroller
        ref={scrollRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleDrag}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDrag}
      >
        {trendingMovies.map((movie) => (
          <MovieCard key={movie.id} onClick={() => handleClick(movie)}>
            <MovieImage>
              <img
                src={movie.thumbnail.trending?.large}
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
                  {movie.year} • {movie.category} • {movie.rating}
                </MovieDetails>
                <MovieTitle>{movie.title}</MovieTitle>
              </MovieInfo>
            </MovieImage>
          </MovieCard>
        ))}
      </MovieScroller>
    </TrendingContainer>
  );
};

const TrendingContainer = styled("div", {
  base: {
    position: "relative",
    width: "100%",
    overflowX: "hidden",
    mt: "24px",
    md: {
      mt: "33px",
    },
    lg: {
      mt: "34px",
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
    gap: "16px",
    md: {
      gap: "40px",
    },
    scrollSnapType: "x mandatory",
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
    width: "470px",
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

const MovieDetails = styled("p", {
  base: {
    color: "gray.300",
    fontSize: "sm",
  },
});

export default TrendingMoviesSection;
