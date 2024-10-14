import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { InputStyles } from "@/interfaces";
import { EyeClosed, EyeOpen } from "@/assets/icons/";

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
  autoFocus = false,

  ...attributes
}: InputProps) => {

  const [isFocused, setIsFocused] = useState(autoFocus ?? false);
  const [canPasswordSee, setCanPasswordSee] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleTogglePasswordSee = () => {
    setCanPasswordSee(prev => !prev);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  // useEffect(() => {
  //   if (emailRef.current) {
  //     emailRef.current.focus();
  //   }
  // }, []);


  const normalStyle = `${isFocused ? "border-[3px] border-customOrange" : ""} disabled:bg-slate-200 disabled:border-0 `;
  const outlinedBlackStyle = "focus:ring-2 focus:ring-orange/600";

  const finalStyle =
    variant === InputStyles.Normal ? normalStyle : outlinedBlackStyle;

  useEffect(() => {
    if (passwordRef.current && passwordRef.current?.value.length > 0) {
      handleFocus()
    }
    if (emailRef.current && emailRef.current.value.length > 0) {
      handleFocus()
    }
  }, [emailRef, passwordRef])

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
            backgroundColor: (attributes.disabled === undefined) ? 'white' : '',
          }}
          className={`
            ${(attributes.disabled !== undefined && attributes?.disabled === false)
              ? 'bg-white'
              : 'bg-slate-200 rounded-sm'
            } 
                w-max z-10 transition-all ease-in-out duration-100 pointer-events-none absolute text-gray-500 top-1/2  left-2 -translate-y-1/2`}
        >
          {labelText}
        </span>

        {type == "text" || type == "number" ? (
          <div className="">
            <input
              ref={emailRef}
              autoComplete="off"
              autoFocus={autoFocus}
              onFocus={handleFocus}
              onBlur={e => {
                if (e.target.value.length === 0) handleBlur();
              }}
              className={`

                    ${finalStyle}
                    rounded-[8px]  
                    ${isFocused ? "" : "placeholder:text-transparent"}
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
              ${isFocused ? "" : "placeholder:text-transparent"}
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
              autoFocus={autoFocus}
              ref={passwordRef}
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
            <button
              type="button"
              className={`bg-white px-2 ${isFocused ? "text-customOrange" : "text-gray-500"}`}
              onClick={handleTogglePasswordSee}
            >
              {canPasswordSee ? <EyeOpen /> : <EyeClosed />}
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
