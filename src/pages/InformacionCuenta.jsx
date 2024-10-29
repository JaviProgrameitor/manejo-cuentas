

import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import InformacionCuentaRouter from "../router/InformacionCuentaRouter";

function InformacionCuenta(props) {
  const { cuenta, perfiles } = props

  return (
    <div>
      <div>
        <Link
          className="inline-block"
          to={'/cuentas-streaming'}
        >
          <IoArrowBackCircleSharp className="text-5xl"/>
        </Link>
      </div>
      <h2 className="text-lg mb-4 max-w-2xl mx-auto md:text-2xl">Información de la Cuenta</h2>
      <div
        className="grid grid-cols-2 mb-4"
      >
        <NavLink
          to={'/cuentas-streaming/informacion-cuenta/'}
          end
          className={({isActive, isPending }) =>
            isActive
            ? 'text-center border-2 border-purple-500 p-2 bg-purple-500'
            : 'text-center border-2 border-purple-500 p-2'
          }
        >
          Información
        </NavLink>
        <NavLink
          to={'/cuentas-streaming/informacion-cuenta/perfiles'}
          className={({isActive}) =>
            isActive
            ? 'text-center border-2 border-purple-500 p-2 bg-purple-500'
            : 'text-center border-2 border-purple-500 p-2'
          }
        >
          Perfiles
        </NavLink>
      </div>
      <div>
        <InformacionCuentaRouter 
          cuenta={cuenta}
          perfiles={perfiles}
        />
      </div>
    </div>
  )
}

export default InformacionCuenta