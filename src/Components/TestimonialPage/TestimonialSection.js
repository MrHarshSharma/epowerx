import React, { useLayoutEffect, useState } from "react";
import {
  Box,
  Stack,
  Container,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import SingleTestimonial from "./SingleTestimonial";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import TitleComponent from "../TitleComponent";

import indiamart from "../../Images/clientLogos/indiamart.png";
import intertrust_group from "../../Images/clientLogos/intertrust_group.png";
import iquanti from "../../Images/clientLogos/iquanti.png";
import seehow from "../../Images/clientLogos/seehow.png";
import spinny from "../../Images/clientLogos/spinny.jpg";
import truckstop_ftr from "../../Images/clientLogos/truckstop_ftr.png";

function TestimonialSection() {
  const [TestimonialList, setTestimonialList] = useState([]);
  useLayoutEffect(() => {
    async function fetData() {
      const res = await fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1yBgGcCQlg6sO6Jcq0cD7mB1cRq8oykDCTcuCxpTAzRQ/values/Sheet1!A1:Z100?key=AIzaSyCSNSt1fR5ube1KmpR5WMclNBAqbusArGk"
      );
      const data = await res.json();

      let fetchedata = await data.values;

      let objs = fetchedata
        .map((data) => ({
          name: data[0],
          designation: data[1],
          feedback: data[2],
          avatarSrc: data[3],
        }))
        .filter((x, i) => i > 0);

      setTestimonialList(objs);
      console.log(objs);
    }

    fetData();
  }, []);

  return (
    <div>
      <Box className="light_bg">
        <Container maxW={"full"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"} color={"#fff"}>
            <TitleComponent heading="Our Clients Do The Talking" />
            {/* <Text color="#43ada5">We have been working with clients around the world</Text> */}
          </Stack>
          <Stack>
            <Wrap spacing="40px" justify="center" className="partnerCarousal">
              <WrapItem>
                <Center w="100px" h="100px">
                  <img src={indiamart} alt="indiamart" />
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="100px" h="100px">
                  <img src={iquanti} alt="iquanti" />
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="150px" h="100px">
                  <img src={intertrust_group} alt="intertrust_group" />
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="150px" h="100px">
                  <img src={seehow} alt="seehow" />
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="100px" h="100px" bg="blackAlpha.500">
                  <img src={spinny} alt="spinny" />
                </Center>
              </WrapItem>

              <WrapItem>
                <Center w="100px" h="100px" bg="blackAlpha.500">
                  <img src={truckstop_ftr} alt="truckstop_ftr" />
                </Center>
              </WrapItem>
            </Wrap>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <div class="container">
              <div
                class="carousel slide multi-item-carousel"
                id="TestimonialCourasal"
              >
                <div
                  class="carousel-inner row w-100 mx-0 "
                  style={{ background: "transparent" }}
                >
                  {TestimonialList.map((item, i) => {
                    return (
                      <>
                        {i === 0 ? (
                          <div key={i} class="active carousel-item col-md-4">
                            <SingleTestimonial
                              key={`${i}-feedback`}
                              data={item}
                            />
                          </div>
                        ) : (
                          <div key={i} class=" carousel-item col-md-4">
                            <SingleTestimonial
                              key={`${i}-feedback`}
                              data={item}
                            />
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
                <a
                  class="carousel-control-prev"
                  href="#TestimonialCourasal"
                  role="button"
                  data-slide="prev"
                >
                  <BiLeftArrowAlt />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#TestimonialCourasal"
                  role="button"
                  data-slide="next"
                >
                  <BiRightArrowAlt />
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default TestimonialSection;
