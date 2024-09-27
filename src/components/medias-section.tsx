import MovieCard from "./content-card";
import { Media } from "../types/media";
import { Box, Grid, styled } from "#styled-system/jsx/";

interface MediasSectionProps {
  medias: Media[];
  title: string | string[];
}

const MediasSection = ({ medias, title }: MediasSectionProps) => {
  return (
    <Box pr='32px' pl={{ base: "32px", md: "32px", lg: 0 }} pb={{ base: "40px", md: "32px", lg: 0 }}>
      <Title>{title}</Title>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap='24px'
        w='100%'
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
    textStyle: "h3",
    my: "24px",
    md: { textStyle: "h1", mt: "39px", mb: "24px" },
    lg: { mt: "40px", mb: "24px" },
  },
});

export default MediasSection;
