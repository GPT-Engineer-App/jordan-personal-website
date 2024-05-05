import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaBasketballBall } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">Michael Jordan</Heading>
          <Flex as="nav">
            <Text mx={2}>Biography</Text>
            <Text mx={2}>Career</Text>
            <Text mx={2}>Gallery</Text>
          </Flex>
        </Flex>
      </Box>
      <Box as="section" height="70vh" bgImage="url('/images/michael-jordan-hero.jpg')" bgPos="center" bgSize="cover" display="flex" alignItems="center" justifyContent="center">
        <Heading as="h2" size="2xl" bg="rgba(0,0,0,0.5)" color="white" p={4}>The Legend</Heading>
      </Box>
      <VStack spacing={8} my={8} px={8}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading mb={2}>Biography</Heading>
          <Text fontSize="md">Michael Jordan, also known by his initials MJ, is a former professional basketball player and the principal owner of the Charlotte Hornets of the NBA.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading mb={2}>Career Highlights</Heading>
          <Text fontSize="md">Michael Jordan's career highlights include 6 NBA championships, 5 MVP awards, and 14 All-Star game appearances.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading mb={2}>Gallery</Heading>
          <Flex>
            <Image src="/images/mj1.jpg" boxSize="150px" m={1} />
            <Image src="/images/mj2.jpg" boxSize="150px" m={1} />
            <Image src="/images/mj3.jpg" boxSize="150px" m={1} />
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;