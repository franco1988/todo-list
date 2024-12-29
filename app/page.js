'use client'
import { useContext, useEffect } from "react";
import Image from "next/image";
import Login from "./login/page";
import { contexto } from "./layout";
import { useRouter } from 'next/navigation'
import { HomeTask } from "@/components/homeTask/HomeTask";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  const {state, dispatch} = useContext(contexto)
  const router = useRouter()
console.log("**state ,", state)
  useEffect(() => {
    
    
  }, []);

  return (
    <div className="items-center justify-items-center min-h-screen p-4 gap-16 font-[family-name:var(--font-geist-sans)]">
      {
        state.token != '' && <Navbar/>
      }
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {
          state.token != ''?
            <HomeTask/>
            : <Login/>

        }
      </div>
    </div>
  );
}
