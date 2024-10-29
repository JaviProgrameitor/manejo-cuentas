
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { db } from '../firebase';

import Informacion from '../pages/Informacion'
import Cuentas from '../pages/Cuentas'

import { diffDays } from "@formkit/tempo"
import { diasAlerta } from '../data/perfiles/perfiles';

function PrincipalRouter() {
  const [ perfiles, setPerfiles ] = useState([])
  const [ perfilesComplete, setPerfilesComplete ] = useState([])
  const [ cuentasStreaming, setCuentasStreaming ] = useState([])
  const [ cuentasStreamingComplete, setCuentasStreamingComplete ] = useState([])

  function complementoPerfiles(perfilesParm = []) {
    const date = new Date()

    const newPerfiles = perfilesParm.map(perfil => {
      const diasFaltantes = diffDays(perfil.fechaFin, date)

      return {...perfil, diasFaltantes}
    });

    setPerfilesComplete(newPerfiles)
  }

  function complementoCuentas(cuentasParm = []) {
    const newCuentas = cuentasParm.map(cuenta => {
      let espaciosLibres = 0
      let alertas = false
      if(cuenta.espacios > 0) {
        const perfilesEnCuenta = perfilesComplete.filter(perfil => perfil.idPropietario === cuenta.id)
        const buscarAlertas = perfilesEnCuenta.filter(perfil => perfil.diasFaltantes <= diasAlerta)
        
        espaciosLibres = cuenta.espacios - perfilesEnCuenta.length
        alertas = buscarAlertas.length > 0 ? true : false
      }

      return {...cuenta, espaciosLibres, alertas}
    })

    setCuentasStreamingComplete(newCuentas)
  }

  //Todo: Función para leer los datos de la base de datos
  useEffect(
    () => {
      const collectionRef = collection(db, 'perfiles')
      const q = query(collectionRef)

      onSnapshot(q,(snapshot) => 
        setPerfiles(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      )
    },[db]
  )

  useEffect(
    () => {
      const collectionRef = collection(db, 'cuentasStreaming')
      const q = query(collectionRef, orderBy('fechaAgregado', 'asc'))

      onSnapshot(q,(snapshot) => 
        setCuentasStreaming(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      )
    },[db]
  )

  useEffect(() => {
    complementoPerfiles(perfiles)
  }, [perfiles])

  useEffect(() => {
    complementoCuentas(cuentasStreaming)
  }, [perfilesComplete, cuentasStreaming])

  return (
    <Routes>
      <Route 
        path='/'
        element={<Informacion />}
      />
      <Route 
        path='/cuentas-streaming/*'
        element={
          <Cuentas 
            cuentasStreaming={cuentasStreamingComplete}
            perfiles={perfilesComplete}
          />
        }
      />
    </Routes>
  )
}

export default PrincipalRouter