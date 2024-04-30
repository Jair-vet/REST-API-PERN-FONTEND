import { PropsWithChildren } from "react"


export const ErrorMessage = ({children} : PropsWithChildren) => {
  return (
    <div className="text-red-800 text-center bg-red-200 uppercase text-sm font-bold p-2 mt-4 rounded-md">
        {children}
    </div>
  )
}
