import { InputHTMLAttributes, useRef, useState } from "react";
import { InputStyles } from "@/interfaces";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "password" | "text" | "number";
  placeholder?: string;
  labelText: string;
  fullWidth?: boolean;
  variant?: `${InputStyles}`;
  supportText?: string;
  hasErrors?: boolean;
}

export const InputText = ({
  type = "text",
  variant = InputStyles.Normal,
  labelText,
  hasErrors = false,
  fullWidth = true,
  supportText,

  ...attributes
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [canPasswordSee, setCanPasswordSee] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleTogglePasswordSee = () => {
    setCanPasswordSee(prev => !prev);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const normalStyle = `${isFocused ? "border-[3px] border-customOrange" : ""} disabled:bg-slate-200 `;
  const outlinedBlackStyle = "focus:ring-2 focus:ring-orange/600";

  const finalStyle =
    variant === InputStyles.Normal ? normalStyle : outlinedBlackStyle;



  return (
    <div className="relative ">
      <label
        htmlFor={attributes.id ?? ""}
        className={`relative cursor-text   `}
      >
        <span
          style={{
            top: isFocused ? "0px" : "50%",
            fontSize: isFocused ? "14px" : "16px",
            paddingInline: isFocused ? "8px" : 0,
            backgroundColor: isFocused ? "white" : "",
          }}
          className={` z-10 transition-all ease-in-out duration-100 pointer-events-none absolute text-gray-500 top-1/2  left-2 -translate-y-1/2`}
        >
          {labelText}
        </span>

        {type == "text" || type == "number" ? (
          <div className="">
            <input
              ref={inputRef}
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={e => {
                if (e.target.value.length === 0) handleBlur();
              }}
              className={`

                    ${finalStyle}
                    rounded-[4px]  
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
              type={type}
              {...attributes}
            />
          </div>
        ) : (
          <div

            className={`${finalStyle}
              rounded-[6px]  
              min-h-[50px] 
              max-h-[50px]
              h-[50px]
              shadow-md 
              ${isFocused ? '' : 'placeholder:text-transparent'}
              ${fullWidth ? "w-full" : ""}
              
              transition-all
              ease-in
              duration-100
              outline-none
              overflow-hidden
              relative
               flex`}
          >
            <input
              ref={inputRef}
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={e => {
                if (e.target.value.length === 0) handleBlur();
              }}
              className={`
                  w-full h-full
                  px-4 
                  focus:outline-none
              `}
              type={canPasswordSee ? "text" : "password"}
              {...attributes}
            />
            {/* Código hardcodeado, crear componentes de iconos de: Ojo abierto y Ojo cerrado */}
            <button
              type="button"
              className={`bg-white px-2 ${isFocused ? 'text-customOrange' : 'text-gray-500'}`}
              onClick={handleTogglePasswordSee}
            >
              {canPasswordSee ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
        )}
      </label>
      <span
        className={`${hasErrors ? "text-red-500" : ""
          } absolute top-[110%]  w-[calc(100%-4px)] text-xs select-none text-gray-600 left-1`}
      >
        {supportText}
      </span>
    </div>
  );
};
