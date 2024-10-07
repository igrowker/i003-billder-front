import { ReturnLayout } from "@/layouts/ReturnLayout"
import { InputText, ProfileCircle } from "@/ui/components"
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
                        <InputText labelText="Nombre completo" placeholder="Nombre completo" />
                        <InputText labelText="DNI" placeholder="Tu DNI" />
                        <InputText labelText="Dirección" placeholder="Dirección" />
                        <div className="grid grid-cols-2 gap-4">
                            <InputText labelText="País" placeholder="Argentina" />
                            <InputText labelText="Ciudad" placeholder="Quilmes" />
                        </div>
                        <InputText labelText="Provincia" placeholder="Buenos Aires" />
                        <InputText labelText="Teléfono" placeholder="Teléfono" />
                    </form>
                    <div className="mt-4">
                        <h3 className="font-medium text-xl">Firma registrada</h3>
                        <h3>Firma digital</h3>
                    </div>
                </div>
            </div>


        </ReturnLayout>
    )
}
