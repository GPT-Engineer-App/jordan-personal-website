import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Container maxW="container.xl" p={0}>
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