import { TextareaHTMLAttributes, useState } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    labelText: string;
    fullWidth?: boolean;
    supportText?: string;
    hasErrors?: boolean;
  }


export const TextArea = ({
    labelText,
    hasErrors = false,
    fullWidth = true,
    supportText,
    ...attributes
}: TextAreaProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };
    
      const normalStyle = `${isFocused ? "border-[3px] border-customOrange" : ""} disabled:bg-slate-200 `;
  return (
    <div className="relative ">
      <label
        htmlFor={attributes.id ?? ""}
        className={`relative cursor-text   `}
      >
        <span
          style={{
            top: isFocused ? "0px" : "20px",
            fontSize: isFocused ? "14px" : "16px",
            paddingInline: isFocused ? "8px" : 0,
            backgroundColor: isFocused ? "white" : "",
          }}
        
          className={` z-10  transition-all ease-in-out duration-100 pointer-events-none absolute text-gray-500 top-1/2  left-2 -translate-y-1/2`}
        >
          {labelText}
        </span>

          <div className="">
            <textarea
           
              autoComplete="off"

              onFocus={handleFocus}
              onBlur={e => {
                if (e.target.value.length === 0) handleBlur();
              }}
              className={`
                    resize-none
                    ${normalStyle}
                    py-2
                    rounded-[8px]  
                    ${isFocused ? '' : 'placeholder:text-transparent'}
                    min-h-[50px] 
                    ${fullWidth ? "w-full" : ""}
                    shadow-md 
                    px-4 
                    
                    transition-all
                    ease-in
                    duration-100
                    outline-none
                    focus:outline-none`}
              {...attributes}
            />
          </div>
        
      </label>
      <span
        className={`${hasErrors ? "text-red-500" : ""
          } absolute top-[110%]  w-[calc(100%-4px)] text-xs select-none text-gray-600 left-1`}
      >
        {supportText}
      </span>
    </div>
  )
}
