import { create } from "zustand";
import { Movie } from "../types/movie";
import movieData from "../data.json";

type PageName = "home" | "movies" | "tvSeries" | "bookmarks";

interface AppState {
  currentPage: PageName;
  movies: Movie[];
  searchTerm: string;
  searchResults: Movie[];
  setCurrentPage: (page: PageName) => void;
  setSearchTerm: (term: string) => void;
  getFilteredMovies: () => Movie[];
  getSearchPlaceholder: () => string;
  getRecommendedTitle: () => string;
}

export const useStore = create<AppState>((set, get) => ({
  currentPage: "home",
  movies: movieData as Movie[],
  searchTerm: "",
  searchResults: [],
  setCurrentPage: (page: PageName) => set({ currentPage: page }),
  setSearchTerm: (term: string) => {
    set({ searchTerm: term });
    const { currentPage, movies } = get();
    if (term) {
      let filteredMovies = movies;

      // First, filter by current page context
      switch (currentPage) {
        case "movies":
          filteredMovies = filteredMovies.filter((movie) => movie.category === "Movie");
          break;
        case "tvSeries":
          filteredMovies = filteredMovies.filter((movie) => movie.category === "TV Series");
          break;
        case "bookmarks":
          filteredMovies = filteredMovies.filter((movie) => movie.isBookmarked);
          break;
      }

      const results = filteredMovies.filter((movie) => movie.title.toLowerCase().includes(term.toLowerCase()));
      set({ searchResults: results });
    } else {
      set({ searchResults: [] });
    }
  },
  getFilteredMovies: () => {
    const { currentPage, movies } = get();
    switch (currentPage) {
      case "movies":
        return movies.filter((movie) => movie.category === "Movie");
      case "tvSeries":
        return movies.filter((movie) => movie.category === "TV Series");
      case "bookmarks":
        return movies.filter((movie) => movie.isBookmarked);
      default:
        return movies;
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
