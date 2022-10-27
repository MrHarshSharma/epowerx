import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image, Stack, Heading, Text, Box, Container } from "@chakra-ui/react";

import indiamart from "./../Images/clientLogos/indiamart.png"
import intertrust_group from "./../Images/clientLogos/intertrust_group.png"
import iquanti from "./../Images/clientLogos/iquanti.png"
import seehow from "./../Images/clientLogos/seehow.png"
import spinny from "./../Images/clientLogos/spinny.jpg"
import truckstop_ftr from "./../Images/clientLogos/truckstop_ftr.png"

function PartnersSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
 

      
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        //   customTransition="all 5"
        transitionDuration={30}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px partnerCarousal"
       
      >
        <div>
          <Image
            boxSize="100px"
            objectFit="contain"
            src={indiamart}
            alt="indiamart"
          />
        </div>
        <div>
          <Image
            boxSize="150px"
            objectFit="contain"
            src={intertrust_group}
            alt="intertrust_group"
          />
        </div>
        <div>
          <Image
            boxSize="100px"
            objectFit="contain"
            src={iquanti}
            alt="iquanti"
          />
        </div>
        <div>
          <Image
            boxSize="150px"
            objectFit="contain"
            src={seehow}
            alt="seehow"
          />
        </div>
        <div>
          <Image
            boxSize="100px"
            objectFit="contain"
            src={spinny}
            alt="spinny"
          />
        </div>
        <div>
          <Image
            boxSize="100px"
            objectFit="contain"
            src={truckstop_ftr}
            alt="truckstop_ftr"
          />
        </div>
      </Carousel>
   
  );
}

export default PartnersSection;
