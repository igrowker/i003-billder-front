import { Modal, OutlineButton } from "@/ui/components";
import { BudgetContract } from "@/app/components";
import { DownloadIcon, ShareIcon } from "@/assets/icons";
import { FullScreenLoader } from "@/ui/components/spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BudgetViewDocumentTab = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    setShowModal(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/confirmation");
    }, 1000);
  };

  return (
    <div>
      <h3 className="font-medium">
        Revisá el documento y envialo a tu cliente para confirmar el
        presupuesto.
      </h3>
      <BudgetContract />
      <div className="flex items-center gap-4">
        <OutlineButton
          className=""
          onClick={() => {
            setShowModal(true);
          }}
        >
          <ShareIcon />
          <span className="mx-3">Compartir</span>
        </OutlineButton>
        <OutlineButton>
          <DownloadIcon />
          <span className="mx-3">Descargar</span>
        </OutlineButton>
        <Modal
          isOpen={showModal}
          title="¿Listo para enviar este documento?"
          onClose={() => setShowModal(false)}
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
          showCloseButton={false}
        >
          <p>Seguro quiere enviar el presupuesto de obra</p>
        </Modal>
        <FullScreenLoader message="Enviando presupuesto" isVisible={loading} />
      </div>
    </div>
  );
};
