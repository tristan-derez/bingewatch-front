import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Flex } from "#styled-system/jsx";
import NavBar from "#components/navbar";

export const Route = createRootRoute({
  component: Root,
});

export default function Root() {
  return (
    <Flex w='100%' maxW='100vw' minH='100vh' color='text' bg='background' flexDirection={{ base: "column", lg: "row" }}>
      <NavBar />
      <Flex flexDir='column' w='100%' pl={{ lg: "164px" }} pb={{ lg: "24px" }} role='main'>
        <Outlet />
      </Flex>
    </Flex>
  );
}
