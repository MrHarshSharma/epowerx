import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import NavbarSection from './NavbarSection';

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function HeroSection() {
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Design Projects 1',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    // {
    //   title: 'Design Projects 2',
    //   text:
    //     "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image:
    //     'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    // },
    // {
    //   title: 'Design Projects 3',
    //   text:
    //     "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image:
    //     'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    // },
  ];

  return (
    <Box
      position={'relative'}
      height={'100%'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      {/* <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt color={'#fcca64'} size="40px" />
      </IconButton> */}


      {/* Right Icon */}
      {/* <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt color={'#fcca64'} size="40px" />
      </IconButton> */}

      
      {/* Slider */}
   
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
       
        {cards.map((card, index) => (
          
          <Box
            key={index}
            // height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url('https://static.wixstatic.com/media/5c8aaf_928409cd7d544721916db35a02f01c38~mv2.gif')`}
          
            // background={`linear-gradient(to bottom, rgb(255 255 255 / 0%) 0%, #ffffff 50%), url('https://static.wixstatic.com/media/5c8aaf_928409cd7d544721916db35a02f01c38~mv2.gif')`}
            >
            {/* This is the block you need to change, to customize the caption */}
            <NavbarSection />
            <Container size="container.lg" height="600px" position="relative" className='bannerContent' >
              <Stack
              style={{top:'30%'}}
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                color={"#fff"}
                transform="translate(0, -50%)">
                <Heading className='CustomHeading' fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
       ))} 
      </Slider>
    </Box>
  );
}

export default HeroSection;
