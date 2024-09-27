import { useEffect, useRef, useCallback } from "react";
import { Box, Grid, styled } from "#styled-system/jsx/";
import { SearchIcon } from "./icons/search-icon";
import MovieCard from "./movie-card";
import { useStore } from "../store/movies";

const ContentSearch = () => {
  const { searchTerm, searchResults, setSearchTerm, getSearchPlaceholder } = useStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      inputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <Box
        width='full'
        mt={{ base: "24px", md: "33px", lg: "50px" }}
        mb='0'
        pr='32px'
        pl={{ base: "32px", md: "32px", lg: 0 }}
      >
        <Box display='flex' alignItems='center' position='relative'>
          <InputWrapper>
            <SearchIcon height={34} width={34} color='white' />
            <Input
              type='text'
              placeholder={getSearchPlaceholder()}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              ref={inputRef}
              id='content-search'
              name='content-search'
            />
          </InputWrapper>
          <ShortcutIndicator>⌘K / CTRL+k</ShortcutIndicator>
        </Box>
      </Box>
      {searchTerm && searchResults.length > 0 && (
        <Box mt='4' pr='32px' pl={{ base: "32px", md: "32px", lg: 0 }}>
          <Heading>
            Found {searchResults.length} results for '{searchTerm}'
          </Heading>
          <Grid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap='4'>
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} {...movie} sizes='(max-width: 640px) 328px, (max-width: 1440px) 440px, 560px' />
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

const Heading = styled("h1", {
  base: {
    pb: "15px",
    textStyle: "h4",
    md: { textStyle: "h1" },
  },
});

const InputWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
});

const Input = styled("input", {
  base: {
    ml: "16px",
    md: {
      ml: "24px",
      textStyle: "h3",
    },
    pr: { base: "16px", md: "70px" },
    py: "2",
    width: "full",
    bg: "background",
    border: "none",
    borderBottom: "2px solid transparent",
    outline: "none",
    textStyle: "inputText",
    transition: "border-color 0.8s ease-in-out",
    "&:focus": {
      borderColor: "secondary",
    },
    borderRadius: "0",
  },
});

const ShortcutIndicator = styled("span", {
  base: {
    position: "absolute",
    color: "#FFFFF",
    textStyle: "h4",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "4px",
    backgroundColor: "gray.700",
    p: "6px",
    fontSize: "sm",
    pointerEvents: "none",
    display: "none",
    md: {
      display: "block",
    },
  },
});

export default ContentSearch;
