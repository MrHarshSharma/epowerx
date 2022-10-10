import React from 'react'
import { Stack, Text, Box, Container } from "@chakra-ui/react";
import { Button, useColorModeValue } from '@chakra-ui/react';

function PagenotfoundSection() {
   
  return (
    <Box py={16}>
    <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
    <Stack spacing={0} align={'center'}>
        <Text fontSize='40px'>404</Text>
        <Text fontSize='30px'>The Page you are looking for is not present currently</Text>
    </Stack>
    <Stack align={'center'}>
      <Button
       
        px={8}
        bg={useColorModeValue('gray.100', 'gray.700')}
        color={'black'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
       
        >
        Go Back
      </Button>
   
    </Stack>
    </Container>
    </Box>
  )
}

export default PagenotfoundSection