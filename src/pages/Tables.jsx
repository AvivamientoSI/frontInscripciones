import { useEffect } from "react";
import { useSchoolsStore } from "../store/schools.js";
import { useInscriptionsStore } from "../store/inscriptions.js";
import { Container, VStack, SimpleGrid, Text, Spinner } from "@chakra-ui/react";
import { IfComponentTable } from "../components/ifComponent.jsx";
import { Table, Thead, Tbody, Button, Tr, Th, Td, Link, TableContainer, useColorModeValue } from '@chakra-ui/react';
import { AbcCardTableInfo } from "../components/abcCard.jsx"
import { DisCardTableInfo } from "../components/disCard.jsx";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { EsCardTableInfo } from "../components/esCard.jsx";

const Tables = () => {
    const { fetchSchools, schools } = useSchoolsStore();

    useEffect(() => {
        fetchSchools();
    }, [fetchSchools]);

    return (
        <Container maxW='container.xl' py={5} mt={-5} mb={50}>
            <VStack spacing={8}>
                <Text fontSize={{ base: "50", sm: "60" }} fontWeight={"bold"} textAlign={"center"}>
                    Planillas de Inscriptos
                </Text>

                <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={10} w={'full'}>
                    {schools.map((p, index) => (
                        <IfComponentTable key={p.id || index} school={p} index={index} />
                    ))}
                </SimpleGrid>
                {schools.length === 0 && (
                    <Text textAlign={"center"}>
                        <Spinner thickness='4px' speed='0.5s' emptyColor='gray.200' color='blue.500' size='xl' />
                        <br />
                        Cargando Planillas

                    </Text>
                )}
            </VStack>
        </Container>
    )
};


export const AbcTable = () => {
    const { fetchInscriptionABC, inscriptions } = useInscriptionsStore();

    useEffect(() => {
        fetchInscriptionABC();
    }, [fetchInscriptionABC]);
    const bg = useColorModeValue("gray.300");
    const txt = useColorModeValue("black")
    return (
        <Container maxW='container.xl' py={5} mt={-5} mb={50}>
            <VStack spacing={8}>
                <Text fontSize={{ base: "50", sm: "60" }} fontWeight={"bold"} textAlign={"center"}>
                    Planilla de Inscriptos al ABC
                </Text>

        <TableContainer w={'full'} bg={bg} color={txt}>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Nombre</Th>
                        <Th>Apellido</Th>
                        <Th isNumeric>Celular</Th>
                        <Th>Asistencia</Th>
                        

                            </Tr>
                        </Thead>
                        <Tbody>
                            {Array.isArray(inscriptions) ? (inscriptions.map((p, index) => (
                                <AbcCardTableInfo key={p.id || index} inscriptions={p} index={index + 1} />
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
                <Link href="/tables">
                    <Button leftIcon={<ArrowBackIcon />} mb={5}>Volver</Button>
                </Link>
                {inscriptions.length === 0 && (
                    <Text textAlign={"center"}>
                        <Spinner thickness='4px' speed='0.5s' emptyColor='gray.200' color='blue.500' size='xl' />
                        <br />
                        Cargando Inscripciones

                    </Text>
                )}
            </VStack>
        </Container>

    )
};

export const DisTable = () => {
    const { fetchInscriptionDIS, inscriptions } = useInscriptionsStore();

    useEffect(() => {
        fetchInscriptionDIS();
    }, [fetchInscriptionDIS]);
    const bg = useColorModeValue("gray.300");
    const txt = useColorModeValue("black")
    return (
        <Container maxW='container.xl' py={5} mt={-5} mb={50}>
            <VStack spacing={8}>
                <Text fontSize={{ base: "50", sm: "60" }} fontWeight={"bold"} textAlign={"center"}>
                    Planilla de Inscriptos al Discipulado
                </Text>

                <TableContainer w={'full'} bg={bg} color={txt}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Nombre</Th>
                                <Th>Apellido</Th>
                                <Th isNumeric>Celular</Th>


                            </Tr>
                        </Thead>
                        <Tbody>
                            {Array.isArray(inscriptions) ? (inscriptions.map((p, index) => (
                                <DisCardTableInfo key={p.id || index} inscriptions={p} index={index + 1} />
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
                <Link href="/tables">
                    <Button leftIcon={<ArrowBackIcon />} mb={5}>Volver</Button>
                </Link>
                {inscriptions.length === 0 && (
                    <Text textAlign={"center"}>
                        <Spinner thickness='4px' speed='0.5s' emptyColor='gray.200' color='blue.500' size='xl' />
                        <br />
                        Cargando Inscripciones

                    </Text>
                )}
            </VStack>
        </Container>

    )
};

export const EsTable = () => {
    const { fetchInscriptionES, inscriptions } = useInscriptionsStore();

    useEffect(() => {
        fetchInscriptionES();
    }, [fetchInscriptionES]);
    const bg = useColorModeValue("gray.300");
    const txt = useColorModeValue("black")
    return (
        <Container maxW='container.xl' py={5} mt={-5} mb={50}>
            <VStack spacing={8}>
                <Text fontSize={{ base: "50", sm: "60" }} fontWeight={"bold"} textAlign={"center"}>
                    Planilla de Inscriptos a la Escuela de Vida
                </Text>

                <TableContainer w={'full'} bg={bg} color={txt}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Nombre</Th>
                                <Th>Apellido</Th>
                                <Th isNumeric>Celular</Th>


                            </Tr>
                        </Thead>
                        <Tbody>
                            {Array.isArray(inscriptions) ? (inscriptions.map((p, index) => (
                                <EsCardTableInfo key={p.id || index} inscriptions={p} index={index + 1} />
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
                <Link href="/tables">
                    <Button leftIcon={<ArrowBackIcon />} mb={5}>Volver</Button>
                </Link>
                {inscriptions.length === 0 && (
                    <Text textAlign={"center"}>
                        <Spinner thickness='4px' speed='0.5s' emptyColor='gray.200' color='blue.500' size='xl' />
                        <br />
                        Cargando Inscripciones

                    </Text>
                )}
            </VStack>
        </Container>

    )
};

export default Tables