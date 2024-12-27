'use client'
import { useContext, useEffect } from "react";
import Image from "next/image";
import Login from "./login/page";
import { contexto } from "./layout";
import { useRouter } from 'next/navigation'

export default function Home() {
  const {state, dispatch} = useContext(contexto)
  const router = useRouter()

  useEffect(() => {
    
    
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {
          state.token != ''?
            router.push('/task')
            : <Login/>

        }
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
