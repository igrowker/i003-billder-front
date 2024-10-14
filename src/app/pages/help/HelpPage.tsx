import { ReturnLayout } from "@/layouts/ReturnLayout";
import { Dropdown } from "@/ui/components/dropdown";
import { useNavigate } from "react-router-dom";

export const HelpPage = () => {
  const navigate = useNavigate();
  return (
    <ReturnLayout
      canEdit={{
        isEditing: true,
        onClick() {},
      }}
      title="Ayuda"
      paddingContent={true}
      returnFunction={() => navigate(-1)}
    >
      <div>
        <h2 className="text-xl font-semibold px-6 py-4">
          Guía rápida para usar Billder
        </h2>
        <p className="text-gray-500 px-6">
          Conocé cómo gestionar tus proyectos
        </p>
      </div>

      <div className="max-w-lg w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-8 space-y-4">
        <Dropdown
          title="1. Registro del Usuario"
          content={{
            subtitle: "Datos de Registro y Firma",
            text: "Los datos que cargaste al registrarte, como tu nombre (que será la firma en los documentos), serán usados para crear los presupuestos y acuerdos de obra. Podés revisar y modificar estos datos en la sección de perfil.",
          }}
        />

        <Dropdown
          title="2. Creación de un Proyecto"
          content={{
            subtitle: "Datos del Proyecto",
            text: "Ingresás los datos del cliente y de la obra. Estos se usarán para generar documentos y hacer seguimiento. También podés editar la información del cliente y de la obra en cualquier momento.",
          }}
        />

        <Dropdown
          title="3. Creación de Documentos"
          content={{
            subtitle:
              "Dentro del proyecto podés generar dos tipos de documentos",
            text: (
              <div>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    <strong>a) Presupuesto</strong>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Cálculo del Trabajo:</strong> Podés calcular el
                        trabajo ingresando días, horas y metros, y también podés
                        agregar otros gastos. Al tocar el botón "Añadir", se
                        reflejará el total automáticamente.
                      </li>
                      <li>
                        <strong>Generación:</strong> Previsualizás el
                        presupuesto y lo podés enviar digitalmente o descargar.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>b) Acuerdo de Obra</strong>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Detalles de Pago y Plazos:</strong> Completás el
                        formulario con la forma de pago (efectivo,
                        transferencia) y los plazos de entrega.
                      </li>
                      <li>
                        <strong>Generación:</strong> Previsualizás el acuerdo y
                        lo podés enviar o descargar.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            ),
          }}
        />
        <Dropdown
          title="4. Seguimiento de Documentos"
          content={{
            subtitle: "Estado del Documento",
            text: "Podés ver si el documento está en borrador, enviado, confirmado o desaprobado Gestión: Podés visualizar, compartir y descargar los documentos desde la sección de seguimiento.",
          }}
        />
      </div>
    </ReturnLayout>
  );
};
