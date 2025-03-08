import { useColorMode, Container, Flex, Text, Link, Button, HStack,  } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import {LuSun} from "react-icons/lu";


const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Container maxW={"full"} py={4} bg={"white.500"} borderRadius={"lg"} boxShadow={"lg"} mb={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:'row',
                sm:"row",
                }}
        >
            <Text
            fontSize={{base: "22", sm: "28"}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
            >
                <Link href="/"> Avivamiento SI </Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Button onClick={toggleColorMode}>
                    {colorMode == "light" ? <IoMoon /> : <LuSun size="20" />}
                </Button>
            </HStack>
        </Flex>
    </Container>
    )
};

export default Navbar;