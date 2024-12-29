'use client'
import { useContext } from "react"
import { contexto } from "../layout"

export default function Login() {
     const {state, dispatch} = useContext(contexto)

    const submit = () => {
        console.log('** entro submit')
        dispatch({
            type: 'TOKEN',
            payload: 'SIETR78VHTECN666EH09W8W55EHEY' 
        })
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm/6 font-semibold text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm/6 font-semibold text-gray-900">
                                    Contraseña
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="flex  justify-center mt-10">
                            <button
                                type="button"
                                onClick={() => submit()}
                                className="flex  justify-center rounded-md bg-amber-700 mx-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-amber-400 hover:text-amber-700 w-3/5"
                            >
                                Iniciar Sesion
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}