import MovieCard from "./content-card";
import { Media } from "../types/media";
import { Box, Grid, styled } from "#styled-system/jsx/";
import { css } from "#styled-system/css/";

interface MediasSectionProps {
  medias: Media[];
  title: string | string[];
}

const MediasSection = ({ medias, title }: MediasSectionProps) => {
  return (
    <Box
      pt={{ base: "24px", md: "40px" }}
      pl={{ base: "16px", md: "32px", lg: 0 }}
      pr={{ base: "16px", md: "32px" }}
      pb={{ base: "40px", md: "32px", lg: 0 }}
    >
      <Title>{title}</Title>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gridColumnGap={{ base: "15px", md: "30px", lg: "40px" }}
        gridRowGap={{ base: "15px", md: "24px", lg: "32px" }}
        w='100%'
        className={css({
          "@media (max-width: 370px)": {
            gridTemplateColumns: "repeat(1, 1fr)",
          },
        })}
      >
        {medias.map((media) => (
          <MovieCard key={media.id} {...media} />
        ))}
      </Grid>
    </Box>
  );
};

const Title = styled("h1", {
  base: {
    textStyle: "categoryTitle",
    pb: "24px",
    lg: {
      pb: "32px",
    },
  },
});

export default MediasSection;
