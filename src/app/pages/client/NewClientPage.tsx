import { useNavigate } from "react-router-dom";
import { ReturnLayout } from "@/layouts/ReturnLayout";
import { InputText, ReusableButton } from "@/ui/components/";
import { IconBlueCircle } from "@/app/components";
import { PersonIcon } from "@/assets/icons";
import { FormEvent, useContext } from "react";
import { useClientStore } from "@/store/clientStore";
import { FormValidation, useForm } from "@/hooks/useForm";
import { ClientRequest } from "@/interfaces/request/clientRequest.interfaces";
import { AlertsContext } from "@/context/AlertsContext";



const formInitialState: ClientRequest = {
  ciudad: '',
  descripcion: '',
  dni: '',
  email: '',
  direccion: '',
  pais: '',
  nombre: '',
  provincia: '',
  telefono: '',
}

const formValidations: FormValidation<ClientRequest> = {
  ciudad: [(value) => value.length <= 0 , "El campo no puede estar vacío"],
  descripcion: [() => false, "El campo no puede estar vacío"],
  dni: [(value) => value.length <= 0 , "El campo no puede estar vacío"],
  direccion: [(value) => value.length <= 0 , "El campo no puede estar vacío"],
  pais: [(value) => value.length <= 0 , "El campo no puede estar vacío"],
  nombre: [(value) => value.length <= 0 , "El campo no puede estar vacío"],
  provincia: [(value) => value.length <= 0 , "El campo no puede estar vacío"],
  telefono: [(value) => value.length <= 0 , "El campo no puede estar vacío"],
  email: [(value) => !value.includes('@'), "El email debe incluir una @"],
}


export const NewProjectPage = () => {
  const navigate = useNavigate();
  const { formState, onInputChange, isFormValid, formValidation } = useForm(formInitialState, formValidations)
  const createClient = useClientStore(state => state.createClient);
  const { newAlert } = useContext(AlertsContext);



  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    createClient(formState)
      .then(() => {
        newAlert({
          message: 'Cliente creado exitosamente',
          type: 'success',
        });
        navigate("/");
      });


  }
  return (
    <ReturnLayout
      isPending={false}
      title="Nuevo cliente"
      returnFunction={() => navigate("/")}
    >
      <div className="mt-4 grid place-content-center">
        <IconBlueCircle icon={<PersonIcon />} />
      </div>

      <h3 className="font-medium  pt-2 pb-2 text-lg ">
        Completá datos del cliente
      </h3>

      <form className="flex flex-col gap-8" onSubmit={onFormSubmit}>
        <InputText
          value={formState.nombre}
          name="nombre"
          supportText={formValidation.isNombreValid ?? ''}
          required
          id="fullname"
          labelText="Nombre y apellido"
          onChange={onInputChange}
        />
        <InputText
          value={formState.dni}
          name="dni"
          required
          supportText={formValidation.isDniValid ?? ''}
          id="dni"
          labelText="DNI"
          onChange={onInputChange}
        />
        <InputText
          value={formState.direccion}
          name="direccion"
          required
          id="address"
          supportText={formValidation.isDireccionValid ?? ''}
          labelText="Dirección"
          onChange={onInputChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputText
            value={formState.pais}
            name="pais"
            required
            supportText={formValidation.isPaisValid ?? ''}
            id="country"
            labelText="País"
            onChange={onInputChange}
          />
          <InputText
            value={formState.ciudad}
            name="ciudad"
            required
            supportText={formValidation.isCiudadValid ?? ''}
            id="city"
            labelText="Ciudad"
            onChange={onInputChange}
          />
        </div>
        <InputText
          value={formState.provincia}
          name="provincia"
          required
          supportText={formValidation.isProvinciaValid ?? ''}
          id="province"
          labelText="Provincia"
          onChange={onInputChange}
        />
        <InputText
          value={formState.telefono}
          name="telefono"
          required
          supportText={formValidation.isTelefonoValid ?? ''}
          id="phone"
          labelText="Teléfono"
          onChange={onInputChange}
        />
        <InputText
          value={formState.email}
          name="email"
          required
          supportText={formValidation.isEmailValid ?? ''}
          id="email"
          labelText="Correo electrónico"
          onChange={onInputChange}
        />
        <ReusableButton className="mt-4" type="submit">Guardar</ReusableButton>
      </form>
    </ReturnLayout>
  );
};
