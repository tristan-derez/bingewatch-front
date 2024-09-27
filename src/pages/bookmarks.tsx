import ContentSearch from "#components/content-search.js";
import RecommendedMoviesSection from "#components/recommanded-section.js";
import { useStore } from "../store/movies";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bookmarks")({
  component: BookmarksPage,
});

function BookmarksPage() {
  const { getFilteredMovies, searchTerm } = useStore();

  return (
    <>
      <ContentSearch />
      {!searchTerm && <RecommendedMoviesSection movies={getFilteredMovies()} />}
    </>
  );
}

export default BookmarksPage;
