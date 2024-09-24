import { cva } from "#styled-system/css";
import { useState } from "react";
import { MovieCardProps } from "../types/movie";
import { BookmarkEmptyIcon, BookmarkFullIcon } from "./icons/bookmark-icons";
import { MovieIcon } from "./icons/movie-icon";
import { TvShowIcon } from "./icons/tvserie-icon";
import { styled } from "#styled-system/jsx/";

const MovieCard = ({
  imageUrl,
  year,
  category,
  rating,
  title: movieTitle,
  isBookmarked: initialIsBookmarked,
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
    <PreviewCard>
      <Image src={imageUrl} srcSet={srcSet} alt={movieTitle} />
      <div
        className={bookmarkIcon({ active: isBookmarked })}
        onClick={handleBookmarkClick}
        title={isBookmarked ? "Remove Bookmark" : "Add to Bookmark"}
      >
        {isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
      </div>

      <Content>
        <Info>
          {year} • {getCategoryIcon()}
          {category} • {rating}
        </Info>
        <Title>{movieTitle}</Title>
      </Content>
    </PreviewCard>
  );
};

const PreviewCard = styled("div", {
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
});

const Image = styled("img", {
  base: {
    w: "full",
    borderRadius: "lg",
    objectFit: "cover",
    _hover: {
      cursor: "pointer",
      opacity: "75%",
    },
  },
});

const Content = styled("div", {
  base: {
    pt: "8px",
  },
});

const Info = styled("div", {
  base: {
    textStyle: "body",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
});

const Title = styled("h4", {
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
