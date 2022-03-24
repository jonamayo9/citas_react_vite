import { useState, useEffect} from "react"
import Header from "./components/header"
import Formulario from "./components/Fomulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Footer from "./components/footer"


function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})


  // Obteniendo Pacientes desde el Local Storage
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

      setPacientes(pacientesLS)
    }

    obtenerLS();

  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  // TERMINANDO de tener pacientes en Local storage

  const eliminarPaciente = (id) => {
      const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);

      setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
