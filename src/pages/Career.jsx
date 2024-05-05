import { Box, Container, Heading, Text, Link } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">Michael Jordan</Heading>
          <Flex as="nav">
            <Link to="/" style={{ margin: '0 12px', color: 'white' }}>Home</Link>
            <Link to="/biography" style={{ margin: '0 12px', color: 'white' }}>Biography</Link>
            <Link to="/gallery" style={{ margin: '0 12px', color: 'white' }}>Gallery</Link>
          </Flex>
        </Flex>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading mb={2}>Career Highlights</Heading>
        <Text fontSize="md">Michael Jordan's career highlights include 6 NBA championships, 5 MVP awards, and 14 All-Star game appearances.</Text>
      </Box>
    </Container>
  );
};

export default Career;