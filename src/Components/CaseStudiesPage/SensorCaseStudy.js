import React from "react";
import {
  Box,
  Heading,
  Link,
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

import sensor_one from "../../Images/SensorImages/sensor1.png";
import sensor_two from "../../Images/SensorImages/sensor2.png";

import { CheckIcon } from "@chakra-ui/icons";
import { AiOutlineArrowRight } from "react-icons/ai";


function SensorCaseStudy() {
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
              Sensor based event recognition using deep learning

              </Text>
            </Stack>
          </Stack>

          <Box style={{color:'white'}} px={6} py={10} className='caseStudyContent'>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="white.400" />
                Quantitative feedback for bowlers by deploying chip inside a cricket ball and showing the results on an app.

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
                Sensor based event recognition using deep learning

                </ModalHeader>
                <ModalCloseButton />
                <ModalBody className="ModalBody">
                  <div className="slidernote">
                    <Text>Slide to explore</Text> <AiOutlineArrowRight />
                  </div>
                  <div className="ImagesSlider">
                  <img src={sensor_one} /><br />
                  <img src={sensor_two} />
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

export default SensorCaseStudy;
