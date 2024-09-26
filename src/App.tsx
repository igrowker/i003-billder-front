import { Routes, Route, useNavigate } from "react-router-dom";
import Reusablebutton from "./ui/components/buttons/ReusableButton";
import Modal from "./ui/components/modals/Modal";
import { DocIcon, NewProjectIcon } from "./assets/icons/IconsActionCard";
import ActionCard from "./ui/components/buttons/ActionCard";

import BottomNavBar from "./ui/components/buttons/BottomNavBar";
import { useState } from "react";
import ReusableButton from "./ui/components/buttons/ReusableButton";
import OutlineButton from "./ui/components/buttons/OutlineButton";
import { DownloadIcon, ShareIcon } from "./assets/icons/IconOutlineButton";
import NewPage from "./auth/pages/NewPage";

function App() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Página principal</h1>
                <Reusablebutton
                  text="Ir a página nueva"
                  onClick={() => navigate("/nueva-pagina")}
                />
                <button
                  onClick={openModal}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Abrir Modal
                </button>
              </>
            }
          />
          <Route path="/nueva-pagina" element={<NewPage />} />
        </Routes>
      </div>
      <div className="flex space-x-4 p-4">
        <ActionCard
          icon={<NewProjectIcon />}
          label="Nuevo Proyecto"
          onClick={() => alert("Nuevo proyecto clickeado")}
        />
        <ActionCard
          icon={<DocIcon />}
          label="Crear Documento"
          onClick={() => alert("Crear documento")}
        />
      </div>
      <div className="flex flex-col space-y-4 p-4">
        <OutlineButton
          icon={<ShareIcon />}
          label="Compartir link"
          onClick={() => alert("Link compartido")}
        />
        <OutlineButton
          icon={<DownloadIcon />}
          label="Descargar"
          onClick={() => alert("Descarga iniciada")}
        />
      </div>
      <BottomNavBar />
      <Modal
        isOpen={isModalOpen}
        title="Título del Modal"
        content={<p>Este es un contenido</p>}
        footer={
          <div className="flex flex-col w-full gap-3 shadow-md">
            <ReusableButton text={"Cerrar"} onClick={closeModal} />
            <ReusableButton text={"Confirmar"} onClick={closeModal} />
          </div>
        }
      />
    </>
  );
}

export default App;
