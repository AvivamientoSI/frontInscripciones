import { useState } from "react";
import { Container, VStack, Heading, useToast, Box, Input, Button, useColorModeValue, NumberIncrementStepper, NumberDecrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, Link  } from "@chakra-ui/react";
import { useInscriptionsStore } from "../store/inscriptions";
import {ArrowBackIcon} from "@chakra-ui/icons";

const Abc = () => {
    const[newInscription, setNewInscription] = useState({
        name:"",
        lastname:"",
        document:"",
        email:"",
        phone:""
    });
    
    const toast = useToast();

    const {createInscription} = useInscriptionsStore();

    const handleAddInscription = async () => {
        const {success, message} = await createInscription(newInscription);
        if(!success) {
            toast({
                title:"Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true
            })
        } else {
            toast({
                title:"Success",
                description: message,
                status: "success",
                duration: 5000,
                isClosable: true
            })
            
            setNewInscription({name:"",
                lastname:"",
                document:"",
                email:"",
                phone:""})
        }
    }
    return (
        <Container maxW={"container.sm"}>
    <VStack spacing={8}>
        
        <Heading as={"h1"} textAlign={"center"} mb={8} size={'2xl'}>
            Inscripción a la Escuela ABC
        </Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
            <VStack spacing={4}>
            <Text textAlign={"left"} w={"full"}>Nombre</Text>
                <Input placeholder="Nombre"
                name="name"
                value={newInscription.name} // permite guardar el valor en el estado y poder reutilizarlo
                onChange={(e) => setNewInscription({...newInscription, name: e.target.value})} // e = evento ; actualiza el valor "name"
                />
                <Text textAlign={"left"} w={"full"}>Apellido</Text>
                <Input placeholder="Apellido"
                name="lastname"
                value={newInscription.lastname} 
                onChange={(e) => setNewInscription({...newInscription, lastname: e.target.value})}
                />
                <Text textAlign={"left"} w={"full"}>Documento o DNI</Text>
                <NumberInput w={'full'} value={newInscription.document} onChange={(value) => setNewInscription({...newInscription, document: Number(value) })}>
                    <NumberInputField placeholder="Documento de Identidad" name="document"/>
                </NumberInput>
                <Text textAlign={"left"} w={"full"}>Email</Text>
                <Input placeholder="Correo Electrónico"
                name="email"
                value={newInscription.email} 
                onChange={(e) => setNewInscription({...newInscription, email: e.target.value})}
                />
                <Text textAlign={"left"} w={"full"}>Número de Celular (Con WhatsApp)</Text>
                <NumberInput w={'full'} value={newInscription.phone} onChange={(value) => setNewInscription({...newInscription, phone: Number(value)})}>
                    <NumberInputField placeholder="Celular" name="phone"/>
                </NumberInput>

                <Button colorScheme="blue" onClick={handleAddInscription} w='full'>
                    Inscribirme
                </Button>
            </VStack>
        </Box>
            <Link href="/">
                <Button leftIcon={<ArrowBackIcon/>} mb={5}>Volver</Button>
            </Link>
            
    </VStack>
  </Container>
    )
};

export default Abc;
    