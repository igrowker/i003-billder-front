import { useContext, useState } from "react";
import { BasicLayout } from "@/layouts/BasicLayout";
import { useAuthStore } from "@/store/authStore";
import {
    InputText,
    OutlineButton,
    ProfileCircle,
    ReusableButton,
} from "@/ui/components";
import { CameraIcon } from "@/assets/icons";
import { useShallow } from 'zustand/shallow';
import { useForm } from "@/hooks/useForm";
import { AlertsContext } from "@/context/AlertsContext";

export const ProfilePage = () => {
    const { newAlert } = useContext(AlertsContext);
    const { logoutUser, user, editUserProfile } = useAuthStore(
        useShallow(state => ({
            logoutUser: state.logoutUser,
            user: state.user,
            editUserProfile: state.editProfile
        })
        ));


    const [isEditing, setIsEditing] = useState(false);


    const { formState: formData, onInputChange, isFormValid } = useForm({
        fullName: user.data?.fullName || "",
        dni: user.data?.dni || "",
        address: user.data?.address || "",
        country: user.data?.country || "",
        city: user.data?.city || "",
        phoneNumber: user.data?.phoneNumber || "",

    }, {
        address: [(value) => value.length < 3, "La dirección tiene que tener mas de 3 caracteres"],
        city: [(value) => value.length < 3, "La ciudad tiene que tener mas de 3 caracteres"],
        country: [(value) => value.length < 2, "El país tiene que tener mas de 2 caracteres"],
        dni: [(value) => value.length < 3, "El DNI tiene que tener mas de 3 caracteres"],
        fullName: [(value) => value.length <= 0, "Este campo no puede ser vacio"],
        phoneNumber: [(value) => value.length < 3, "El teléfono tiene que tener mas de 3 caracteres"],
    });

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };


    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;
        setIsEditing(false);
        const resp = await editUserProfile(formData);
        if (resp.hasErrors === true) {
            newAlert({
                type: 'error',
                message: resp.message
            });
            return;
        }
        newAlert({
            type: 'success',
            message: resp.message
        });

    };

    return (
        <BasicLayout
            canEdit={{
                isEditing: true,
                onClick: handleEditClick,
            }}
            title="Perfil"
            paddingContent={true}
        >
            <div>
                <ProfileCircle middleIcon={<CameraIcon />} />
                <div>
                    <h2 className="font-medium text-xl mb-4">Mis datos</h2>
                    <form className="grid grid-cols-1 gap-6" onSubmit={handleSave}>
                        <InputText
                            id="fullName"
                            disabled={!isEditing}
                            labelText="Nombre completo"
                            placeholder="Nombre completo"
                            name="fullName"
                            defaultValue={formData?.fullName}
                            onChange={onInputChange}
                        />
                        <InputText
                            id="dni"
                            disabled={!isEditing}
                            labelText="DNI"
                            placeholder="Tu DNI"
                            defaultValue={formData?.dni}
                            name="dni"
                            onChange={onInputChange}
                        />
                        <InputText
                            id="address"
                            disabled={!isEditing}
                            labelText="Dirección"
                            placeholder="Dirección"
                            name="address"
                            defaultValue={formData?.address}
                            onChange={onInputChange}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <InputText
                                id="country"
                                disabled={!isEditing}
                                labelText="País"
                                name="country"
                                placeholder="Argentina"
                                defaultValue={formData?.country}
                                onChange={onInputChange}
                            />
                            <InputText
                                id="city"
                                disabled={!isEditing}
                                labelText="Ciudad"
                                placeholder="Quilmes"
                                name="city"
                                defaultValue={formData?.city}
                                onChange={onInputChange}
                            />
                        </div>
                        <InputText
                            id="phoneNumber"
                            disabled={!isEditing}
                            labelText="Teléfono"
                            placeholder="Teléfono"
                            name="phoneNumber"
                            defaultValue={formData?.phoneNumber}
                            onChange={onInputChange}
                        />
                        <ReusableButton disabled={!isEditing} type="submit">
                            Guardar
                        </ReusableButton>

                        <OutlineButton
                            className="text-red-500 hover:text-red-400"
                            type="button"
                            onClick={logoutUser}
                        >
                            Cerrar sesión
                        </OutlineButton>
                    </form>
                </div>
            </div>
        </BasicLayout>
    );
};
