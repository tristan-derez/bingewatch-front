import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Flex } from "#styled-system/jsx";
import NavBar from "#components/navbar";
import { css } from "#styled-system/css/";

export const Route = createRootRoute({
  component: Root,
});

export default function Root() {
  return (
    <Flex
      w='100%'
      maxW='100vw'
      minH='100vh'
      color='text'
      bg='background'
      flexDirection={{ base: "column", lg: "row" }}
      className={css({
        "@media (min-width: 2000px)": {
          maxWidth: "2000px",
          margin: "0 auto",
          position: "relative",
          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--colors-background)",
            zIndex: -1,
          },
        },
      })}
    >
      <NavBar />
      <Flex flexDir='column' w='100%' pl={{ lg: "164px" }} pb={{ lg: "24px" }} role='main'>
        <Outlet />
      </Flex>
    </Flex>
  );
}
