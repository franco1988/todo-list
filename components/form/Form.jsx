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
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      
      <div className="mx-auto max-w-2xl text-center">
        {
            isEdit?
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Editar Tarea</h2>
                :
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Crear Tarea</h2>
        }
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
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
        <div className="mt-10">
            {
                isEdit?
                    <button
                        type='button'
                        onClick={() => editTarea()}
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Guardar Tarea
                    </button>
                    :
                    <button
                        type='button'
                        onClick={() => crearTarea()}
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Crear Tarea
                    </button>
            }
          
        </div>
      </form>
    </div>
  )
}
