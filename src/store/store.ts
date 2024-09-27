import { create } from "zustand";
import { Media } from "../types/media";
import mediaData from "../data.json";

type PageName = "home" | "movies" | "tvSeries" | "bookmarks";

interface AppState {
  currentPage: PageName;
  medias: Media[];
  searchTerm: string;
  searchResults: Media[];
  setCurrentPage: (page: PageName) => void;
  setSearchTerm: (term: string) => void;
  getFilteredMedias: () => Media[];
  getSearchPlaceholder: () => string;
  getRecommendedTitle: () => string;
}

export const useStore = create<AppState>((set, get) => ({
  currentPage: "home",
  medias: mediaData as Media[],
  searchTerm: "",
  searchResults: [],
  setCurrentPage: (page: PageName) => set({ currentPage: page }),
  setSearchTerm: (term: string) => {
    set({ searchTerm: term });
    const { currentPage, medias } = get();
    if (term) {
      let filteredMedias = medias;

      // First, filter by current page context
      switch (currentPage) {
        case "movies":
          filteredMedias = filteredMedias.filter((media) => media.category === "Movie");
          break;
        case "tvSeries":
          filteredMedias = filteredMedias.filter((media) => media.category === "TV Series");
          break;
        case "bookmarks":
          filteredMedias = filteredMedias.filter((media) => media.isBookmarked);
          break;
      }

      const results = filteredMedias.filter((media) => media.title.toLowerCase().includes(term.toLowerCase()));
      set({ searchResults: results });
    } else {
      set({ searchResults: [] });
    }
  },
  getFilteredMedias: () => {
    const { currentPage, medias } = get();
    switch (currentPage) {
      case "movies":
        return medias.filter((media) => media.category === "Movie");
      case "tvSeries":
        return medias.filter((media) => media.category === "TV Series");
      case "bookmarks":
        return medias.filter((media) => media.isBookmarked);
      default:
        return medias;
    }
  },
  getSearchPlaceholder: () => {
    const { currentPage } = get();
    switch (currentPage) {
      case "movies":
        return "Search for movies";
      case "tvSeries":
        return "Search for TV series";
      case "bookmarks":
        return "Search bookmarked shows";
      default:
        return "Search for movies or TV series";
    }
  },
  getRecommendedTitle: () => {
    const { currentPage } = get();
    switch (currentPage) {
      case "home":
        return "Recommended for you";
      case "movies":
        return "Movies";
      case "tvSeries":
        return "TV Series";
      case "bookmarks":
        return "Bookmarked Movies";
      default:
        return "Recommended for you";
    }
  },
}));
