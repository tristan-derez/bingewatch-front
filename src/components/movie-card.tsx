import { cva } from "#styled-system/css";
import { useState } from "react";
import { MovieCardProps } from "../types/movie";
import { BookmarkEmptyIcon, BookmarkFullIcon } from "./icons/bookmark-icons";
import { styled } from "#styled-system/jsx/";
import { useCategoryIcon } from "../hooks/use-category-icon";

const MovieCard = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked: initialIsBookmarked,
  isTrending,
  srcSet,
  sizes,
}: MovieCardProps): JSX.Element => {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);

  const handleBookmarkClick = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  const CategoryIcon = useCategoryIcon(category);

  const imageUrl = isTrending ? thumbnail.trending?.small : thumbnail.regular.small;

  const finalSrcSet =
    srcSet || `${thumbnail.regular.small} 328w, ${thumbnail.regular.medium} 440w, ${thumbnail.regular.large} 560w`;

  return (
    <PreviewCard>
      <Image src={imageUrl} srcSet={finalSrcSet} alt={title} sizes={sizes} />
      <div
        className={bookmarkIcon({ active: isBookmarked })}
        onClick={handleBookmarkClick}
        title={isBookmarked ? "Remove Bookmark" : "Add to Bookmark"}
      >
        {isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
      </div>

      <Content>
        <Info>
          {year} • {CategoryIcon}
          {category} • {rating}
        </Info>
        <Title>{title}</Title>
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
