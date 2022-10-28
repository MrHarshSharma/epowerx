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

import spam from "../../Images/SpamImages/spam.png";

function SpamCaseStudy() {
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
                Spam Detection In Customer Support Emails
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
                Monthly saving of 20 lakhs at the current state / core NLP
                project
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
                  Spam Detection In Customer Support Emails
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody className="ModalBody">
                  {/* <div className="slidernote">
                    <Text>Slide to explore</Text> <AiOutlineArrowRight />
                  </div> */}
                  <div className="ImagesSlider">
                    <img src={spam} alt="spam" />
                  </div>

                  {/* <img src={buyer_two} /><br /> */}
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

export default SpamCaseStudy;
