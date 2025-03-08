import { useEffect } from "react";
import { useSchoolsStore } from "../store/schools.js";
import { Container, VStack, SimpleGrid, Text } from "@chakra-ui/react";
import EsCard from "../components/esCard.jsx";
import IfComponent from "../components/ifComponent.jsx";


const Home = () => {
    
    const {fetchSchools, schools} = useSchoolsStore();
    
    useEffect(() => {
        fetchSchools();
    }, [fetchSchools]);
    
    console.log('Home', schools);
    
    return (
        <Container maxW='container.xl' py={12}>
            <VStack spacing={8}>
        <Text fontSize={"60"} fontWeight={"bold"} textAlign={"center"}>
          Escuelas Avivamiento SI
        </Text>

        <SimpleGrid columns={1} spacing={10} w={'full'}>
        {schools.map((p, index) => (
          <IfComponent key={p.id || index} school={p} index={index} />
          ))}
        </SimpleGrid>
      </VStack>
        </Container>
    )
};

export default Home;
    