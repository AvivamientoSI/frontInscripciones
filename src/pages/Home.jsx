import { useEffect } from "react";
import { useSchoolsStore } from "../store/schools.js";
import { Container, VStack, SimpleGrid, Text, Spinner } from "@chakra-ui/react";
import EsCard from "../components/esCard.jsx";
import IfComponent from "../components/ifComponent.jsx";


const Home = () => {
    
    const {fetchSchools, schools} = useSchoolsStore();
    
    useEffect(() => {
        fetchSchools();
    }, [fetchSchools]);
    
    console.log('Home', schools);
    
    return (
        <Container maxW='container.xl' py={5} mt={-5}>
            <VStack spacing={8}>
        <Text fontSize={{base: "50", sm: "60"}} fontWeight={"bold"} textAlign={"center"}>
          Escuelas Avivamiento SI
        </Text>

        <SimpleGrid columns={1} spacing={10} w={'full'}>
        {schools.map((p, index) => (
          <IfComponent key={p.id || index} school={p} index={index} />
          ))}
        </SimpleGrid>
        {schools.length === 0 && (
          <Text textAlign={"center"}>
            <Spinner thickness='4px' speed='0.5s' emptyColor='gray.200' color='blue.500' size='xl'/>
            <br />
            Cargando Escuelas
            
          </Text>
        )}
      </VStack>
        </Container>
    )
};

export default Home;
    
