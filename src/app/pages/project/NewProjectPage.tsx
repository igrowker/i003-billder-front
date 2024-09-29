import { useNavigate } from "react-router-dom"
import { ReturnLayout } from "../../../layouts/ReturnLayout"
import { InputText, ReusableButton  } from "../../../ui/components/"
import { ProjectCircle } from "../../components/"

export const NewProjectPage = () => {
    const navigate = useNavigate();
    return (
        <ReturnLayout
            isPending={false}
            title="Nuevo proyecto"
            returnFunction={() => navigate('/')}
        >
            <div className="mt-4 grid place-content-center">
                <ProjectCircle/>
            </div>

            <h3 className="font-medium  pt-2 pb-2 text-lg ">Completá datos del cliente</h3>

            <form className="flex flex-col gap-8" action="">
                <InputText
                    id="fullname"
                    labelText="Nombre y apellido"
                />
                <InputText
                    id="dni"
                    labelText="DNI"
                />
                <InputText
                    id="address"
                    labelText="Dirección"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <InputText
                        id="country"
                        labelText="País"
                    />
                    <InputText
                        id="city"
                        labelText="Ciudad"
                    />
                </div>
                <InputText
                    id='province'
                    labelText='Provincia'
                />
                <InputText
                    id="phone"
                    labelText="Teléfono"
                />
                <InputText
                    id="email"
                    labelText="Correo electrónico"
                />
                <ReusableButton type="submit">
                    Guardar
                </ReusableButton>
            </form>

        </ReturnLayout>
    )
}
