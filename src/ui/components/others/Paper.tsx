import { ReactNode } from "react"


interface PaperProps {
    children?: ReactNode;
}
export const Paper = ({ children }: PaperProps) => {
  return (
    <div className="max-w-[794px] max-h-[1123px]  p-8 my-6  *:text-[12px] bg-white shadow-md">
        {children}
    </div>
  )
}
