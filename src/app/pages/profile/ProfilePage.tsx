import { ReturnLayout } from "@/layouts/ReturnLayout"
import { InputText, ProfileCircle, ReusableButton } from "@/ui/components"
import { useNavigate } from "react-router-dom"



export const ProfilePage = () => {
    const navigate = useNavigate()
    return (
        <ReturnLayout
            canEdit={{
                isEditing: true,
                onClick() {

                },
            }}
            title="Perfil"
            paddingContent={true}

            returnFunction={() => navigate(-1)}
        >
            <div>
                <ProfileCircle />
                <div>
                    <h2 className="font-medium text-xl mb-4">Mis datos</h2>
                    <form className="grid grid-cols-1 gap-6">
                        <InputText id="name" disabled  labelText="Nombre completo" placeholder="Nombre completo" />
                        <InputText id="dni" disabled  labelText="DNI" placeholder="Tu DNI" />
                        <InputText id="adress" disabled labelText="Dirección" placeholder="Dirección" />
                        <div className="grid grid-cols-2 gap-4">
                            <InputText id="country"  disabled labelText="País" placeholder="Argentina" />
                            <InputText id="city"  disabled labelText="Ciudad" placeholder="Quilmes" />
                        </div>
                        <InputText id="state" disabled  labelText="Provincia" placeholder="Buenos Aires" />
                        <InputText id="phone" disabled  labelText="Teléfono" placeholder="Teléfono" />
                        <div className="mt-4">
                            <h3 className="font-medium text-xl">Firma registrada</h3>
                            <InputText  id="signature" disabled labelText="Joaquin Feola" />
                        </div>
                        <ReusableButton type="submit" disabled>
                            Guardar
                        </ReusableButton>
                    </form>

                </div>
            </div>


        </ReturnLayout>
    )
}
