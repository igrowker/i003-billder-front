import { ConfirmationComponent } from "@/ui/components/confirmation";
import { useNavigate } from "react-router-dom";

export const ConfirmationPage = () => {
  const navigate = useNavigate();
  const handleFinalize = () => {
    navigate("/");
  };

  return (
    <ConfirmationComponent
      title="Confirmación"
      message="El documento fue creado y enviado exitosamente"
      onFinalize={handleFinalize}
    />
  );
};
