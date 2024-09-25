import { useRef, useState } from "react"
import { TextFieldProps } from "../../interfaces/textfield.interface"



const outlined = 'border-[1px] p-2 rounded-sm shadow-sm focus:outline-none transition-all focus:border-blue-500  focus:border-2 hover:border-black'
const borderless = 'border-b-[1px] p-2 shadow-md rounded-sm focus:outline-none transition-all focus:border-blue-500  focus:border-b-2 hover:border-black'
const elegant = 'shadow-[1px_-11px_39px_-7px_rgba(0,0,0,0.13)_inset]'

export const TextField = ({ label, variant, ...inputAttributes }: TextFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);


    const inputRef = useRef<HTMLInputElement>(null);
    const styleTextFieldFinal = variant === 'borderless' ? borderless : variant === 'elegant' ? elegant : outlined

    return (
        <label
            className="relative cursor-text "
            onFocus={() => {
                setIsFocused(true);
                inputRef.current?.focus()
            }}
            onBlur={() => {
                inputRef.current?.value !== ''
                    ? {}
                    : setIsFocused(false)
            }}
        >
            {
                (label)
                    ? <span className={`pointer-events-none text-slate-600 font-medium  bg-white px-2 transition-all leading-none   left-2 -translate-y-1/2  absolute top-1/2 ${isFocused ? '-top-full text-sm -translate-y-0' : ''}`}>{label}</span>
                    : ''
            }
            <input
                ref={inputRef}
                {...inputAttributes}
                className={styleTextFieldFinal}
                type="text"

            />
        </label>
    )
}
