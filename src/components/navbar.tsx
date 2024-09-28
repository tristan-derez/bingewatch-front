import { Flex, Box, styled } from "#styled-system/jsx";
import { HomeIcon } from "./nav-icons/home-icon";
import { LogoIcon } from "./nav-icons/logo-icon";
import { NavBookMarkIcon } from "./nav-icons/nav-bookmark-icon";
import { NavMovieIcon } from "./nav-icons/nav-movie-icon";
import { NavTvSerieIcon } from "./nav-icons/nav-tv-series-icon";
import { CircleUser } from "lucide-react";
import { useStore } from "../store/store";
import { Link, useRouter } from "@tanstack/react-router";
import { css } from "#styled-system/css/";

type PageName = "home" | "movies" | "tvSeries" | "bookmarks";

function NavBar() {
  const { currentPage, setCurrentPage, setSearchTerm } = useStore();
  const router = useRouter();

  const handleNavClick = (page: PageName) => {
    setCurrentPage(page);
    setSearchTerm("");
    router.navigate({ to: `/${page === "home" ? "" : page}` });
  };

  const getIconColor = (page: string) => {
    return currentPage === page ? "white" : "greyishBlue";
  };

  return (
    <Box
      m={{ base: 0, md: 0 }}
      ml={{ lg: "32px" }}
      mt={{ lg: "32px" }}
      p={{ base: 0, md: "32px", lg: 0 }}
      alignSelf={{ base: "flex-start", md: "center", lg: "flex-start" }}
      w={{ base: "100%", md: "100%", lg: "96px" }}
      position={{ lg: "fixed" }}
      role='navigation'
    >
      <Flex
        flexDir={{ base: "row", lg: "column" }}
        justifyContent={{ base: "space-between", lg: "flex-start" }}
        alignItems='center'
        bg='surface'
        h={{ base: "64px", lg: `calc(100vh - 64px)` }}
        className={css({
          "@media (min-width: 2000px)": {
            maxH: "964px",
            minH: "964px",
            top: 0,
            height: "full",
          },
        })}
        borderRadius={{ base: 0, md: "20px" }}
      >
        <Box px={{ base: "16px", md: "24px", lg: 0 }} pt={{ lg: "36px" }} pb={{ lg: "75px" }}>
          <LogoIcon />
        </Box>

        <Flex
          flexDir={{ base: "row", lg: "column" }}
          justify={{ base: "center", lg: "flex-start" }}
          gap={{ base: "24px", md: "32px", lg: "40px" }}
        >
          <Link to='/' onClick={() => handleNavClick("home")}>
            <NavButton active={currentPage === "home"} aria-label='Home'>
              <HomeIcon color={getIconColor("home")} />
            </NavButton>
          </Link>
          <Link to='/movies' onClick={() => handleNavClick("movies")}>
            <NavButton active={currentPage === "movies"} aria-label='Movies'>
              <NavMovieIcon color={getIconColor("movies")} />
            </NavButton>
          </Link>
          <Link to='/tv-series' onClick={() => handleNavClick("tvSeries")}>
            <NavButton active={currentPage === "tvSeries"} aria-label='tv series'>
              <NavTvSerieIcon color={getIconColor("tvSeries")} />
            </NavButton>
          </Link>
          <Link to='/bookmarks' onClick={() => handleNavClick("bookmarks")}>
            <NavButton active={currentPage === "bookmarks"} aria-label='bookmarks'>
              <NavBookMarkIcon color={getIconColor("bookmarks")} />
            </NavButton>
          </Link>
        </Flex>

        <Flex
          alignSelf={{ base: "flex-end", lg: "center" }}
          mt={{ base: "auto" }}
          mb={{ lg: "0" }}
          py={{ base: "16px", md: "16px", lg: "32px" }}
          px={{ base: "16px", md: "19px", lg: 0 }}
        >
          <Link to='/user-profile'>
            <UserButton aria-label='User profile'>
              <CircleUser size={32} color='#5A698F' />
            </UserButton>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

const NavButton = styled("button", {
  base: {
    bg: "transparent",
    border: "none",
    cursor: "pointer",
    p: "8px",
    borderRadius: "8px",
    transition: "all 0.3s ease",

    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 2px secondary",
    },
  },
  variants: {
    active: {
      true: {
        "& svg path": {
          fill: "white",
        },
      },
      false: {
        "& svg path": {
          fill: "greyishBlue",
        },
        "@media (hover: hover)": {
          "&:hover": {
            "& svg path": {
              fill: "red",
            },
          },
        },
      },
    },
  },
});

const UserButton = styled("button", {
  base: {
    bg: "transparent",
    border: "none",
    cursor: "pointer",
  },
});

export default NavBar;
