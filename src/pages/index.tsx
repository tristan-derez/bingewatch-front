import ContentSearch from "#components/content-search.js";
import MediasSection from "#components/medias-section.js";
import TrendingMoviesSection from "#components/trending-section.js";
import { useStore } from "../store/store";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { medias, searchTerm, getMediaTitle } = useStore();

  return (
    <>
      <ContentSearch />
      {!searchTerm && (
        <>
          <TrendingMoviesSection medias={medias} />
          <MediasSection medias={medias} title={getMediaTitle()} />
        </>
      )}
    </>
  );
}

export default HomePage;
