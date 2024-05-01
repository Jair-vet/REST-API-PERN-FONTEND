import { Link, useLoaderData} from 'react-router-dom'
import { getProducts } from '../services/ProductService'
import  ProductDetails from '../components/ProductDetails';
import { Product } from '../types';

export async function loader() {
  const products = await getProducts()
  return products
}

export const Products = () => {

  const products = useLoaderData() as Product[]
  
  return (
    <>
        <div className="flex flex-col md:flex-row md:justify-between">
            <h2 className="text-center md:text-left text-4xl font-black text-slate-500">Products</h2>
            <Link
                to="productos/nuevo"
                className="text-center mt-3 text-white uppercase rounded-md bg-emerald-600 p-2 text-sm font-bold shadow-sm hover:bg-emerald-700"
            >
                Agregar Producto
            </Link>
        </div>
        
        <div className="p-2">
            <table className="w-full mt-5 table-auto">
                <thead className="bg-slate-800 text-white rounded-md">
                    <tr>
                        <th className="p-2">Producto</th>
                        <th className="p-2">Precio</th>
                        <th className="p-2">Disponibilidad</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                      <ProductDetails
                        key={product.id}
                        product={product}
                      />
                  ))}
                </tbody>
            </table>
        </div>
    </>
  ) 
}
