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
    router.push('/task/edittask')
  }

  return (
    <>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'1rem 0rem'}}>
        <div>
          <input type="checkbox" checked={data.estado} onChange={checkbox}/>
        </div>
        <div>
          <h2>{data.titulo}</h2>
          <p>{data.descripcion}</p>
        </div>
        <div>
          <button onClick={() => deleteTask()}>Eliminar</button>
          <button onClick={() => editTask()}>Editar</button>
        </div>
      </div>
      <hr/>
    </>
  )
}
