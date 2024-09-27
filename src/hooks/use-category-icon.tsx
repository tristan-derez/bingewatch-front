import { MovieIcon } from "#components/icons/movie-icon.js";
import { TvShowIcon } from "#components/icons/tvserie-icon.js";
import { useMemo } from "react";

export const useCategoryIcon = (category: string) => {
  return useMemo(() => {
    switch (category) {
      case "Movie":
        return <MovieIcon width={12} height={12} />;
      case "TV Series":
        return <TvShowIcon width={12} height={12} style={{ marginBottom: "1px" }} />;
      default:
        return null;
    }
  }, [category]);
};
