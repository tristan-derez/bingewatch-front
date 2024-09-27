export interface Thumbnail {
  regular: {
    small: string;
    medium: string;
    large: string;
  };
  trending?: {
    small: string;
    large: string;
  };
}

export interface Movie {
  id: string;
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export type Size = "sm" | "md" | "lg";

export interface MovieCardProps {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  sizes?: string;
  srcSet?: string;
}
