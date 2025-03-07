
import { Box, Heading, Text, Link, Image, HStack, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, ArrowForwardIcon } from '@chakra-ui/icons';


const EsCard = ({school}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box shadow='lg' rounded='lg' overflow='hidden' transition='all 0.3s' _hover={{transform:"translateY(-5px)", shadow: "xl"}}>
        
        <Image src={school.image} alt={school.name} h={'280px'} w={'1280px'} objectFit='cover' />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {school.name}
            </Heading>
            <Text fontWeight='bold' fontSize='xl' mb={4}>
                {school.info}
            </Text>
            <HStack spacing={2}>
                <Button onClick={onOpen} colorScheme="blue">Mas Informacion</Button>
                <Link href='/inscriptions/Escuela-de-Vida'>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>Inscribirse</Button>
                </Link>
            </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
                <ModalContent>
                <ModalHeader>Info Escuela</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <h1>info</h1>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                    Inscribirse
                    </Button>
                    <Button variant='ghost' onClick={onClose}>Cerrar</Button>
                </ModalFooter>
                </ModalContent>
        </Modal>
    </Box>
    )
};

export default EsCard