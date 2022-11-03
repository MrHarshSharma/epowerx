import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";
function SinglePeople({ member }) {
  return (
    <Box
      maxW={"620px"}
      w={"full"}
      className="gradientBG"
      rounded={"lg"}
      p={6}
      textAlign={"center"}
      style={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 46%)" }}
    >
      <Avatar
        size={"xl"}
        src={`TeamImages/${member.imagename}.jpeg`}
        alt={"Avatar Alt"}
        mb={4}
        pos={"relative"}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: "green.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3,
        }}
        style={{ scale: "1.3" }}
      />
      <Heading
        fontSize={"2xl"}
        fontFamily={"body"}
        style={{ marginTop: "20px" }}
      >
        {member.name}
      </Heading>
      <a
        className="LinkedinLink"
        href={`https://www.linkedin.com/in/${member.linkedin}/`}
        target="_blank"
      >
        <span className="LinkedIncontainer">
          <Text fontWeight={600} style={{ color: "white" }} mb={4}>
            <AiFillLinkedin />
            {member.linkedin}
          </Text>
        </span>
      </a>
      <Text textAlign={"center"} color="white" px={1} py={2} mb={2}>
        {member.description}
      </Text>

      <Stack direction={"row"} spacing={4}>
        <Link
          href={"#Contact"}
          flex={1}
          fontSize={"sm"}
          style={{ textDecoration: "none" }}
          rounded={"full"}
        >
          <Button bg="#d2d2d2" className="btn_secondary">
            Email
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default SinglePeople;
