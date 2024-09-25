import { Flex, Box } from "#styled-system/jsx";
import { HomeIcon } from "./nav-icons/home-icon";
import { LogoIcon } from "./nav-icons/logo-icon";
import { NavBookMarkIcon } from "./nav-icons/nav-bookmark-icon";
import { NavMovieIcon } from "./nav-icons/nav-movie-icon";
import { NavTvSerieIcon } from "./nav-icons/nav-tv-series-icon";

function NavBar() {
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
        p='16px'
        h={{ base: "64px", lg: `calc(100vh - 64px)` }}
        borderRadius='20px'
      >
        <Box mb={{ lg: "75px" }}>
          <LogoIcon />
        </Box>

        <Flex
          flexDir={{ base: "row", lg: "column" }}
          justify={{ base: "center", lg: "flex-start" }}
          gap={{ base: "24px", md: "32px", lg: "40px" }}
        >
          <Box>
            <HomeIcon />
          </Box>
          <Box>
            <NavMovieIcon />
          </Box>
          <Box>
            <NavTvSerieIcon />
          </Box>
          <Box>
            <NavBookMarkIcon />
          </Box>
        </Flex>

        <Flex alignSelf={{ base: "flex-end", lg: "center" }} mt={{ base: "auto" }} mb={{ lg: "0" }}>
          <img
            src='/src/assets/image-avatar.png'
            alt='Profile'
            style={{ borderRadius: "50%", width: "32px", height: "32px" }} // Adjust width and height as needed
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
