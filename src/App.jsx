import { Box, Button } from "@chakra-ui/react"
import Navbar from "./components/Navbar.jsx"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Abc from "./pages/Abc.jsx"
import EscuelaVida from "./pages/EscuelaVida.jsx"
import Discipulado from "./pages/Discipulado.jsx"
import Footer from "./components/Footer.jsx"
import Tables, { EsTable } from "./pages/Tables.jsx"
import { AbcTable, DisTable } from "./pages/Tables.jsx"


function App() {

  return (
    <>
      <Box minH={'100vh'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inscriptions/ABC" element={<Abc/>} />
          <Route path="/inscriptions/Escuela-de-Vida" element={<EscuelaVida/>} />
          <Route path="/inscriptions/Discipulado" element={<Discipulado/>} />
          <Route path="/tables" element={<Tables/>}/>
          <Route path="/table/abc" element={<AbcTable/>}/>
          <Route path="/table/dis" element={<DisTable/>}/>
          <Route path="/table/es" element={<EsTable/>}/>


        </Routes>
        <Footer/>
      </Box>
    </>
  )
}

export default App

            //https://localhost:8080
            //https://inscripciones-production.up.railway.app
