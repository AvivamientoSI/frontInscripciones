
import { Box, Heading, Text, Link, Image, HStack, useColorModeValue, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, ArrowForwardIcon } from '@chakra-ui/icons';


const DisCard = ({school}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bg = useColorModeValue("white", "gray.800");
    return (
        <Box bg={bg} shadow='lg' rounded='lg' overflow='hidden' transition='all 0.3s' _hover={{transform:"translateY(-5px)", shadow: "xl"}}>
        
        <Image src={school.image} alt={school.name} h={'280px'} w={'1280px'} objectFit='cover' />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2} textTransform={"uppercase"}>
                {school.name}
            </Heading>
            <Text fontSize='lg' mb={4} opacity={0.7}>
                {school.info}
            </Text>
            <HStack spacing={2}>
                <Button onClick={onOpen} colorScheme="blue">Mas Informacion</Button>
                <Link href='/inscriptions/Discipulado'>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>Inscribirse</Button>
                </Link>
            </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
                <ModalContent>
                <ModalHeader fontWeight='bold' fontSize={"2xl"}>{school.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text fontSize='xl' textDecoration={"underline"} mb={2} >
                        ¿De qué trata esta escuela?
                    </Text>
                    <Text fontSize='lg' mb={5}>
                        Esta escuela trata sobre aprender a caminar con Jesús a través de Sus enseañanzas y sobre cómo seguirle convirtiéndonos en sus discipulos
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Link href='/inscriptions/Discipulado'>
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

export default DisCard