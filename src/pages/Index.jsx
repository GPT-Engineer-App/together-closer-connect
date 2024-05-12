import { Box, Button, Container, Flex, Heading, IconButton, Image, Input, Link, SimpleGrid, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaCamera, FaCommentDots, FaGlobeEurope, FaHeart, FaTasks, FaVideo } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Together Closer
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Enhancing connection for couples in long-distance relationships.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
          <FeatureCard icon={FaVideo} title="Video Call and Chat" description="Stay connected with real-time video and text messaging." />
          <FeatureCard icon={FaCalendarAlt} title="Interactive Calendar" description="Sync important dates and manage events across multiple time zones." />
          <FeatureCard icon={FaCamera} title="Media Sharing" description="Share and comment on photos and videos, creating shared digital memories." />
          <FeatureCard icon={FaGlobeEurope} title="Virtual Exploration" description="Explore cities and museums together with virtual tours." />
          <FeatureCard icon={FaHeart} title="Daily Routine Sharing" description="Share daily routines and tasks, keeping each other updated." />
          <FeatureCard icon={FaTasks} title="DIY Project Space" description="Plan and track joint projects, from travel plans to home décor." />
          <FeatureCard icon={FaCommentDots} title="Task Sharing and Management" description="Create, assign, and track tasks with integrated notifications." />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  const IconComponent = icon;
  return (
    <VStack spacing={3} p={5} boxShadow="md" borderRadius="lg" align="start">
      <IconButton aria-label={title} icon={<IconComponent size="28" />} isRound={true} size="lg" variant="ghost" />
      <Text fontWeight="bold" fontSize="xl">
        {title}
      </Text>
      <Text fontSize="md">{description}</Text>
    </VStack>
  );
};

export default Index;
