import { Modal, OutlineButton } from "@/ui/components";
import { DocIcon, ShareIcon } from "@/assets/icons";
import { useState } from "react";
import { FullScreenLoader } from "@/ui/components/spinner/FullScreenLoader";
import { useNavigate } from "react-router-dom";
import { WorkContract } from "./WorkContract";

export const ProjectAgreementTab4 = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    setShowModal(false);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/confirmation");
    }, 2000);
  };

  return (
    <div className="my-6">
      <h1 className="text-xl font-semibold mb-6 text-customOrange">
        Paso 4: ¡Todo listo!
      </h1>
      <p className="text-gray-500 mt-1">
        Revisa el documento y envíalo a tu cliente para que firme el acuerdo.
      </p>
      <WorkContract />
      <div className="mt-2 flex flex-col gap-4">
        <OutlineButton
          onClick={() => {
            setShowModal(true);
          }}
        >
          <ShareIcon className="mr-2" />
          Compartir Link
        </OutlineButton>
        <OutlineButton>
          <DocIcon className="mr-2" /> Descargar
        </OutlineButton>
      </div>
      <Modal
        isOpen={showModal}
        title="¿Listo para enviar este documento?"
        footer={
          <div className="flex gap-10">
            <button
              className="text-customOrange"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button
              className="text-customOrange"
              onClick={handleSend}
              disabled={loading}
            >
              Enviar
            </button>
          </div>
        }
      >
        <p>Una vez enviado, no podrás editar este acuerdo de obra.</p>
      </Modal>
      <FullScreenLoader
        message="Enviando acuerdo de obra"
        isVisible={loading}
      />
    </div>
  );
};
