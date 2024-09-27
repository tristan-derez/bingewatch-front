import ContentSearch from "#components/content-search.js";
import RecommendedMoviesSection from "#components/recommanded-section.js";
import TrendingMoviesSection from "#components/trending-section.js";
import { useStore } from "../store/store";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { medias, searchTerm } = useStore();

  return (
    <>
      <ContentSearch />
      {!searchTerm && (
        <>
          <TrendingMoviesSection medias={medias} />
          <RecommendedMoviesSection medias={medias} />
        </>
      )}
    </>
  );
}

export default HomePage;
