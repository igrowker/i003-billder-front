import { useNavigate } from "react-router-dom";
import { InputText, ReusableButton, OutlineButton } from "@/ui/components/";
import { FormValidation, useForm } from "@/hooks/useForm";
import { UserLoginCredentials } from "@/interfaces/request";
import { useAuthStore } from "@/store/authStore";
import { useContext } from "react";
import { AlertsContext } from "@/context/AlertsContext";



const formInitialState: UserLoginCredentials = {
  email: '',
  password: '',
}

const formValidations: FormValidation<UserLoginCredentials> = {
  email: [(value) => !value.includes('@'), "El email debe incluir una @"],
  password: [() => false, ""],
}


export const LoginPage = () => {
  const navigate = useNavigate();
  const { formState, onInputChange, formValidation } = useForm(formInitialState, formValidations)
  const loginUser = useAuthStore((state) => state.loginUser);
  const { newAlert } = useContext(AlertsContext);

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { hasErrors, message } = await loginUser(formState)
    if (hasErrors) {
      newAlert({
        type: 'error',
        message: message
      })
      return;
    };
    navigate('/')
    newAlert({
      type: 'success',
      message: message
    });
    
  };
  
  return (
    <div className="h-dvh w-full  bg-customOrange">
      <div className=" h-[32%] grid place-content-center">
        <img
          src="/billder_title.png"
          className="h-[34px] "
          alt="Titulo billder"
        />
      </div>

      <div className="bg-customWhite h-[68%] rounded-t-3xl pt-12 px-4 ">
        <form className="flex flex-col  " onSubmit={onFormSubmit}>
          <legend className="text-lg font-medium pl-2 pt-4 pr-1 pb-4 ">
            Accedé a tu cuenta
          </legend>
          <div className="flex flex-col gap-10 mb-5">
            <InputText
              autoFocus
              autoComplete="off"
              id="email"
              name="email"
              onChange={onInputChange}
              value={formState.email}
              supportText={formValidation.isEmailValid ?? ''}
              labelText="E-mail"
              type="text"
              required
            />

            <InputText
              name="password"
              onChange={onInputChange}
              value={formState.password}
              autoComplete="off"
              id="password"
              labelText="Contraseña"
              type="password"
              required
            />
          </div>
          {/* <p className="underline text-end cursor-pointer ">
            Olvidé mi contraseña
          </p> */}
          <div className="mt-2 flex flex-col gap-4">
            <ReusableButton type="submit">Iniciar sesión</ReusableButton>
            <OutlineButton type="button" onClick={() => navigate("/auth/register")}>
              Registrarse
            </OutlineButton>
          </div>
        </form>
      </div>
    </div>
  );
};
