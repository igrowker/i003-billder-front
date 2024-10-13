import { ReusableButton } from "@/ui/components";
import { useNavigate } from "react-router-dom";
import errorImage from "@/assets/error-404.png";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen mx-5">
      <img src={errorImage} alt="error 404" className="w-48 h-auto" />
      <h2 className="text-2xl mb-4">Página no encontrada</h2>
      <ReusableButton className="mt-11" onClick={() => navigate("/")}>
        Volver a la pantalla principal
      </ReusableButton>
    </div>
  );
};
