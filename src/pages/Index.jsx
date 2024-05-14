import { Button, Container, VStack } from "@chakra-ui/react";
import { useState } from "react";

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
  const [chartData, setChartData] = useState(data);

  const addNode = () => {
    const newNode = { id: (chartData.nodes.length + 1).toString(), group: 1 };
    const newLink = { source: chartData.nodes[chartData.nodes.length - 1].id, target: newNode.id, value: 1 };
    setChartData({
      nodes: [...chartData.nodes, newNode],
      links: [...chartData.links, newLink]
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        
        <Button onClick={addNode} colorScheme="teal" size="md">Add Node</Button>
        <D3Chart data={chartData} />
      </VStack>
    </Container>
  );
};

export default Index;