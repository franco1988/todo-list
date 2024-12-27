'use client'
import { contexto } from '@/app/layout'
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const Navbar = () => {
    const {state, dispatch} = useContext(contexto)
    const router = useRouter()

     useEffect(() => {
        if( state.token === ''){
            router.push('/')
        }
    }, []);

    const CerrarSesion = () =>{
        dispatch({
            type: 'TOKEN',
            payload: ''
        })
        router.push('/')
    }

  return (
    <>
        <div>Tareas</div>
        <div>
            {
                state.token != '' && 
                    <button onClick={() => CerrarSesion()}> Cerrar Sesion</button>
            }
        </div>
    </>
  )
}
