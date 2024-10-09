import { OutlineButton } from "@/ui/components";
import { DownloadIcon, ShareIcon } from "@/assets/icons";
import { FullScreenLoader } from "@/ui/components/spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BudgetContract } from "./BudgetContract";

interface Item {
  nombre: string;
  quantity: number;
  precio: number;
}

interface BudgetViewDocumentTabProps {
  budgetItems: Item[];
}

export const BudgetViewDocumentTab = ({ budgetItems }: BudgetViewDocumentTabProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/confirmation");
    }, 1000);
  };

  return (
    <div>
      <h3 className="font-medium">
        Revisá el documento y envialo a tu cliente para confirmar el presupuesto.
      </h3>
      <BudgetContract budgetItems={budgetItems} />
      <div className="flex items-center gap-4">
        <OutlineButton className="" onClick={handleSend}>
          <ShareIcon />
          <span className="mx-3">Compartir</span>
        </OutlineButton>
        <OutlineButton>
          <DownloadIcon />
          <span className="mx-3">Descargar</span>
        </OutlineButton>

        <FullScreenLoader message="Enviando presupuesto" isVisible={loading} />
      </div>
    </div>
  );
};
