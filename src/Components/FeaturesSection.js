import React from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex, useColorModeValue, Heading, Container } from "@chakra-ui/react";
import { FcWorkflow, FcParallelTasks, FcMindMap, FcLineChart } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

function FeaturesSection() {
  return (
    <div>


    <Box p={4} bg={useColorModeValue('gray.100', 'gray.700')} className="primary_bg">
    <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Thinks We Have Done</Heading>
          {/* <Text>We have been working with clients around the world</Text> */}
        </Stack>
        <Stack>

       
      <SimpleGrid columns={{ base: 1, md: 2, lg:4 }} spacing={10}>
        <Feature
          icon={<Icon as={FcWorkflow} w={10} h={10} />}
          title={  "Build model on diverse data"}
          // text={
          //   "Build model on diverse data"
          // }
        />
        <Feature
          icon={<Icon as={FcParallelTasks} w={10} h={10} />}
          title={"Develop ML pipelines"}
          // text={
          //   "Develop ML pipelines"
          // }
        />
        <Feature
          icon={<Icon as={FcMindMap} w={10} h={10} />}
          title={ "Train a team and replace us with a head"}
          // text={
          //   "Train a team and replace us with a head"
          // }
        />
        <Feature
          icon={<Icon as={FcLineChart} w={10} h={10} />}
          title={"Put pipline in production"}
          // text={
          //   "Put pipline in production"
          // }
        />
      </SimpleGrid>
      </Stack>
      </Container>
    </Box>
    </div>
  );
}

export default FeaturesSection;
