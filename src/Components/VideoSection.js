import React from "react";
import {
  Container,
  Stack,

  Heading,
  Text,
  Icon,
 
} from "@chakra-ui/react";
import invoice from "../videos/invoice.mp4";
import maskAi from "../videos/MaskAI.mp4";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import TitleComponent from "./TitleComponent";
function VideoSection() {
  return (
    <Container maxW={"full"} py={16} color={'#fff'} as={Stack} spacing={12} className='light_bg'>
      <Stack spacing={5} align={"center"}>
      
            <TitleComponent heading='Product Videos'/>
      </Stack>
      <Stack>
        <div id="VideoCourasal" class="carousel slide" data-ride="carousel" data-interval="false">
        <Stack
        align={'start'}
        spacing={{ base: 8, md: 10 }}
        // py={{ base: 8, md: 8 }}
        direction={{ base: 'column', md: 'row' }}>
             <Stack flex={1} spacing={{ base: 5, md: 10 }} className='PlayList'>
              <ol class="carousel-indicators">
                <li
                  data-target="#VideoCourasal"
                  data-slide-to="0"
                  className="active"
                >
                  <span>Invoice: This a description line that is added here</span>
                </li>
                <li data-target="#VideoCourasal" data-slide-to="1">
                  <span>Mask: This a description line that is added here</span>
                </li>
                <li data-target="#VideoCourasal" data-slide-to="2">
                  <span>Mask 1: This a description line that is added here</span>
                </li>
                <li data-target="#VideoCourasal" data-slide-to="3">
                  <span>Mask again: This a description line that is added here</span>
                </li><li data-target="#VideoCourasal" data-slide-to="3">
                  <span>Mask again: This a description line that is added here</span>
                </li><li data-target="#VideoCourasal" data-slide-to="3">
                  <span>Mask again: This a description line that is added here</span>
                </li>
                
              </ol>
            </Stack>
            <Stack flex={2} spacing={{ base: 5, md: 10 }} className="Player">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="VideoContainer">
                    <video controls>
                      <source src={invoice}></source>
                    </video>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="VideoContainer">
                    <video controls>
                      <source src={maskAi}></source>
                    </video>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div className="VideoContainer">
                    <video controls>
                      <source src={invoice}></source>
                    </video>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="VideoContainer">
                    <video controls>
                      <source src={maskAi}></source>
                    </video>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#VideoCourasal"
                role="button"
                data-slide="prev"
              >
                <BiLeftArrowAlt />

                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#VideoCourasal"
                role="button"
                data-slide="next"
              >
                <BiRightArrowAlt />
                <span class="sr-only">Next</span>
              </a>
            </Stack>
          </Stack>
        </div>
      </Stack>
     
    </Container>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default VideoSection;
