import { ReactNode } from "react"
import { ChevronIcon } from "../assets/icons/ChevronIcon";


interface ReturnLayoutProps {
    children: ReactNode,
    title: string;
    returnFunction: () => void;
    isPending: boolean;
}

export const ReturnLayout = ({ children, title, returnFunction, isPending }: ReturnLayoutProps) => {
    return (
        <div className="">
            <div className="flex p-3 shadow-md items-center bg-transparent shadow-black/20">
                <button className="w-6 h-6 " onClick={returnFunction}>
                    <ChevronIcon orientation="left" />
                </button>
                <h3 className=" flex-grow text-center font-medium text-lg">{title}</h3>
            </div>
            <div className={`h-[calc(100dvh-52px)] px-4 pb-4 ${isPending ? 'agregar clases animacion' : ''} `}>
                {children}
            </div>
        
        </div>
    )
}
