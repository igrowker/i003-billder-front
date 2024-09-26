import { useNavigate } from "react-router-dom";
import ReusableButton from "../../ui/components/buttons/ReusableButton";
import BottomNavBar from "../../ui/components/buttons/BottomNavBar";

function NewPage() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Nueva pagina</h1>
        <p>Has llegado a la nueva página</p>
        <ReusableButton text="Volver" onClick={() => navigate("/")} />
      </div>
      <BottomNavBar />
    </>
  );
}

export default NewPage;
