import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Biography = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">Michael Jordan</Heading>
          <Flex as="nav">
            <Link to="/" style={{ margin: '0 12px', color: 'white' }}>Home</Link>
            <Link to="/career" style={{ margin: '0 12px', color: 'white' }}>Career</Link>
            <Link to="/gallery" style={{ margin: '0 12px', color: 'white' }}>Gallery</Link>
          </Flex>
        </Flex>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading mb={2}>Biography</Heading>
        <Text fontSize="md">Michael Jordan, also known by his initials MJ, is a former professional basketball player and the principal owner of the Charlotte Hornets of the NBA.</Text>
      </Box>
    </Container>
  );
};

export default Biography;