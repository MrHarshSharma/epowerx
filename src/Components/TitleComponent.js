import React from 'react'
import {
  
   
    Heading,
    Text,
   
  } from '@chakra-ui/react';
function TitleComponent({heading}) {
  return (
    <>
        <Heading className='CustomHeading'> <Text
              as={'span'}
              position={'relative'}
             >
             {heading}
            </Text></Heading>
    </>

  )
}

export default TitleComponent