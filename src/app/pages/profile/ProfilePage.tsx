import { useState } from "react";
import { BasicLayout } from "@/layouts/BasicLayout";
import { useAuthStore } from "@/store/authStore";
import {
  InputText,
  OutlineButton,
  ProfileCircle,
  ReusableButton,
} from "@/ui/components";
import { CameraIcon } from "@/assets/icons";

export const ProfilePage = () => {
  const user = useAuthStore(state => state.user);
  const logoutUser = useAuthStore(state => state.logoutUser);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user.data?.fullName || "",
    dni: user.data?.dni || "",
    address: user.data?.address || "",
    country: user.data?.country || "",
    city: user.data?.city || "",
    phoneNumber: user.data?.phoneNumber || "",
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Función para guardar los cambios (de momento sin API)
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos guardados:", formData); // Aquí iría la llamada a updateUser cuando se cree el endpoint
    setIsEditing(false); // Deshabilitar edición después de guardar
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
              labelText=""
              placeholder="Nombre completo"
              defaultValue={formData.fullName}
              onChange={handleInputChange}
            />
            <InputText
              id="dni"
              disabled={!isEditing}
              labelText=""
              placeholder="Tu DNI"
              defaultValue={formData.dni}
              onChange={handleInputChange}
            />
            <InputText
              id="address"
              disabled={!isEditing}
              labelText=""
              placeholder="Dirección"
              defaultValue={formData.address}
              onChange={handleInputChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <InputText
                id="country"
                disabled={!isEditing}
                labelText=""
                placeholder="Argentina"
                defaultValue={formData.country}
                onChange={handleInputChange}
              />
              <InputText
                id="city"
                disabled={!isEditing}
                labelText=""
                placeholder="Quilmes"
                defaultValue={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <InputText
              id="phoneNumber"
              disabled={!isEditing}
              labelText=""
              placeholder="Teléfono"
              defaultValue={formData.phoneNumber}
              onChange={handleInputChange}
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
