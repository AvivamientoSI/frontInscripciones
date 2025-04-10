import { Tr, Td, Box, HStack, IconButton, Select, NumberInput, NumberInputField, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Input, ModalFooter, Button, Link } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
//import { useState } from 'react';

export const RegTable = ({registrations, index}) => {
    
/*     const [updateRegistration, setUpdateRegistration] = useState(registrations);
    
    const toast = useToast();
    
    const { isOpen, onClose } = useDisclosure() */


    /* const handleUpdateRegistration = async (id, updateRegistration) => {
        const {success, message} = await updateRegistration(id, updateRegistration);
        onClose();
        if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Registro actualizado correctamente",
				status: "success",
				duration: 3000,
				isClosable: false,
			});
		}
    } */
    return (
            <Tr>
                <Td>{index}</Td>
                <Td>{registrations.name}</Td>
                <Td textAlign={"center"}>{registrations.lastname}</Td>
                <Td isNumeric>{registrations.phone}</Td>
                <Td>
                    <HStack alignItems={"center"} justifyContent={"center"} spacing={4}>
                        <IconButton icon={<EditIcon/>}
                        colorScheme="blue" />
                        <IconButton icon={<DeleteIcon/>}
                        colorScheme="red" />
                    </HStack>
                </Td>
            </Tr>
    )
};