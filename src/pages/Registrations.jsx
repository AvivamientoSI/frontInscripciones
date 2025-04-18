import { useRegistrationStore } from "../store/registration";
import { useState, useEffect } from "react";
import { Container, VStack, Heading, TableContainer, useDisclosure, Table, Select, Divider, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, useToast, Box, Input, Button, useColorModeValue, NumberInput, NumberInputField, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter} from "@chakra-ui/react";
import { RegTable } from "../components/regTable";

const Registrations = () => {
    const[newRegistration, setNewRegistration] = useState({
            name:"",
            lastname:"",
            document:"",
            sex:"",
            address:"",
            phone:"",
            age:"",
            church:""
        });
        const {createRegistration, fetchRegistrations, updateRegistration, registrations} = useRegistrationStore();
        const toast = useToast();
        
        const { isOpen, onClose, onOpen } = useDisclosure()

        const [updatedRegistration, setUpdatedRegistration] = useState(registrations);
        
        useEffect(() => {
            fetchRegistrations();
            }, [fetchRegistrations]);

            const handleEditClick = (registrations) => {
                setUpdatedRegistration(registrations); // Cargás los datos al estado
                if (!registrations._id) {
                    console.error("ID no disponible en el registro.");
                }
                onOpen(); // Abrís el modal
            };

    
        const handleAddRegistration = async () => {
            const {success, message} = await createRegistration(newRegistration);
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
                    description: message,
                    status: "success",
                    duration: 5000,
                    isClosable: true
                })
                
                setNewRegistration({
                    name:"",
                    lastname:"",
                    document:"",
                    sex:"",
                    address:"",
                    phone:"",
                    age:"",
                    church:""
                })
            }
        }

        const formatDate = (dateString) => {
            return new Date(dateString).toISOString().split("T")[0];
          };
        
        
        const handleUpdateRegistration = async (_id, updatedRegistration) => {
            
            if (!_id) {
                console.error("ID no proporcionado");
                return; // Evita hacer la solicitud si el ID no está presente
              }           
            
        const {success, message} = await updateRegistration(_id, updatedRegistration);
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
                    description: "Actualizado correctamente",
                    status: "success",
                    duration: 3000,
                    isClosable: false,
                });
            }
            onClose(); // Cierra el modal después de la actualización
        }
    return (
        <Container maxW={"container.xl"}>
            <VStack spacing={8}>
                <Heading as={"h1"} textAlign={"center"} mb={8} size={'2xl'}>
                    Planilla de Mesa de Entrada
                </Heading>
                <Box w={"2xl"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
                    <VStack spacing={4}>
                    <Text textAlign={"left"} w={"full"}>Nombre</Text>
                        <Input placeholder="Nombre"
                        name="name"
                        value={newRegistration.name} // permite guardar el valor en el estado y poder reutilizarlo
                        onChange={(e) => setNewRegistration({...newRegistration, name: e.target.value})} // e = evento ; actualiza el valor "name"
                        />
                        <Text textAlign={"left"} w={"full"}>Apellido</Text>
                        <Input placeholder="Apellido"
                        name="lastname"
                        value={newRegistration.lastname} 
                        onChange={(e) => setNewRegistration({...newRegistration, lastname: e.target.value})}
                        />
                        <Text textAlign={"left"} w={"full"}>Documento</Text>
                        <NumberInput w={'full'} value={newRegistration.document} onChange={(value) => setNewRegistration({...newRegistration, document: Number(value) })}>
                            <NumberInputField placeholder="Documento de Identidad" name="document"/>
                        </NumberInput>
                        <Text textAlign={"left"} w={"full"}>Sexo</Text>
                        <Select placeholder='Selecciona una Opción' value={newRegistration.sex} 
                        onChange={(e) => setNewRegistration({...newRegistration, sex: e.target.value})}>
                            <option value='Masculino'>Masculino</option>
                            <option value='Femenino'>Femenino</option>
                        </Select>
                        <Text textAlign={"left"} w={"full"}>Domicilio</Text>
                        <Input placeholder="Domicilio"
                        name="address"
                        value={newRegistration.address} 
                        onChange={(e) => setNewRegistration({...newRegistration, address: e.target.value})}
                        />
                        <Text textAlign={"left"} w={"full"}>Número de Celular</Text>
                        <NumberInput w={'full'} value={newRegistration.phone} onChange={(value) => setNewRegistration({...newRegistration, phone: Number(value)})}>
                            <NumberInputField placeholder="1123456789" name="phone"/>
                        </NumberInput>
                        <Text textAlign={"left"} w={"full"}>Fecha de Nacimiento</Text>
                        <Input type="date" name="age" value={newRegistration.age} onChange={(e) => setNewRegistration({...newRegistration, age: e.target.value})} ></Input>
                        <Text textAlign={"left"} w={"full"}>Se Congrega</Text>
                        <Select placeholder='Selecciona una Opción' value={newRegistration.church} 
                        onChange={(e) => setNewRegistration({...newRegistration, church: e.target.value})}>
                            <option value='Se congrega'>Si</option>
                            <option value='No se congrega'>No</option>
                        </Select>
                        
        
                        <Button colorScheme="blue" onClick={handleAddRegistration} w='full'>
                            Registrar
                        </Button>
                    </VStack>
                </Box>
            </VStack>
            <Box h="10" />
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th fontSize={"md"}>#</Th>
                            <Th fontSize={"md"}>Nombre</Th>
                            <Th textAlign={"center"} fontSize={"md"} >Apellido</Th>
                            <Th textAlign={"center"} isNumeric fontSize={"md"}>Celular</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Array.isArray(registrations) ? (registrations.map ((p, index) => (
                                                <RegTable key={p._id} registrations={p} index={index+1} onEdit={() => handleEditClick(p)} />
                                            ))
                                        ) : (
                                            <Tr>
                                                <Td colSpan={3} textAlign="center">No hay datos disponibles</Td>
                                            </Tr>
                                        )
                                    }
                    </Tbody>
                </Table>
            </TableContainer>
            <Box h="10" />
            <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
                <ModalContent>
                <ModalHeader>Actualizar Registro</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4}>
                        <Input placeholder="Nombre" name="name" 
                        value={updatedRegistration.name}
                        onChange={(e) => setUpdatedRegistration({ ...updatedRegistration, name: e.target.value })}
                        />            
                        <Input placeholder="Apellido" name="lastname" 
                        value={updatedRegistration.lastname}
                        onChange={(e) => setUpdatedRegistration({ ...updatedRegistration, lastname: e.target.value })}
                        />
                        <NumberInput w={'full'}
                        value={updatedRegistration.document || ""}
                        onChange={(value) => setUpdatedRegistration({ ...updatedRegistration, document: Number(value) })} >
                            <NumberInputField placeholder="Documento de Identidad" name="document"/>
                        </NumberInput>
                        <Select value={updatedRegistration.sex || ""} 
                        onChange={(e) => setUpdatedRegistration({...updatedRegistration, sex: e.target.value})}>
                            <option value="" disabled hidden>Selecciona una Opción</option>
                            <option value='Masculino'>Masculino</option>
                            <option value='Femenino'>Femenino</option>
                        </Select>
                        <Input name="address" placeholder="Domicilio"
                        value={updatedRegistration.address || ""}
                        onChange={(e) => setUpdatedRegistration({ ...updatedRegistration, address: e.target.value })}
                        />
                        <NumberInput w={'full'}
                        value={updatedRegistration.phone || ""}
                        onChange={(value) => setUpdatedRegistration({ ...updatedRegistration, phone: Number(value) })} >
                            <NumberInputField placeholder="1123456789" name="phone"/>
                        </NumberInput>
                        <Input placeholder="Fecha de Nacimiento" name="age" type="date"
                        value={updatedRegistration.age ? formatDate(updatedRegistration.age) : ""}
                        onChange={(e) => setUpdatedRegistration({ ...updatedRegistration, age: e.target.value })}
                        />
                        <Select value={updatedRegistration.church || ""} 
                        onChange={(e) => setUpdatedRegistration({...updatedRegistration, church: e.target.value})}>
                            <option value="" disabled hidden>Selecciona una Opción</option>
                            <option value='Se congrega'>Si</option>
                            <option value='No se congrega'>No</option>
                        </Select>
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} 
                    onClick={() => {handleUpdateRegistration(updatedRegistration._id, updatedRegistration)}}
                    >                        
                    Update
                    </Button>
                    <Button variant='ghost' onClick={onClose}>Cancel</Button>
                </ModalFooter>
                </ModalContent>
        </Modal>
          </Container>
    );
};

export default Registrations;