import { Box, Stack, Container, Hide } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Akun from "./Akun";
import AkunMobile from "./AkunMobile";

export default function Guru(props) {
  return (
    <Stack as={Container} maxW={"7xl"} pt={16}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={5}
        py={5}
        justifyContent={"center"}
      >
        <Hide below="lg">
          <Akun />
        </Hide>
        <Hide above="lg">
          <AkunMobile />
        </Hide>
        <Box flex="1">
          <Outlet />
        </Box>
      </Stack>
    </Stack>
  );
}
