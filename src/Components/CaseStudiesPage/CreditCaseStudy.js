import React from 'react'
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
  import credit_one from "../../Images/CreditImages/credit1.png";
  import credit_two from "../../Images/CreditImages/credit2.png";
  import CaseTags from "./CaseTags";

function CreditCaseStudy() {
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
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <CaseTags tags={["Product"]} />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                 Measuring credit worthiness of borrower
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Calculated chances of default for a consumer lending startup and hence gave a credit score to person. Deped this in product.  
            </Text>
            <Button onClick={onOpen} className="btn_yellow">
              Read more
            </Button>
            <Modal onClose={onClose} isOpen={isOpen} size={"full"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader> Measuring credit worthiness of borrower</ModalHeader>
                <ModalCloseButton />
                <ModalBody className="ModalBody">
                  <img src={credit_one} /><br />
                  <img src={credit_two} />
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
      </Stack>
    </>
  );
}

export default CreditCaseStudy