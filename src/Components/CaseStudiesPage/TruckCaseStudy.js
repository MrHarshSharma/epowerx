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
} from "@chakra-ui/react";
import truck from "../../Images/TruckImages/truck.png";
import CaseTags from "./CaseTags";

function TruckCaseStudy() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Stack>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
          className="big_cont"
        >
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <CaseTags tags={["Service"]} />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Predicting unproductive Truck trips
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Daily reconciliation of transactions between fund and broker.
              Caters to huge volume and long tail problem using ML.
            </Text>
            <Button onClick={onOpen} className="btn_yellow">
              Read more
            </Button>
            <Modal onClose={onClose} isOpen={isOpen} size={"full"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Predicting unproductive Truck trips</ModalHeader>
                <ModalCloseButton />
                <ModalBody className="ModalBody">
                  <img src={truck} />
                </ModalBody>
                <ModalFooter>
                  <Button className="modal_closeBtn" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default TruckCaseStudy;
