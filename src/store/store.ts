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
  getFilteredMedias: () => { movies: Media[]; tvSeries: Media[] };
  getSearchPlaceholder: () => string;
  getMediaTitle: () => string | string[];
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
        return {
          movies: medias.filter((media) => media.category === "Movie"),
          tvSeries: [],
        };
      case "tvSeries":
        return {
          movies: [],
          tvSeries: medias.filter((media) => media.category === "TV Series"),
        };
      case "bookmarks":
        return {
          movies: medias.filter((media) => media.isBookmarked && media.category === "Movie"),
          tvSeries: medias.filter((media) => media.isBookmarked && media.category === "TV Series"),
        };
      default:
        return {
          movies: medias.filter((media) => media.category === "Movie"),
          tvSeries: medias.filter((media) => media.category === "TV Series"),
        };
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
        return "Search in bookmarks";
      default:
        return "Search for movies or TV series";
    }
  },
  getMediaTitle: () => {
    const { currentPage } = get();
    switch (currentPage) {
      case "home":
        return "Recommended for you";
      case "movies":
        return "Movies";
      case "tvSeries":
        return "TV Series";
      case "bookmarks":
        return ["Bookmarked Movies", "Bookmarked TV Series"];
      default:
        return "Recommended for you";
    }
  },
}));
