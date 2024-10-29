
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { MdDelete, MdEditSquare  } from "react-icons/md";
import { FcInfo } from "react-icons/fc";

import FilaCuenta from '../components/FilaCuenta/FilaCuenta'
import Modal from '../components/Modal/Modal';
import ButtonTransparent from '../components/ButtonTransparent/ButtonTransparent';

import { deleteDatabase, cuentasStreamingUrl } from '../firebase';
import { toast, Toaster } from "sonner";

function TablaPrincipalCuentas(props) {
  const { cuentasStreaming, cuentaSelected, setCuentaSelected } = props
  const [ estadoModal, setEstadoModal ] = useState(false)

  function closeModal() {
    setEstadoModal(false)
  }

  async function deleteAccount() {
    setEstadoModal(false)
    await deleteDatabase(cuentasStreamingUrl, cuentaSelected)
    toast.success('La cuenta se eliminó correctamente')
    setCuentaSelected('')
  }

  return (
    <div>
      <Toaster 
        position="top-center" 
        richColors
      />
      <h2 className='text-lg mt-2 md:text-2xl w-full max-w-2xl mx-auto'>Tabla General Cuentas</h2>

      <div className="flex justify-end py-3 max-w-2xl mx-auto">
        <Link
          className="px-4 py-2 rounded-lg border-2 border-purple-400 bg-purple-400 hover:bg-transparent transition-colors duration-500"
          to={'/cuentas-streaming/agregar-cuenta'}
        >
          Agregar Cuenta
        </Link>
      </div>

      <div className={`flex justify-end pb-3 max-w-2xl mx-auto ${cuentaSelected ? 'visible' : 'invisible'}`}>
        <MdDelete 
          className='text-red-500 text-4xl cursor-pointer'
          onClick={() => setEstadoModal(true)}
        />
        <Link
          to={'/cuentas-streaming/informacion-cuenta/'}
        >
          <FcInfo 
            className='text-4xl'
          />
        </Link>
        <Link
          to={'/cuentas-streaming/actualizar-cuenta'}
        >
          <MdEditSquare 
            className='text-4xl'
          />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table mx-auto">
          <thead className="table-header-group bg-gray-300">
            <tr className="table-row">
              <th className="table-cell text-black px-4 text-center lg:px-6 lg:py-4">
                Alertas
              </th>
              <th className="table-cell text-black px-4 text-center lg:px-6 lg:py-4">
                Espacios Libres
              </th>
              <th className="table-cell text-black px-4 text-center lg:px-6 lg:py-4">
                Suscripción
              </th>
              <th className="table-cell text-black px-4 text-center lg:px-6 lg:py-4">
                Tiempo
              </th>
              <th className="table-cell text-black px-4 text-center lg:px-6 lg:py-4">
                Fecha Inicio
              </th>
              <th className="table-cell text-black px-4 text-center lg:px-6 lg:py-4">
                Fecha Final
              </th>
            </tr>
          </thead>
          <tbody>
            {
              cuentasStreaming.map((cuenta, index) =>
                <FilaCuenta 
                  datos={cuenta}
                  action={setCuentaSelected}
                  selected={cuentaSelected}
                  key={index}
                />
              )
            }
          </tbody>
        </table>
      </div>
      <Modal 
        estado={estadoModal}
        contenido={
          <div>
            <h2 className='text-black text-center text-xl'>¿Estás seguro de que quieres eliminar esta cuenta?</h2>
            <div className='flex justify-evenly'>
              <ButtonTransparent 
                title='Cancelar'
                action={closeModal}
              />
              <ButtonTransparent 
                title='Eliminar'
                action={deleteAccount}
              />
            </div>
          </div>
        }
      />
    </div>
  )
}

export default TablaPrincipalCuentas