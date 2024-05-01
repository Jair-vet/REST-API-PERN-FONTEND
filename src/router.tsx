import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { NewProduct, action as newProductAction } from './views/NewProduct'
import { Products, loader as productsLoader } from './views/Products'
import EditProduct from './views/EditProduct'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                // action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path:'productos/:id/editar', // ROA Pattern - Resource-oriented design
                element: <EditProduct />,
                // loader: editProductLoader,
                // action: editProductAction
            }, 
            // {
            //     path:'productos/:id/eliminar',
            //     action: deleteProductAction
            // }
        ]
    }
]) 