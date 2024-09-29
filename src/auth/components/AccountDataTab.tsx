import { InputText, ReusableButton } from "../../ui/components/"



export const AccountDataTab = () => {

    
    return (
        <div className="flex flex-col h-full flex-grow">
            <div className="flex-grow">

                <h3 className="font-medium  pt-2 pb-1 text-lg text-customOrange">Completá los datos de la cuenta</h3>
                <div className="flex flex-col gap-5">
                    <InputText
                        id="email"
                        labelText="E-mail"
                    />
                    <InputText 
                        type="password"
                        id="contraseña"
                        labelText="Contraseña"
                    />
                    <InputText 
                        id="repeatpassword"
                        type="password"
                        labelText="Repetí la contraseña"
                    />
                </div>
            </div>
            <ReusableButton>
              Crear cuenta  
            </ReusableButton>
        </div>
    )
}
