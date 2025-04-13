import { Tr, Td, HStack, IconButton, useToast} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRegistrationStore } from '../store/registration.js';

export const RegTable = ({registrations, index, onEdit}) => {  
    const {deleteRegistration} = useRegistrationStore();
    const toast = useToast();

    const handleEdit = () => {
        onEdit();

    };
    
    const handleDeleteRegistration = async (_id) => {
        const {success, message} = await deleteRegistration(_id);
        if (!success) {
            toast({title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				description: message,
				status: "success",
				duration: 3000,
				isClosable: true,
			});
        }
        
    };
    return (
            <Tr>
                <Td>{index}</Td>
                <Td>{registrations.name.toUpperCase()}</Td>
                <Td textAlign={"center"}>{registrations.lastname.toUpperCase()}</Td>
                <Td isNumeric>{registrations.phone}</Td>
                <Td>
                    <HStack alignItems={"center"} justifyContent={"center"} spacing={4}>
                        <IconButton icon={<EditIcon/>} onClick={handleEdit}
                        colorScheme="blue" />
                        <IconButton icon={<DeleteIcon/>} onClick={() => handleDeleteRegistration(registrations._id)}
                        colorScheme="red" />
                    </HStack>
                </Td>
            </Tr>
    )
};