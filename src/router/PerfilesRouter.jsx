
import { Routes, Route } from 'react-router-dom'
import TablaPerfiles from '../pages/TablaPerfiles'
import AgregarPerfil from '../pages/AgregarPerfil'
import { useState } from 'react'
import ActualizarPerfil from '../pages/ActualizarPerfil'
import InformacionPerfil from '../pages/InformacionPerfil'

function PerfilesRouter(props) {
  const { cuenta, perfiles } = props

  const [ selected, SetSelected ] = useState('')

  return (
    <Routes>
      <Route 
        path='/'
        element={
          <TablaPerfiles 
            perfiles={perfiles}
            selected={selected}
            SetSelected={SetSelected}
          />
        }
      />
      <Route 
        path='/informacion-perfil'
        element={
          <InformacionPerfil 
            perfil={perfiles.find(perfil => perfil.id === selected)}
          />
        }
      />
      <Route 
        path='/agregar-perfil'
        element={
          <AgregarPerfil 
            cuenta={cuenta}
          />
        }
      />
      <Route 
        path='/actualizar-perfil'
        element={
          <ActualizarPerfil 
            perfil={perfiles.find(perfil => perfil.id === selected)}
          />
        }
      />
    </Routes>  
  )
}

export default PerfilesRouter