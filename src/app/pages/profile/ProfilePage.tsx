import { ReturnLayout } from "@/layouts/ReturnLayout"
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
            f

        </ReturnLayout>
    )
}
