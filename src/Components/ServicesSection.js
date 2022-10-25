import React from 'react'
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';

  import {
    IoBulb,
    IoBuild,
    IoCog,
    IoTv
  } from 'react-icons/io5';
import TitleComponent from './TitleComponent';
 
 
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };

function ServicesSection() {
  return (
  <>
    <Container maxW={'full'} pt={8} py={16} px={16} color={'#fff'}  className='light_bg'>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={''}
            color="#fff"
            fontWeight={600}
            fontSize={'sm'}
            className='dark_bg'
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Way Of Work
          </Text>
          <TitleComponent heading='How We Iterate' />
          {/* <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text> */}
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={IoBulb} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Problem Formulation'}
            />
            <Feature
              icon={<Icon as={IoBuild} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Model Building'}
            />
            <Feature
              icon={
                <Icon as={IoCog} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Deployment'}
            />
             <Feature
              icon={
                <Icon as={IoTv} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Monitoring'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
            className='iterateImage'
          />
        </Flex>
      </SimpleGrid>
    </Container>
  </>
  )
}

export default ServicesSection