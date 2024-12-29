'use client'
import { contexto } from '@/app/layout'
import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const Form = (props) => {
  const {isEdit} = props
   const router = useRouter()
  const {state, dispatch} = useContext(contexto)
  const [task, setTask] = useState({
      titulo: '',
      descripcion: '',
      estado: false
  })

  useEffect(() => {
      if(isEdit){
          setTask(state.edit)
      }
  }, [isEdit]);

  const dataTarea = (e) => {
      setTask({
          ...task,
          [e.target.name]: e.target.value
      })
  }

  const crearTarea = () => {
    let tarea = {
      titulo: task.titulo,
      descripcion: task.descripcion,
      estado: task.estado
    }
    dispatch({
      type: 'ADD',
      payload: tarea
    })
    router.replace('/')
  }

  const editTarea = () => {
    let tarea = {
      titulo: task.titulo,
      descripcion: task.descripcion,
      estado: task.estado
    }
    state.tasks[state.edit.indice] = tarea
    dispatch({
      type: 'TASK',
      payload: state.tasks
    })
    dispatch({
      type: 'EDIT',
      payload: {}
    })
    router.push('/')
  }

  return (
    <div className="items-center justify-center min-h-screen p-4 gap-16 bg-amber-300">
      
      <div className="text-center">
        {
            isEdit?
                <p className="text-4xl m-3 font-semibold tracking-tight text-amber-700">Editar Tarea</p>
                :
                <p className="text-4xl m-3 font-semibold tracking-tight text-amber-700">Agregar Tarea</p>
        }
      </div>
      <form className="mx-auto mt-2 max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm/6 font-semibold text-gray-900">
              Titulo
            </label>
            <div className="mt-2.5">
              <input
                id='titulo'
                name="titulo"
                type="text"
                value={task.titulo}
                onChange={(e) => dataTarea(e)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm/6 font-semibold text-gray-900">
              Descripcion
            </label>
            <div className="mt-2.5">
              <textarea
                id='descripcion'
                name="descripcion"
                type="text"
                value={task.descripcion}
                onChange={(e) => dataTarea(e)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          
        </div>
        <div className="flex  justify-center mt-10">
            {
                isEdit?
                    <button
                        type='button'
                        onClick={() => editTarea()}
                        className="flex  justify-center rounded-md bg-amber-700 mx-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-amber-400 hover:text-amber-700 w-3/5"
                    >
                        Guardar Tarea
                    </button>
                    :
                    <button
                        type='button'
                        onClick={() => crearTarea()}
                        className="flex  justify-center rounded-md bg-amber-700 mx-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-amber-400 hover:text-amber-700 w-3/5"
                    >
                        Crear Tarea
                    </button>
            }
          
        </div>
      </form>
    </div>
  )
}
