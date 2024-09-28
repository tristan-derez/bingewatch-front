export interface Thumbnail {
  trending?: {
    small: string;
    large: string;
  };
  regular: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface Media {
  id: string;
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface MediaCardProps extends Media {
  srcSet?: string;
  sizes?: string;
}
