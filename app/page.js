'use client'
import { useContext } from "react";
import Login from "./login/page";
import { contexto } from "./layout";
import { HomeTask } from "@/components/homeTask/HomeTask";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  const {state, dispatch} = useContext(contexto)

  return (
    <div >
      <Navbar/>
      <div className="items-center justify-center min-h-screen p-4 gap-16 bg-amber-300">
        {
          state.token?
            <HomeTask/>
            : <Login/>

        }
      </div>
    </div>
  );
}
