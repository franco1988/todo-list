'use client'
import { useContext, useEffect } from "react"
import { taskApi } from "@/utils/utilsApi";
import { CardTask } from "@/components/cardTask/CardTask";
import { useRouter } from 'next/navigation'
import { contexto } from "@/app/layout";

export const HomeTask = () => {
    const {state, dispatch} = useContext(contexto)
    const router = useRouter()

    useEffect(() => {
        if(state.tasks.length === 0){
            let tasks = taskApi
            dispatch({
                type: 'TASK',
                payload: tasks 
            })
        }
    }, []);

    return (
        <>
            <div>
                <button onClick={() =>  router.push('/addtask')}>Agregar tarea</button>
            </div>
            {
                state.tasks != [] && state.tasks.map((ele, index) =>
                    <CardTask key={index} data={ele} indice={index} dataTotal={state.tasks}/>
                )
            }
        </>
    )
}