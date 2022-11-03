import React from "react";
import {
  Box,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import { AiOutlineArrowRight } from "react-icons/ai";

import seo_one from "../../Images/SeoImages/seo1.png";
import seo_two from "../../Images/SeoImages/seo2.png";

function SeoCaseStudy() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          className="gradientBG"
          boxShadow={"base"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
            className="caseHeader"
          >
            <Text
              fontSize={"md"}
              fontWeight={500}
              className="light_bg"
              p={2}
              px={3}
              color={"#fff"}
              rounded={"full"}
            >
              Service
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"xl"} fontWeight={200} className="caseHeading">
                ALPS | An Semi-automated SEO Product
              </Text>
            </Stack>
          </Stack>

          <Box
            style={{ color: "white" }}
            px={6}
            py={10}
            className="caseStudyContent"
          >
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="white.400" />
                3-4% increase in web ranking and 20% in Rol
              </ListItem>
            </List>

            <Button
              onClick={onOpen}
              className="btn_yellow roundedBtn "
              mt={10}
              w={"full"}
              color={"black"}
              boxShadow={"0 5px 20px 0px rgb(217 203 34 / 43%)"}
            >
              Read More
            </Button>

            <Modal onClose={onClose} isOpen={isOpen} size={"full"}>
              <ModalOverlay />
              <ModalContent className="gradientBG">
                <ModalHeader fontSize="3xl">
                  ALPS | An Semi-automated SEO Product
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody className="ModalBody">
                  <div className="slidernote">
                    <Text>Slide to explore</Text> <AiOutlineArrowRight />
                  </div>
                  <div className="ImagesSlider">
                    <img src={seo_one} alt="seo_one" />
                    <img src={seo_two} alt="seo_two" />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button className="modal_closeBtn" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Center>
    </>
  );
}

export default SeoCaseStudy;
