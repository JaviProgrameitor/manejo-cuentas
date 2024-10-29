
import { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import CampoCorreo from "../components/CampoCorreo/CampoCorreo";
import CampoPassword from "../components/CampoPassword/CampoPassword";
import SelectOption from "../components/SelectOption/SelectOption";
import ButtonSubmit from "../components/ButtonSubmit/ButtonSubmit";
import CampoFecha from "../components/CampoFecha/CampoFecha";

import { planesSuscripcion, tiemposServicio } from "../data/pagos/cuentasStreaming";

import { createDatabase, cuentasStreamingUrl } from '../firebase'

import { addMonth, format } from "@formkit/tempo"
import { toast, Toaster } from "sonner";

function AgregarCuenta() {
  const [ correo, setCorreo ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ planSuscripcion, setPlanSuscripcion ] = useState('')
  const [ tiempoServicio, setTiempoServicio ] = useState('')
  const [ fechaInicio, setFechaInicio ] = useState('')

  const [ estadoProceso, setEstadoProceso ] = useState(false)

  function resetInputs() {
    setCorreo('')
    setPassword('')
    setPlanSuscripcion('')
    setTiempoServicio('')
    setFechaInicio('')
  }

  async function newAccount(e) {
    e.preventDefault()

    setEstadoProceso(true)

    const fechaFinal = addMonth(fechaInicio, Number(tiempoServicio))
    const plan = planesSuscripcion.find(plan => plan.tipo == planSuscripcion)

    const datos = {
      correo,
      password,
      planSuscripcion,
      espacios: plan.espacios,
      tiempoServicio: Number(tiempoServicio),
      fechaInicio,
      fechaFinal: format(fechaFinal, 'YYYY-MM-DD', 'es'),
      fechaAgregado: new Date().getTime()
    }

    await createDatabase(cuentasStreamingUrl, datos)

    setEstadoProceso(false)

    resetInputs()

    toast.success('La cuenta se agregó correctamente.')
  }

  return (
    <div>
      <Toaster 
        position="top-center" 
        richColors
      />
      <div>
        <Link
          className="inline-block"
          to={'/cuentas-streaming'}
        >
          <IoArrowBackCircleSharp className="text-5xl"/>
        </Link>
      </div>
      <div>
        
      </div>
      <div 
        className="p-4 w-full mx-auto max-w-2xl"
      >
        <h2 className="text-lg md:text-2xl">Agrega Cuenta Streaming</h2>
        <form  
          className="mt-4"
          onSubmit={e => newAccount(e)}
        >
          <CampoCorreo 
            value={correo}
            setValue={setCorreo}
          />
          <CampoPassword 
            value={password}
            setValue={setPassword}
          />
          <SelectOption 
            title='Plan Suscripción'
            value={planSuscripcion}
            setValue={setPlanSuscripcion}
            options={planesSuscripcion.map(plan => plan.tipo)}
            forName='planes'
          />
          <SelectOption 
            title='Duración de Servicio'
            value={tiempoServicio}
            setValue={setTiempoServicio}
            options={tiemposServicio}
            forName='duracion'
          />
          <CampoFecha 
            title='Fecha Inicio Servicio'
            value={fechaInicio}
            setValue={setFechaInicio}
          />
          <ButtonSubmit 
            title={
              !estadoProceso 
                ? 'Agregar Cuenta' 
                :  <div role="status">
                      <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                      </svg>
                      Cargando...
                    </div>
            
            }
          />
        </form>
      </div>
    </div>
  )
}

export default AgregarCuenta