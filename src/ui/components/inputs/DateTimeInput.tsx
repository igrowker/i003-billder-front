import { InputHTMLAttributes } from "react"

interface DateTimeInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'date'
}

export const DateTimeInput = ({ className, type="date", ...attributes }: DateTimeInputProps) => {
  return (
    <input
        className={`${className}  p-2 shadow-md rounded-md w-full cursor-pointer`} 
        type={type}
        {...attributes}
    />

  )
}
