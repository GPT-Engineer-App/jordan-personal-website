import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">Michael Jordan</Heading>
          <Flex as="nav">
            <Link to="/" style={{ margin: '0 12px', color: 'white' }}>Home</Link>
            <Link to="/biography" style={{ margin: '0 12px', color: 'white' }}>Biography</Link>
            <Link to="/career" style={{ margin: '0 12px', color: 'white' }}>Career</Link>
          </Flex>
        </Flex>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading mb={2}>Gallery</Heading>
        <Flex>
          <Image src="/images/mj1.jpg" boxSize="150px" m={1} />
          <Image src="/images/mj2.jpg" boxSize="150px" m={1} />
          <Image src="/images/mj3.jpg" boxSize="150px" m={1} />
        </Flex>
      </Box>
    </Container>
  );
};

export default Gallery;