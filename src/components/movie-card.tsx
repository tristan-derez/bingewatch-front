import { cva } from "#styled-system/css";
import { useState } from "react";
import { MovieCardProps } from "../types/movie";
import { BookmarkEmptyIcon, BookmarkFullIcon } from "./icons/bookmark-icons";
import { MovieIcon } from "./icons/movie-icon";
import { TvShowIcon } from "./icons/tvserie-icon";

const MovieCard = ({
  imageUrl,
  year,
  category,
  rating,
  title: movieTitle,
  isBookmarked: initialIsBookmarked,
  size = "sm",
  srcSet,
}: MovieCardProps): JSX.Element => {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);

  const handleBookmarkClick = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  const getCategoryIcon = () => {
    switch (category) {
      case "Movie":
        return <MovieIcon width={12} height={12} />;
      case "TV Series":
        return <TvShowIcon width={12} height={12} style={{ marginBottom: "1px" }} />;
      default:
        return null;
    }
  };

  return (
    <div className={previewcard({ size })}>
      <img src={imageUrl} srcSet={srcSet} alt={movieTitle} className={image({ size })} />
      <div
        className={bookmarkIcon({ active: isBookmarked })}
        onClick={handleBookmarkClick}
        title={isBookmarked ? "Remove Bookmark" : "Add to Bookmark"}
      >
        {isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
      </div>

      <div className={content()}>
        <div className={info()}>
          {year} • {getCategoryIcon()}
          {category} • {rating}
        </div>
        <h2 className={title()}>{movieTitle}</h2>
      </div>
    </div>
  );
};

const previewcard = cva({
  base: {
    w: "100%",
    minW: "164px",
    maxWidth: "100%",
    overflow: "hidden",
    position: "relative",
    _hover: {
      cursor: "pointer",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const image = cva({
  base: {
    w: "full",
    borderRadius: "lg",
    objectFit: "cover",
    _hover: {
      cursor: "pointer",
      opacity: "75%",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const content = cva({
  base: {
    pt: "8px",
  },
});

const info = cva({
  base: {
    textStyle: "body",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
});

const title = cva({
  base: {
    m: 0,
    textStyle: "h4",
  },
});

const bookmarkIcon = cva({
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
    _hover: {
      bg: "white",
      color: "black",
    },
  },
  variants: {
    active: {
      true: { color: "white" },
      false: { color: "white" },
    },
  },
});

export default MovieCard;
