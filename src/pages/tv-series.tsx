import ContentSearch from "#components/content-search.js";
import RecommendedMoviesSection from "#components/recommanded-section.js";
import { useStore } from "../store/store";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tv-series")({
  component: TvSeriesPage,
});

function TvSeriesPage() {
  const { getFilteredMedias, searchTerm } = useStore();

  return (
    <>
      <ContentSearch />
      {!searchTerm && <RecommendedMoviesSection medias={getFilteredMedias()} />}
    </>
  );
}

export default TvSeriesPage;
