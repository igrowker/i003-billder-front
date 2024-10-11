import { useForm } from "@/hooks/useForm"
import { ProjectRequest } from "@/interfaces/request";
import { ReturnLayout } from "@/layouts/ReturnLayout"
import { useProjectStore } from "@/store/projectStore";
import { DateTimeInput, ReusableButton } from "@/ui/components"
import { TextArea } from "@/ui/components/inputs/TextArea";
import { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useShallow } from "zustand/shallow";




export const NewProjectPage = () => {
    const { clientId } = useParams();
    const { createProject, isProjectsLoading } = useProjectStore(useShallow(state => ({ createProject: state.createProject, isProjectsLoading: state.isLoading })))
    const { formState, onInputChange, isFormValid } = useForm<ProjectRequest>(
        {
            description: "",
            fecha: "",
            estado: "En progreso",
            clienteId: Number(clientId)
        },
        {
            description: [(value) => value.length <= 0, "El campo no puede estar vacío"],
            fecha: [(value) => value.length <= 0, "El campo no puede estar vacío"],
            estado: [(value) => value.length <= 0, "El campo no puede estar vacío"],
            clienteId: [(value) => value <= 0, "El campo no puede estar vacío"],
        }
    );

    const navigate = useNavigate();
    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid) return;
        createProject(formState)
                .then(() => {
                    navigate(`/client/${clientId}`)
                });
    }

    console.log(clientId)
    return (
        <ReturnLayout
            returnFunction={() => navigate(`/client/${clientId}`)}
            title="Nuevo proyecto"
            paddingContent={true}

        >
            <h3 className="font-medium my-4">Completá con los datos de la obra</h3>
            <form onSubmit={onFormSubmit} className="flex flex-col gap-6">

                <TextArea
                    required
                    rows={3}
                    value={formState.description}
                    onChange={onInputChange}
                    name="description"
                    labelText="Descripción"
                    id="descripcion"
                    disabled={isProjectsLoading}
                />
                <DateTimeInput
                    required
                    disabled={isProjectsLoading}
                    value={formState.fecha}
                    onChange={onInputChange}
                    name="fecha"
                    labelText="Inicio de obra"
                    id="descripcion"
                />


                <ReusableButton type="submit">Guardar</ReusableButton>

            </form>
        </ReturnLayout>
    )
}
