import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: "light", // Asegura que inicie en modo claro
    useSystemColorMode: false,
  },
  colors: {
    text: {
      light: 'black', // Color de texto para el modo claro
      dark: 'white',  // Color de texto para el modo oscuro
    },
    link: {
        light: 'black',  // Color de link para el modo claro
        dark: 'white',   // Color de link para el modo oscuro
      },
    box: {
        light: 'red',  // Color de fondo para el modo claro
        dark: 'blue',   // Color de fondo para el modo oscuro
      },
    },
    components: {
        Text: {
          baseStyle: (props) => ({
            color: props.colorMode === 'dark' ? 'text.dark' : 'text.light',  // Cambia el color del texto
          }),
        },
        Link: { 
          baseStyle: (props) => ({
            color: props.colorMode === "dark" ? "link.dark" : "link.light",  // Color del texto
            bgGradient: props.colorMode === "dark"
              ? "linear(to-r, orange.300, red.600)"
              : "linear(to-r, orange.300, red.600)",  // Gradiente dinámico
            bgClip: "text", // Hace que el gradiente afecte solo el texto
            textShadow: props.colorMode === "dark" 
              ? "2px 2px 6px rgba(0, 0, 0, 0.3)" // Sombra clara en modo oscuro
              : "2px 2px 6px rgba(0, 0, 0, 0.3)", // Sombra oscura en modo claro
            _hover: {
              textDecoration: "none",
              color: props.colorMode === "dark" ? "white" : "black",  // Color en hover
            },
          }),
        },
        Box: {
          baseStyle: (props) => ({
            bg: props.colorMode === "dark" ? "light" : "dark", // Color de fondo
          }),
        },
      },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.200",
      },
    }),
  },
});

export default theme;
