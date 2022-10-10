import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image, Stack, Heading, Text, Box, Container } from "@chakra-ui/react";

function PartnersSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Box py={16}>
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>

     
        <Stack spacing={0} align={'center'}>
          <Heading>Happy To Serve</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack>

      
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
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px partnerCarousal"
       
      >
        <div>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://hm.imimg.com/imhome_gifs/indiamart-og1.jpg"
            alt="India Mart"
          />
        </div>
        <div>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtLbwtACONH7d1f2sIMuXyiAjxiW4xlkL6g&usqp=CAU"
            alt="Apple"
          />
        </div>
        <div>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCvv30-TOtOGFz07dyN_Ofnu_6SRypJDw30avikeyZv1q4IJRzqt2fHFXwHORmW2mDD4&usqp=CAU"
            alt="Truck Stop"
          />
        </div>
        <div>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://cdn3d.iconscout.com/3d/free/thumb/samsung-5728462-4781226.png"
            alt="Samsung"
          />
        </div>
        <div>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWhXU1FPJ_WU2y9QWS6Xd7zrLVM23ObzhJiEhT7uayx2zBO78W4gd-M4PK2ylxS0EZgA&usqp=CAU"
            alt="Black Code3"
          />
        </div>
        <div>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://www.logolynx.com/images/logolynx/89/89b35b53847c25dde3e6e75a57cf396c.jpeg"
            alt="Ray Ban"
          />
        </div>
      </Carousel>
      </Stack>
      </Container>
    </Box>
  );
}

export default PartnersSection;
