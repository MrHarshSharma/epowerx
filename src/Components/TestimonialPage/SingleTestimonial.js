import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      className="testi_content"
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

// const TestimonialHeading = ({ children }) => {
//   return (
//     <Heading as={"h3"} fontSize={"xl"} kwy={children}>
//       {children}
//     </Heading>
//   );
// };

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.100", "gray.400")}
      fontSize={"sm"}
      key={`${children}text`}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.200", "gray.400")}
        >
          {name}
        </Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.300", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};
const SingleTestimonial = ({ data }) => {
  return (
    <>
      <Testimonial >
        <TestimonialContent >
          <TestimonialText>{data.feedback}</TestimonialText>
        </TestimonialContent>
        <TestimonialAvatar
          src={data.avatarSrc}
          name={data.name}
          title={data.designation}
        />
      </Testimonial>
    </>
  );
};

export default SingleTestimonial;
