import { SearchIcon } from "@/assets/icons/"
import { InputHTMLAttributes } from "react"


// interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {

// }

export const SearchInput = ({ className, placeholder="Buscar", ...attributes }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className="relative mb-4 shadow-lg">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon />
            </span>
            <input
                type="search"
                placeholder={placeholder}
                {...attributes}
                className={`w-full pl-10 p-2 border border-gray-300 rounded-lg ${className}`}
            />
        </div>)
}
