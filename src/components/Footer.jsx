import { Container, Flex, Text, List, ListItem, ListIcon, Link, useColorModeValue  } from "@chakra-ui/react";

const Footer = () => {
    const bg = useColorModeValue("gray.300", "gray.700")
    return (
        <Container maxW={"full"} py={4} bg={bg}>
                <Flex
                    
                    alignItems={"start"}
                    justifyContent={"space-between"}
                    flexDir={{
                        base:'column',
                        sm:"column",
                        }}
                >
                </Flex>
                <Text textAlign={"center"} opacity={0.5}>
                ©Derechos reservados - AvivamientoSI 2025
                </Text>
        </Container>
    )
};

export default Footer