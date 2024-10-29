
import { Routes, Route } from 'react-router-dom'
import PerfilesCuenta from '../pages/PerfilesCuenta'
import DataCuenta from '../pages/DataCuenta'

function InformacionCuentaRouter(props) {
  const { cuenta, perfiles } = props
  return (
    <Routes>
      <Route 
        path='/'
        element={
          <DataCuenta 
            cuenta={cuenta}
          />
        }
      />
      <Route 
        path='/perfiles/*'
        element={
          <PerfilesCuenta 
            cuenta={cuenta}
            perfiles={perfiles}
          />
        }
      />
    </Routes>  
  )
}

export default InformacionCuentaRouter