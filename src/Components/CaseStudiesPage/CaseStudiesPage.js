import React from "react";
import {
  Heading,
  Stack,
  Container,
  Box,
  Center,
  Text,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import HedgeCaseStudy from "./HedgeCaseStudy";
import TruckCaseStudy from "./TruckCaseStudy";
import SensorCaseStudy from "./SensorCaseStudy";
import BuyerCaseStudy from "./BuyerCaseStudy";
import CreditCaseStudy from "./CreditCaseStudy";
import BasketCaseStudy from "./BasketCaseStudy";
import SeoCaseStudy from "./SeoCaseStudy";
import SpamCaseStudy from "./SpamCaseStudy";
import ContactSection from "../ContactSection";
import { useColorModeValue } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import TitleComponent from "../TitleComponent";

function CaseStudiesPage() {
  return (
    <>
    
        <Container maxW={"full"} py={16} as={Stack} spacing={12} className='dark_bg'>
          <Stack spacing={0} align={"center"} color={'#fff'}>
           
           <TitleComponent heading='Case Studies'/>
          </Stack>
          <Stack
           
          >
            <div class="container">
              <div class="carousel slide multi-item-carousel" id="theCarousel">
                <div class="carousel-inner row w-100 mx-0" style={{background:'transparent'}}>
                  <div class="active carousel-item col-md-4">
                    {/* add here  */}
                    <BasketCaseStudy />
                  </div>
                  <div class="carousel-item col-md-4">
                  <BuyerCaseStudy />
                  </div>
                  <div class="carousel-item col-md-4">
                   <BasketCaseStudy />
                  </div>
                  <div class="carousel-item col-md-4">
                  <BuyerCaseStudy />
                  </div>
                  <div class="carousel-item col-md-4">
                   <BasketCaseStudy />
                  </div>
                  <div class="carousel-item col-md-4">
                  <BuyerCaseStudy />
                  </div>
                  
                </div>
                <a
                  class="carousel-control-prev"
                  href="#theCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <BiLeftArrowAlt />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#theCarousel"
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
    
      {/* <Container maxW={"7xl"} p="12" as={Stack} spacing={12}>
        <Heading as="h1">Case studies by Epowerx</Heading> */}
      {/* <HedgeCaseStudy />
        <TruckCaseStudy />
        <SensorCaseStudy />
        <BuyerCaseStudy />
        <CreditCaseStudy />
        <BasketCaseStudy />
        <SeoCaseStudy />
        <SpamCaseStudy /> */}

      {/* </Container> */}
      {/* <ContactSection /> */}
    </>
  );
}

export default CaseStudiesPage;
