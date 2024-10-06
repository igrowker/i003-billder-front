import { ConfirmationComponent } from "@/ui/components/confirmation";

const ConfirmationPage = () => {
  const handleFinalize = () => {
    console.log("Proceso finalizado");
  };

  return (
    <ConfirmationComponent
      title="Confirmación"
      message="El acuerdo de obra fue creado y enviado exitosamente"
      onFinalize={handleFinalize}
    />
  );
};

export default ConfirmationPage;
