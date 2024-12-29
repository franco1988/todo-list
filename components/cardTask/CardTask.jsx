'use client'
import { contexto } from '@/app/layout'
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'

export const CardTask = (props) => {
  const {data, indice} = props
  const {state, dispatch} = useContext(contexto)
  const router = useRouter()


  const checkbox = (e) =>{
    state.tasks[indice].estado = e.target.checked
    dispatch({
        type: 'TASK',
        payload: state.tasks 
    })
  }

  const deleteTask = () =>{
    let eliminado = state.tasks.filter((ele, index) => index != indice)
    dispatch({
        type: 'TASK',
        payload: eliminado
    })
  }

  const editTask = () =>{
    let edit = {
      titulo: data.titulo,
      descripcion: data.descripcion,
      estado: data.estado,
      indice: indice
    }
    dispatch({
        type: 'EDIT',
        payload: edit
    })
    router.push('/edittask')
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <div>
          <input type="checkbox" checked={data.estado} onChange={checkbox}/>
        </div>
        <div className='flex flex-col content-start'>
          <p className='font-semibold text-3xl'>{data.titulo}</p>
          <p className='font-normal text-lg'>{data.descripcion}</p>
        </div>
        <div className='flex justify-between items-center'>
          <button 
            type='button' 
            onClick={() => deleteTask()}
            className="flex  justify-center rounded-md bg-red-600 mx-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-200 hover:text-red-600"
          >
            Eliminar
          </button>
          <button 
            type='button' 
            onClick={() => editTask()}
            className="flex  justify-center rounded-md bg-amber-700 mx-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-amber-400 hover:text-amber-700"
          >Editar
          </button>
        </div>
      </div>
      <hr/>
    </>
  )
}
