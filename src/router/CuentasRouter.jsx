import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import TablaPrincipalCuentas from '../pages/TablaPrincipalCuentas'
import AgregarCuenta from '../pages/AgregarCuenta'
import ActualizarCuenta from "../pages/ActualizarCuenta";
import InformacionCuenta from '../pages/InformacionCuenta';

function CuentasRouter(props) {
  const { cuentasStreaming, perfiles } = props

  const [ cuentaSelected, setCuentaSelected ] = useState('')

  return (
    <Routes>
      <Route 
        path='/'
        element={
          <TablaPrincipalCuentas 
            cuentasStreaming={cuentasStreaming}
            cuentaSelected={cuentaSelected}
            setCuentaSelected={setCuentaSelected}
          />
        }
      />
      <Route 
        path='/agregar-cuenta'
        element={<AgregarCuenta />}
      />
      <Route 
        path='/actualizar-cuenta'
        element={
          <ActualizarCuenta 
            cuentaActualizar={cuentasStreaming.find(cuenta => cuenta.id === cuentaSelected)}
          />
        }
      />
      <Route 
        path='/informacion-cuenta/*'
        element={
          <InformacionCuenta
            cuenta={cuentasStreaming.find(cuenta => cuenta.id === cuentaSelected)}
            perfiles={perfiles.filter(perfil => perfil.idPropietario === cuentaSelected)}
          />
        }
      />
    </Routes>
  )
}

export default CuentasRouter