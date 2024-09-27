import { styled } from "#styled-system/jsx/";
import { useRef } from "react";
import { Media } from "../types/media";
import { BookmarkEmptyIcon, BookmarkFullIcon } from "./icons/bookmark-icons";
import { useDraggable } from "react-use-draggable-scroll";
import { useCategoryIcon } from "../hooks/use-category-icon";

interface TredingMediasSectionProps {
  medias: Media[];
  onMediaClick?: (media: Media) => void;
}

const TrendingMediasSection: React.FC<TredingMediasSectionProps> = ({ medias, onMediaClick }) => {
  const trendingMedias = medias.filter((media) => media.isTrending);
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const handleClick = (media: Media) => {
    if (onMediaClick) {
      onMediaClick(media);
      console.log(media.id);
    }
  };

  const handleBookmarkClick = (e: React.MouseEvent<HTMLButtonElement>, mediaId: string) => {
    e.stopPropagation();
    console.log(mediaId);
  };

  return (
    <>
      <TrendingContainer>
        <Title>Trending</Title>
        <MediaScroller ref={ref} {...events}>
          {trendingMedias.map((media) => (
            <MediaCard key={media.id} onClick={() => handleClick(media)}>
              <MediaImage>
                <img
                  src={media.thumbnail.trending?.large}
                  srcSet={`${media.thumbnail.regular.small} 328w, ${media.thumbnail.regular.medium} 440w, ${media.thumbnail.regular.large} 560w`}
                  sizes='(max-width: 640px) 328px, (max-width: 1440px) 440px, 560px'
                  alt={media.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    pointerEvents: "none",
                  }}
                />
                <GradientOverlay />
                <BookmarkButton
                  onClick={(e) => handleBookmarkClick(e, media.id)}
                  title={media.isBookmarked ? "Remove Bookmark" : "Add to Bookmark"}
                >
                  {media.isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
                </BookmarkButton>
                <MediaInfo>
                  <MediaDetails>
                    {media.year} •{" "}
                    <CategoryIconWrapper>
                      <MovieCategoryIcon category={media.category} />
                    </CategoryIconWrapper>{" "}
                    {media.category} • {media.rating}
                  </MediaDetails>
                  <MediaTitle>{media.title}</MediaTitle>
                </MediaInfo>
              </MediaImage>
            </MediaCard>
          ))}
        </MediaScroller>
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
    pl: "16px",
    md: {
      mt: "33px",
      pl: "32px",
    },
    lg: {
      mt: "34px",
      pl: 0,
    },
  },
});

const MediaScroller = styled("div", {
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

const MediaCard = styled("div", {
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

const MediaImage = styled("div", {
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

const MediaInfo = styled("div", {
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

const MediaTitle = styled("p", {
  base: {
    color: "white",
    fontSize: "xl",
    fontWeight: "bold",
  },
});

const MediaDetails = styled("div", {
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

export default TrendingMediasSection;
