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
        <div className="flex justify-evenly p-4 bg-orange-500">
            <div 
                className='text-4xl font-semibold text-white hover:text-amber-200 cursor-pointer'
                onClick={() => router.push('/')}
            >
                LISTA DE TAREAS
            </div>
            {
                state.token != '' && 
                    <div>
                        <button 
                            type='button' 
                            onClick={() => CerrarSesion()}
                            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-200 hover:text-red-600"
                        > 
                            Cerrar Sesion
                        </button>
                    </div>
            }
        </div>
    </>
  )
}
