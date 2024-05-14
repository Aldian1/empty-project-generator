// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack } from "@chakra-ui/react";

import D3Chart from "../components/D3Chart";

const data = {
  nodes: [
    { id: "1", group: 1 },
    { id: "2", group: 1 },
    { id: "3", group: 2 },
    { id: "4", group: 2 },
    { id: "5", group: 3 },
    { id: "6", group: 3 }
  ],
  links: [
    { source: "1", target: "2", value: 1 },
    { source: "2", target: "3", value: 1 },
    { source: "3", target: "4", value: 1 },
    { source: "4", target: "5", value: 1 },
    { source: "5", target: "6", value: 1 }
  ]
};

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <D3Chart data={data} />
      </VStack>
    </Container>
  );
};

export default Index;
