import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

function FooterSection() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} color="#fff">
        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>© 2022 Epowerx. All rights reserved</Text>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default FooterSection;
