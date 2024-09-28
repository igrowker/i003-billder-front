import { useNavigate } from "react-router-dom"
import OutlineButton from "../../ui/components/buttons/OutlineButton"
import ReusableButton from "../../ui/components/buttons/ReusableButton"
import { InputText } from "../../ui/components/inputs/InputText"

export const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <div className="h-dvh w-full  bg-customOrange">
            <div className=" h-[32%] grid place-content-center">
                <img src="/billder_title.png" className="h-[34px] " alt="Titulo billder" />
            </div>

            <div className="bg-customWhite h-[68%] rounded-t-3xl pt-12 px-4 ">
                <form className="flex flex-col  " action="">
                    <legend className="text-lg font-medium pl-2 pt-4 pr-1 pb-4 ">Accedé a tu cuenta</legend>
                    <div className="flex flex-col gap-10 mb-5">
                        <InputText
                            autoComplete="off"
                            id="email"
                            labelText="E-mail"
                            type="text"
                        />

                        <InputText
                            autoComplete="off"
                            id="password"
                            labelText="Contraseña"
                            type="password"
                        />

                    </div>
                    <p className="underline text-end cursor-pointer ">Olvidé mi contraseña</p>
                    <div className="mt-2 flex flex-col gap-4">
                        <ReusableButton type="submit">Iniciar sesión</ReusableButton>
                        <OutlineButton onClick={() => navigate('/auth/register')}>Registrarse</OutlineButton>

                    </div>
                </form>
            </div>

        </div>
    )
}
