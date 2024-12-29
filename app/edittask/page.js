'use client'
import { Form } from "@/components/form/Form";
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from "react";
import { contexto } from "../layout";

export default function EditTask() {
    const {state, dispatch} = useContext(contexto)
    const router = useRouter()

    useEffect(() => {
        if( state.token === ''){
            router.push('/')
        }
    }, []);

    return (
        <>
            <Form isEdit={true}/>
            
        </>
    )
}