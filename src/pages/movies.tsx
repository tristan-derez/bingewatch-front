import ContentSearch from "#components/content-search.js";
import MediasSection from "#components/medias-section.js";
import { useStore } from "../store/store";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/movies")({
  component: MoviesPage,
});

function MoviesPage() {
  const { getFilteredMedias, searchTerm, getMediaTitle } = useStore();
  const { movies } = getFilteredMedias();

  return (
    <>
      <ContentSearch />
      {!searchTerm && <MediasSection medias={movies} title={getMediaTitle()} />}
    </>
  );
}

export default MoviesPage;
