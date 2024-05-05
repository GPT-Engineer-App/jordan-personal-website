import { Box, Container, Heading, Text } from "@chakra-ui/react";
import NavBar from '../components/NavBar';

const Career = () => {
  return (
    <Box>
      <NavBar />
      <Container maxW="container.xl" p={0}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading mb={2}>Career Highlights</Heading>
          <Text fontSize="md">Michael Jordan's career highlights include 6 NBA championships, 5 MVP awards, and 14 All-Star game appearances.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Career;