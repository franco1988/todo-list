'use client'
import { Form } from "@/components/form/Form";
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from "react";
import { contexto } from "../layout";
import { Navbar } from "@/components/navbar/Navbar";

export default function AddTask() {
    const {state, dispatch} = useContext(contexto)
        const router = useRouter()
    
        useEffect(() => {
            if( state.token === ''){
                router.push('/')
            }
        }, []);

    return (
        <>
            <Navbar/>
           <Form isEdit={false}/>
        </>
    )
}