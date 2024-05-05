import { Box, Container, Heading, Text } from "@chakra-ui/react";
import NavBar from '../components/NavBar';

const Biography = () => {
  return (
    <Box>
      <NavBar />
      <Container maxW="container.xl" p={0}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading mb={2}>Biography</Heading>
          <Text fontSize="md">Michael Jordan, also known by his initials MJ, is a former professional basketball player and the principal owner of the Charlotte Hornets of the NBA.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Biography;