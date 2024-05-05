import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaBasketballBall } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">Michael Jordan</Heading>
          <Flex as="nav">
            <Link to="/biography" style={{ margin: '0 12px', color: 'white' }}>Biography</Link>
            <Link to="/career" style={{ margin: '0 12px', color: 'white' }}>Career</Link>
            <Link to="/gallery" style={{ margin: '0 12px', color: 'white' }}>Gallery</Link>
          </Flex>
        </Flex>
      </Box>
      <Box as="section" height="70vh" bgImage="url('/images/michael-jordan-hero.jpg')" bgPos="center" bgSize="cover" display="flex" alignItems="center" justifyContent="center">
        <Heading as="h2" size="2xl" bg="rgba(0,0,0,0.5)" color="white" p={4}>The Legend</Heading>
      </Box>
      <VStack spacing={8} my={8} px={8}>
        <Text fontSize="xl" textAlign="center">Explore the life and legacy of Michael Jordan through his Biography, Career Highlights, and Gallery.</Text>
      </VStack>
    </Container>
  );
};

export default Index;