
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import { format } from "@formkit/tempo"

import Indicadores from "../components/Indicadores/Indicadores"

function InformacionPerfil({perfil = {}}) {
  const { 
    nombreCompleto = '',
    nombreSpotify = '',
    tiempoContratado = '',
    precioPagado = '',
    fechaInicio = '',
    fechaFin = '',
    contacto = '',
    idPropietario = '',
    id  = ''
  } = perfil

  const datos = [
    {
      title: 'Nombre Completo',
      value: nombreCompleto
    },
    {
      title: 'Nombre en Spotify',
      value: nombreSpotify
    },
    {
      title: 'Tiempo Contratado',
      value: tiempoContratado
    },
    {
      title: 'Precio Pagado',
      value: precioPagado
    },
    {
      title: 'Fecha Inicio Servicio',
      value: format(fechaInicio, "dddd, MMMM D, YYYY", 'es')
    },
    {
      title: 'Fecha Fin Servicio',
      value: format(fechaFin, "dddd, MMMM D, YYYY", 'es')
    },
    {
      title: 'Contacto',
      value: contacto
    },
  ]

  return (
    <div>
      <div>
        <Link
          className="inline-block"
          to={'/cuentas-streaming/informacion-cuenta/perfiles'}
        >
          <IoArrowBackCircleSharp className="text-5xl"/>
        </Link>
      </div>
      <h2 className="mt-4">Información Perfil</h2>
      <div>
        {
          datos.map((dato, index) =>
            <Indicadores
              pregunta={dato.title}
              respuesta={dato.value}
              key={index}
            />
          )
        }
      </div>
    </div>
  )
}

export default InformacionPerfil