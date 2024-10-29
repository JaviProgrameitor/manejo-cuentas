
import { NavLink } from 'react-router-dom'
import { IoNewspaper } from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";

function BarSide() {

  const rutas = [
    {
      url: '/',
      nombreCorto: 'Información',
      nombreLargo: 'Información General',
      icon: IoNewspaper
    },
    {
      url: '/cuentas-streaming',
      nombreCorto: 'Cuentas',
      nombreLargo: 'Cuentas Streaming',
      icon: AiFillDatabase
    }
  ]

  return (
    <aside className="w-screen bg-purple-600 flex justify-evenly">
      {
        rutas.map((ruta, key) => 
          <NavLink
            className={({ isActive }) =>
              isActive 
              ? "w-1/3 h-full flex flex-col items-center relative justify-center text-white transition-all duration-500 before:transition-all before:duration-500 before:* before:w-full before:h-1 before:absolute before:top-0 before:bg-white before:rounded-lg" 
              : "w-1/3 h-full flex flex-col items-center relative justify-center text-black before:* before:h-1 before:w-0 before:absolute before:top-0"
            }
            to={ruta.url}
            key={key}
          >
            <ruta.icon />
            {ruta.nombreCorto}
          </NavLink>
        )
      }
    </aside>
  )
}

export default BarSide