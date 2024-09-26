import { InputText } from "../../ui/components/inputs/InputText"

export const LoginPage = () => {
  return (
    <div className="h-dvh w-full  bg-primary">
        <div className=" h-[32%] grid place-content-center">
            <img src="/billder_title.png" className="h-[34px] " alt="Titulo billder" />
        </div>

        <div className="bg-secondary h-[68%] rounded-t-3xl pt-12 px-4 ">
            <form className="flex flex-col  " action="">
                <legend className="text-lg font-medium pl-2 pt-4 pr-1 pb-4 ">Accedé a tu cuenta</legend>
                <div className="flex flex-col gap-10 mb-5">
                    <InputText
                        labelText="E-mail"
                        type="text"
                        supportText="hola mundo a todos"
                    />

                    <InputText
                        labelText="Contraseña"
                        type="password"
                    />

                </div>
                <p className="underline text-end cursor-pointer ">Olvidé mi contraseña</p>
            </form>
        </div>

    </div>
  )
}
