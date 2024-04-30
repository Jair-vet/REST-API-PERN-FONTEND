import { Link, Form, useActionData, ActionFunctionArgs } from "react-router-dom"
import { ErrorMessage } from "../components/ErrorMessage"

export const action = async ({request} : ActionFunctionArgs) => {
    const data = Object.fromEntries(await request.formData())  // Obtener los datos del Formulario

    let error = ''

    if(Object.values(data).includes('')){
        error = 'Todos los Campos son Obligatorios'
    }

    if(error.length){
        return error
    }
    
    return {}
}



export const NewProduct = () => {

    const error = useActionData() as string
 
  return (
    <>
        <div className="flex flex-col md:flex-row md:justify-between">
            <h2 className="text-center md:text-left text-4xl font-black text-slate-500">New Product</h2>
            <Link
                to="/"
                className="text-center mt-3 text-white uppercase rounded-md bg-slate-500 p-2 text-sm font-bold shadow-sm hover:bg-slate-600"
            >
                Registrar Producto
            </Link>
        </div>

        { error && <ErrorMessage>{error}</ErrorMessage>}
        <Form
            className="mt-10"  
            method='POST'    
        >
        
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Nombre Producto:</label>
                <input 
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Producto"
                    name="name"
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="price"
                >Precio:</label>
                <input 
                    id="price"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Precio Producto. ej. 200, 300"
                    name="price"
                />
            </div>
            <input
            type="submit"
            className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
            value="Registrar Producto"
            />
        </Form>

    </>

  )
}
