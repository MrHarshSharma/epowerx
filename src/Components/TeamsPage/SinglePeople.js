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
      // bg={useColorModeValue("white", "gray.900")}
      className='gradientBG'
      rounded={"lg"}
      p={6}
      textAlign={"center"}
      style={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 46%)" }}
      
    >
      <Avatar
        size={"xl"}
        // src={
        //   "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        // }

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

        <Text fontWeight={600} style={{color:'white'}} mb={4}>
          <AiFillLinkedin />
          {member.linkedin}
        </Text>
        </span>
      </a>
      <Text
        textAlign={"center"}
        color='white'
        px={1}
        py={2}
        mb={2}
      >
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
          <Button
            bg="#d2d2d2"
            // _focus={{
            //   bg: "gray.200",
            // }}
            className='btn_secondary'
          >
            Email
          </Button>
        </Link>
        {/* <Link
          href={"#Contact"}
          flex={1}
          fontSize={"sm"}
          style={{ textDecoration: "none" }}
          rounded={"full"}
        >
          <Button className="btn_yellow" color={"black"}>
            Call
          </Button>
        </Link> */}
      </Stack>
    </Box>
  );
}

export default SinglePeople;
