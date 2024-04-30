import { Link } from "react-router-dom"


export const Products = () => {
  return (
    <>
        <div className="flex justify-between">
            <h2 className="text-4xl font-black text-slate-500">Products</h2>
            <Link
                to="productos/nuevo"
                className="text-white uppercase rounded-md bg-emerald-600 p-2 text-sm font-bold shadow-sm hover:bg-emerald-700"
            >
                Agregar Producto
            </Link>
        </div>
    </>
  )
}
