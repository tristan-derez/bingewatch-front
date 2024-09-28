import ContentSearch from "#components/content-search.js";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/media-infos")({
  component: MediaInfosPage,
});

function MediaInfosPage() {
  return (
    <>
      <ContentSearch />
    </>
  );
}

export default MediaInfosPage;
