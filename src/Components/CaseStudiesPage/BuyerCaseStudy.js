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
  Center, List, ListItem, ListIcon 
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import { AiOutlineArrowRight } from "react-icons/ai";

import buyer_one from "../../Images/BuyerImages/buyer1.png";
import buyer_two from "../../Images/BuyerImages/buyer2.png";
import buyer_three from "../../Images/BuyerImages/buyer3.png";

function BuyerCaseStudy() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
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
              <Text fontSize={"xl"} fontWeight={200}  className='caseHeading'>
                Buyer supplier matchmaking for B2B Marketplace
              </Text>
            </Stack>
          </Stack>

          <Box style={{color:'white'}} px={6} py={10} className='caseStudyContent'>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="white.400" />
                Sellers of indiamart pay subscription for relevant leads of
                their products. 
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

            <Modal onClose={onClose} isOpen={isOpen} size={"full"} >
              <ModalOverlay />
              <ModalContent className="gradientBG">
                <ModalHeader fontSize='3xl'>
                  Buyer supplier matchmaking for B2B Marketplace
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody className="ModalBody">
                  <div className="slidernote">
                    <Text>Slide to explore</Text> <AiOutlineArrowRight />
                  </div>
                  <div className="ImagesSlider">
                    <img class="" src={buyer_one} />

                    <img class="" src={buyer_two} />

                    <img class="" src={buyer_three} />
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

export default BuyerCaseStudy;
