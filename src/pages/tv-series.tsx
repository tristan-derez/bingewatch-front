import ContentSearch from "#components/content-search.js";
import MediasSection from "#components/medias-section.js";
import { useStore } from "../store/store";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tv-series")({
  component: TvSeriesPage,
});

function TvSeriesPage() {
  const { getFilteredMedias, searchTerm, getMediaTitle } = useStore();
  const { tvSeries } = getFilteredMedias();

  return (
    <>
      <ContentSearch />
      {!searchTerm && <MediasSection medias={tvSeries} title={getMediaTitle()} />}
    </>
  );
}

export default TvSeriesPage;
