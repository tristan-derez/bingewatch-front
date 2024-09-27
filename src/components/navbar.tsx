import { Flex, Box, styled } from "#styled-system/jsx";
import { useState } from "react";
import { HomeIcon } from "./nav-icons/home-icon";
import { LogoIcon } from "./nav-icons/logo-icon";
import { NavBookMarkIcon } from "./nav-icons/nav-bookmark-icon";
import { NavMovieIcon } from "./nav-icons/nav-movie-icon";
import { NavTvSerieIcon } from "./nav-icons/nav-tv-series-icon";
import { CircleUser } from "lucide-react";

type PageName = "home" | "movies" | "tvSeries" | "bookmarks";

function NavBar() {
  const [activePage, setActivePage] = useState<PageName>("home");

  const handleNavClick = (page: PageName) => {
    setActivePage(page);
    console.log(`${page} clicked`);
  };

  const getIconColor = (page: PageName) => {
    return activePage === page ? "white" : "gray";
  };

  return (
    <Box
      m={{ base: 0, md: 0, lg: "32px" }}
      p={{ base: "32px", md: "32px", lg: 0 }}
      alignSelf={{ base: "flex-start", md: "center", lg: "flex-start" }}
      w={{ base: "100%", md: "100%", lg: "80px" }}
      position={{ lg: "fixed" }}
    >
      <Flex
        flexDir={{ base: "row", lg: "column" }}
        justifyContent={{ base: "space-between", lg: "flex-start" }}
        alignItems='center'
        bg='surface'
        h={{ base: "64px", lg: `calc(100vh - 64px)` }}
        borderRadius='20px'
      >
        <Box px={{ base: "16px", md: "24px", lg: 0 }} pt={{ lg: "36px" }} pb={{ lg: "75px" }}>
          <LogoIcon />
        </Box>

        <Flex
          flexDir={{ base: "row", lg: "column" }}
          justify={{ base: "center", lg: "flex-start" }}
          gap={{ base: "24px", md: "32px", lg: "40px" }}
        >
          <NavButton onClick={() => handleNavClick("home")}>
            <HomeIcon color={getIconColor("home")} />
          </NavButton>
          <NavButton onClick={() => handleNavClick("movies")}>
            <NavMovieIcon color={getIconColor("movies")} />
          </NavButton>
          <NavButton onClick={() => handleNavClick("tvSeries")}>
            <NavTvSerieIcon color={getIconColor("tvSeries")} />
          </NavButton>
          <NavButton onClick={() => handleNavClick("bookmarks")}>
            <NavBookMarkIcon color={getIconColor("bookmarks")} />
          </NavButton>
        </Flex>

        <Flex
          alignSelf={{ base: "flex-end", lg: "center" }}
          mt={{ base: "auto" }}
          mb={{ lg: "0" }}
          py={{ base: "16px", md: "16px", lg: "32px" }}
          px={{ base: "16px", md: "19px", lg: 0 }}
        >
          <UserButton>
            <CircleUser size={32} color='gray' />
          </UserButton>
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
    "&:hover": {
      "& svg:not(.circle-user) path": {
        fill: "red",
        transition: "fill 0.6s ease",
      },
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 2px secondary",
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
