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
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dictum ipsum. Praesent eu augue ac augue luctus ultrices non at risus. Duis ac placerat elit. Quisque dui odio, mollis a blandit sit amet, viverra vel nisi"
        />
        <Dropdown
          title="2. Creación de un Proyecto"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dictum ipsum. Praesent eu augue ac augue luctus ultrices non at risus. Duis ac placerat elit. Quisque dui odio, mollis a blandit sit amet, viverra vel nisi"
        />
        <Dropdown
          title="3. Creación de Documentos"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dictum ipsum. Praesent eu augue ac augue luctus ultrices non at risus. Duis ac placerat elit. Quisque dui odio, mollis a blandit sit amet, viverra vel nisi"
        />
        <Dropdown
          title="4. Seguimiento de Documentos"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dictum ipsum. Praesent eu augue ac augue luctus ultrices non at risus. Duis ac placerat elit. Quisque dui odio, mollis a blandit sit amet, viverra vel nisi"
        />
      </div>
    </ReturnLayout>
  );
};
