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
                <button 
                    onClick={() =>  router.push('/addtask')}
                    className="flex  justify-center rounded-md bg-amber-700 mx-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm  hover:bg-amber-400 hover:text-amber-700"
                >
                    Agregar tarea
                </button>
            </div>
            <div className="w-3/4 m-auto">
                {
                    state.tasks != [] && state.tasks.map((ele, index) =>
                        <CardTask key={index} data={ele} indice={index} dataTotal={state.tasks}/>
                    )
                }
            </div>
        </>
    )
}