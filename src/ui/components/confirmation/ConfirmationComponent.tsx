import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { ReusableButton } from "@/ui/components/buttons";
import { AnimatedCheckIcon } from "@/ui/components/confirmation/AnimatedCheckIcon";

interface ConfirmationComponentProps {
  title: string;
  message: string;
  onFinalize: () => void;
}

export const ConfirmationComponent = ({
  title,
  message,
  onFinalize,
}: ConfirmationComponentProps) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0); // Cambiar la opacidad a 0
      const fadeOutTimer = setTimeout(() => {
        setShowConfetti(false); // Ocultar el confeti después de la transición
      }, 500);
      return () => clearTimeout(fadeOutTimer);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-customOrange flex flex-col justify-between fixed inset-0 z-[9999]">
      <div className="flex justify-center items-center p-3 bg-customOrange shadow-md shadow-black/20">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center px-4 relative">
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={60}
            style={{
              opacity: opacity,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        )}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center w-full max-w-md h-96 flex flex-col items-center justify-center relative">
          <div>
            <AnimatedCheckIcon />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {message}
          </h2>
        </div>
      </div>

      <div className="p-4">
        <ReusableButton onClick={onFinalize}>Finalizar</ReusableButton>
      </div>
    </div>
  );
};
