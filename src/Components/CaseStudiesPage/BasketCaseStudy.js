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
} from "@chakra-ui/react";
import { Center, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import basket from "../../Images/BasketImages/basket.png";

function BasketCaseStudy() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          // bg={useColorModeValue("white", "gray.800")}
          className='gradientBG'
          boxShadow={"base"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <Text
               fontSize={"md"}
               fontWeight={500}
               className='light_bg'
               p={2}
               px={3}
               color={"#fff"}
               rounded={"full"}
            >
              Service
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"} fontWeight={200} className='caseHeading'>
                
                Next basket recomendation
              </Text>
            </Stack>
          </Stack>

          <Box
            // bg={useColorModeValue("gray.200", "gray.900")}
            style={{color:'white'}}
            px={6}
            py={10}
            className="caseStudyContent"
          >
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="white.400" />
                Predicts time and products in the next basket of user of a
                retail chain.
              </ListItem>
            </List>

            <Button
              onClick={onOpen}
              className="btn_yellow roundedBtn"
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
                <ModalHeader fontSize='3xl'>Next basket recomendations </ModalHeader>
                <ModalCloseButton />
                <ModalBody className="ModalBody">
                  <img src={basket} />
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

export default BasketCaseStudy;
