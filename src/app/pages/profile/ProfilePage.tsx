import { BasicLayout } from "@/layouts/BasicLayout";
import { useAuthStore } from "@/store/authStore";
import { InputText, ProfileCircle, ReusableButton } from "@/ui/components";

export const ProfilePage = () => {
  const user = useAuthStore(state => state.user);
  const logoutUser = useAuthStore(state => state.logoutUser);
  return (
    <BasicLayout
      canEdit={{
        isEditing: true,
        onClick() {},
      }}
      title="Perfil"
      paddingContent={true}
    >
      <div>
        <ProfileCircle />
        <div>
          <h2 className="font-medium text-xl mb-4">Mis datos</h2>
          <form className="grid grid-cols-1 gap-6">
            <InputText
              id="name"
              disabled
              labelText="Nombre completo"
              placeholder="Nombre completo"
              defaultValue={user.data?.dni}
            />
            <InputText
              id="dni"
              disabled
              labelText="DNI"
              placeholder="Tu DNI"
              defaultValue={user.data?.dni}
            />
            <InputText
              id="adress"
              disabled
              labelText="Dirección"
              placeholder="Dirección"
              defaultValue={user.data?.address}
            />
            <div className="grid grid-cols-2 gap-4">
              <InputText
                id="country"
                disabled
                labelText="País"
                placeholder="Argentina"
                defaultValue={user.data?.country}
              />
              <InputText
                id="city"
                disabled
                labelText="Ciudad"
                placeholder="Quilmes"
                defaultValue={user.data?.city}
              />
            </div>
            <InputText
              id="phone"
              disabled
              labelText="Teléfono"
              placeholder="Teléfono"
              defaultValue={user.data?.phoneNumber}
            />
            {/* <div className="mt-4">
                            <h3 className="font-medium text-xl">Firma registrada</h3>
                            <InputText
                                id="signature"
                                disabled
                                labelText="Joaquin Feola"
                                defaultValue={user.data?.dni}
                            />
                        </div> */}
            <ReusableButton type="submit" disabled>
              Guardar
            </ReusableButton>
            <ReusableButton type="button" onClick={logoutUser}>
              Cerrar sesión
            </ReusableButton>
          </form>
        </div>
      </div>
    </BasicLayout>
  );
};
