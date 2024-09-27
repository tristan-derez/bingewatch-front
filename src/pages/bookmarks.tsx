import ContentSearch from "#components/content-search.js";
import MediasSection from "#components/medias-section.js";
import { useStore } from "../store/store";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bookmarks")({
  component: BookmarksPage,
});

function BookmarksPage() {
  const { getFilteredMedias, searchTerm, getMediaTitle } = useStore();
  const { movies, tvSeries } = getFilteredMedias();
  const [movieTitle, tvSeriesTitle] = getMediaTitle();

  return (
    <>
      <ContentSearch />
      {!searchTerm && (
        <>
          <MediasSection medias={movies} title={movieTitle} />
          <MediasSection medias={tvSeries} title={tvSeriesTitle} />
        </>
      )}
    </>
  );
}

export default BookmarksPage;
