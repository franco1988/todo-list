'use client'
import { useContext, useEffect } from "react"
import { contexto } from "../layout"
import { taskApi } from "@/utils/utilsApi";
import { Navbar } from "@/components/navbar/Navbar";
import { CardTask } from "@/components/cardTask/CardTask";
import { useRouter } from 'next/navigation'

export default function Task() {
    const {state, dispatch} = useContext(contexto)
    const router = useRouter()

    useEffect(() => {
        let tasks = taskApi
        dispatch({
            type: 'TASK',
            payload: tasks 
        })
    }, []);

    return (
        <>
            <Navbar/>
            <div>
                <button onClick={() =>  router.push('/task/addtask')}>Agregar tarea</button>
            </div>
            {
                state.tasks != [] && state.tasks.map((ele, index) =>
                    <CardTask key={index} data={ele} indice={index} dataTotal={state.tasks}/>
                )
            }
        </>
    )
}