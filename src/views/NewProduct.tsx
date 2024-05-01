import { Link, Form, useActionData, ActionFunctionArgs, redirect } from "react-router-dom"
import { ErrorMessage } from "../components/ErrorMessage"
import { addProduct } from "../services/ProductService"
import ProductForm from "../components/ProductForm"

export const action = async ({request} : ActionFunctionArgs) => {
    
    const data = Object.fromEntries(await request.formData())  // Obtener los datos del Formulario
    let error = ''
    if(Object.values(data).includes('')){
        error = 'Todos los Campos son Obligatorios'
    }
    // Si hay errores de Validación
    if(error.length){
        return error
    }
    await addProduct(data)

    // Redireccionar a la Página principal
    return redirect('/')
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
        
            <ProductForm />

            <input
            type="submit"
            className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
            value="Registrar Producto"
            />
        </Form>

    </>

  )
}
