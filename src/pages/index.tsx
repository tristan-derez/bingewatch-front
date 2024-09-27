import ContentSearch from "#components/content-search.js";
import RecommendedMoviesSection from "#components/recommanded-section.js";
import TrendingMoviesSection from "#components/trending-section.js";
import { useStore } from "../store/movies";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { movies, searchTerm } = useStore();

  return (
    <>
      <ContentSearch />
      {!searchTerm && (
        <>
          <TrendingMoviesSection movies={movies} />
          <RecommendedMoviesSection movies={movies} />
        </>
      )}
    </>
  );
}

export default HomePage;
