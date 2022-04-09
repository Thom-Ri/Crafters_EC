import React, { useState } from 'react'
import '../Firebase/FirebaseClient';
import { doc, getFirestore, setDoc} from "firebase/firestore";


function CheckoutForm({items}){

    const [FormInformation, setFormInformation] = useState({
        Nombre:"",
        Apellido: "",
        Email: "",
        Celular: "",
        CodigoPostal: "",
        Ciudad:"",
        Orden:{items}
    })

    const HandleInputChange = (event) =>{
        setFormInformation({
            ...FormInformation,
            [event.target.name] : event.target.value
        })
        console.log(FormInformation)
    }
    const enviarDatos= async (event)=>{
        event.preventDefault();
        const db = getFirestore();
        await setDoc(doc(db, "Ordenes", FormInformation.Email), {
            Nombre: FormInformation.Nombre,
            Apellido: FormInformation.Apellido,
            Email: FormInformation.Email,
            Celular: FormInformation.Celular,
            Ciudad: FormInformation.Ciudad,
            CodigoPostal: FormInformation.CodigoPostal,
            Orden: FormInformation.Orden,
        });
        alert(" Gracias por su compra!")
        alert("Su orden ha sido emitida y archivada en nuestra sucursal para su pronto despacho a la direccion proporcionada. Su orden de compra es " + FormInformation.Email)
    }

  return (
    <>
        <form onSubmit={enviarDatos}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="Nombre"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
                                onChange={HandleInputChange}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Apellido
                            </label>
                            <input
                                type="text"
                                name="Apellido"
                                id="last-name"
                                autoComplete="family-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
                                onChange={HandleInputChange}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                E-mail
                            </label>
                            <input
                                type="text"
                                name="Email"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
                                onChange={HandleInputChange}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Verificar E-mail
                            </label>
                            <input
                                type="text"
                                name="CodigoPostal"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
                                onChange={HandleInputChange}
                            />
                        </div>
                        
                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Numero de Celular
                            </label>
                            <input
                                type="number"
                                name="number"
                                id="number-id"
                                autoComplete="number"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
                                onChange={HandleInputChange}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                Codigo Postal
                            </label>
                            <input
                                type="number"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
                                onChange={HandleInputChange}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                Ciudad
                            </label>
                            <input
                                type="text"
                                name="Ciudad"
                                id="City"
                                autoComplete="City"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
                                onChange={HandleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    </>
  )
}

export default CheckoutForm