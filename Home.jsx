import { Box, Heading, Text, Button } from "@chakra-ui/react";
import PricingTable from "../components/PricingTable";
import Transc from "../components/Transc";
import Alerts from "../components/Alerts";
import GlitchAlert from "../components/GlitchAlert";


const Home = () => {
  return (
    <Box py={20} textAlign="center" bg="gray.200">
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to our Business
      </Heading>
      <Text fontSize="xl" mb={8}>
        We offer high-quality services and products to our clients.
      </Text>
      <Button colorScheme="blue" size="lg">
        Get Started
      </Button>
      <PricingTable/>
      <Transc/>
      <Alerts/>

      <GlitchAlert />
      

    </Box>
  );
};

export default Home;
