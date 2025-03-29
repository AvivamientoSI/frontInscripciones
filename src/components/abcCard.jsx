
import { Box, Heading, Text, Link, Image, HStack, IconButton, Modal, useColorModeValue, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {Tr, Td, Checkbox, CheckboxGroup} from '@chakra-ui/react';



export const AbcCard = ({school}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bg = useColorModeValue("white", "gray.800");
    return (
        <Box bg={bg} shadow='lg' rounded='lg' overflow='hidden' transition='all 0.3s' _hover={{transform:"translateY(-5px)", shadow: "xl"}}>
        
        <Image src={school.image} alt={school.name} h={'280px'} w={'1280px'} objectFit='cover' />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2} textTransform={"uppercase"}>
                El {school.name} del Evangélio 
            </Heading>
            <Text  fontSize='lg' mb={4} opacity={0.7}>
                {school.info}
            </Text>
            <HStack spacing={2}>
                <Button onClick={onOpen} colorScheme="blue">Mas Informacion</Button>
                <Link href='/inscriptions/ABC'>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>Inscribirse</Button>
                </Link>
            </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
                <ModalContent>
                <ModalHeader fontWeight='bold' fontSize={"2xl"}>El {school.name} del Evangélio</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text fontSize='xl' textDecoration={"underline"} mb={2} >
                        ¿De qué trata esta escuela?
                    </Text>
                    <Text fontSize='lg' mb={5}>
                        En esta escuela aprenderemos a dar los primeros pasos en el Evangélio
                    </Text>
                    <Text fontSize='xl' textDecoration={"underline"} mb={2} >
                        ¿Para quién está dirigida?
                    </Text>
                    <Text fontSize='lg'>
                        Para todos aquellos que llegan a Cristo y quieren empezar a conocer a Dios y agradarle
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Link href='/inscriptions/ABC'>
                        <Button colorScheme='blue' mr={3}>
                        Inscribirse
                        </Button>
                    </Link>
                    <Button variant='ghost' onClick={onClose}>Cerrar</Button>
                </ModalFooter>
                </ModalContent>
        </Modal>
    </Box>
    )
};

export const AbcCardTable = ({school}) => {
    const bg = useColorModeValue("white", "gray.800");
    const txt =  useColorModeValue("gray.800", "white"); 
    return (
        <Box h={'400px'} bg={bg} shadow='lg' rounded='lg' overflow='hidden' transition='all 0.3s' _hover={{transform:"translateY(-5px)", shadow: "xl"}}>
        <Link href='/table/abc'>
        
        <Image src={school.image} alt={school.name} h={'280px'} w={'full'} objectFit='cover' />

        <Box p={4} textAlign={'center'}>
            <Heading as='h3' size='md' textTransform={"uppercase"} color={txt}>
                El {school.name} del Evangélio 
            </Heading>
            <HStack spacing={2}>
                <Link href='/table/abc'>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='ghost' mt={6}>Ir a la Planilla</Button>
                </Link>
            </HStack>
        </Box>
        </Link>
    </Box>
    )
};

export const AbcCardTableInfo = ({inscriptions, index}) => {
    return (
        <Tr>
            <Td>{index}</Td>
            <Td>{inscriptions.name}</Td>
            <Td>{inscriptions.lastname}</Td>
            {/* <Td isNumeric>{inscriptions.phone}</Td> */}
            <Td><Checkbox colorScheme='green'>Presente</Checkbox></Td>
        </Tr>
    )
};
