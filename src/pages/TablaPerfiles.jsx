
import { Link } from 'react-router-dom'
import { MdDelete, MdEditSquare  } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import { useState } from 'react';

import FilaPerfil from '../components/FilaPerfil/FilaPerfil';
import Modal from '../components/Modal/Modal';
import ButtonTransparent from '../components/ButtonTransparent/ButtonTransparent';

import { deleteDatabase, perfilesCuentasUrl } from '../firebase';
import { toast, Toaster } from "sonner";

function TablaPerfiles(props) {
  const { perfiles, selected, SetSelected } = props

  const [ estadoModal, setEstadoModal ] = useState(false)

  function closeModal() {
    setEstadoModal(false)
  }

  async function deleteAccount() {
    setEstadoModal(false)
    await deleteDatabase(perfilesCuentasUrl, selected)
    toast.success('El perfil se eliminó correctamente')
    SetSelected('')
  }

  return (
    <div>
      <Toaster 
        position="top-center" 
        richColors
      />
      <div>
        <h3 className='text-lg max-w-2xl mx-auto md:text-2xl'>Tabla de Perfiles</h3>
      </div>
      <div className="flex justify-end py-3">
        <Link
          className="px-4 py-2 rounded-lg border-2 border-purple-400 bg-purple-400 hover:bg-transparent transition-colors duration-500"
          to={'/cuentas-streaming/informacion-cuenta/perfiles/agregar-perfil'}
        >
          Agregar Perfil
        </Link>
      </div>

      <div className={`flex justify-end pb-3 ${selected ? 'visible' : 'invisible'}`}>
        <MdDelete 
          className='text-red-500 text-4xl cursor-pointer'
          onClick={() => setEstadoModal(true)}
        />
        <Link
          to={'/cuentas-streaming/informacion-cuenta/perfiles/informacion-perfil'}
        >
          <FcInfo 
            className='text-4xl'
          />
        </Link>
        <Link
          to={'/cuentas-streaming/informacion-cuenta/perfiles/actualizar-perfil'}
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
                Nombre Completo
              </th>
              <th className="table-cell text-black px-4 text-center lg:px-6 lg:py-4">
                Tiempo Contratado
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
              perfiles.map((perfil, index) =>
                <FilaPerfil
                  datos={perfil}
                  selected={selected}
                  action={SetSelected}
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
            <h2 className='text-black text-center text-xl'>¿Estás seguro de que quieres eliminar este perfil?</h2>
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

export default TablaPerfiles