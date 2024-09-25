import { InputText } from "../../ui/components/inputs/InputText"

export const LoginPage = () => {
  return (
    <div className="h-dvh w-full  bg-[#ffa101]">
        <div className=" h-[32%] grid place-content-center">
            <img src="/billder_title.png" className="h-[34px]" alt="Titulo billder" />
        </div>

        <div className="bg-white h-[68%] rounded-t-3xl pt-12 px-4 ">
            <form className="flex flex-col " action="">
                <legend className="text-lg font-medium pl-2 pt-4 pr-1 pb-4 ">Accedé a tu cuenta</legend>

                <InputText
                    labelText="E-mail"
                    type="password"
                    hasErrors
                    supportText="Tiene que ser de mas de 3 caracteres"
                />
            </form>
        </div>

    </div>
  )
}
