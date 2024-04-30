import { Link } from "react-router-dom"


export const NewProduct = () => {
  return (
    <>
        <div className="flex justify-between">
            <h2 className="text-4xl font-black text-slate-500">New Product</h2>
            <Link
                to="/"
                className="text-white uppercase rounded-md bg-slate-500 p-2 text-sm font-bold shadow-sm hover:bg-slate-600"
            >
                Registrar Producto
            </Link>
        </div>
    </>

  )
}
