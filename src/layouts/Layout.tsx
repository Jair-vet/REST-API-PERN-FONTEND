import { Outlet } from "react-router-dom"


export const Layout = () => {
  return (
    <>
        <header className="bg-slate-800">
            <div className="mx-auto max-w-6xl py-10">
                <h1 className="text-4xl text-center uppercase text-white font-extrabold">
                    Administrador de <span className="text-violet-400">Productos</span>
                </h1>
            </div>
        </header>

        <main className="mt-10 mx-auto md:max-w-4xl max-w-md p-10 bg-white shadow-md rounded-md">
            <Outlet />
        </main>

    </>
  )
}
