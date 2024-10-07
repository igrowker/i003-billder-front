import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { ReusableButton } from "../buttons";
import { AnimatedCheckIcon } from "./AnimatedCheckIcon";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-yellow-400 flex flex-col justify-between fixed inset-0 z-[9999]">
      <div className="flex justify-center items-center p-3 bg-yellow-400 shadow-md shadow-black/20">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center px-4 relative">
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={50}
          />
        )}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center w-full max-w-md h-96 flex flex-col items-center justify-center relative">
          <div>
            <AnimatedCheckIcon />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {message}
          </h2>
          <p className="text-gray-600">Aguarda la firma del cliente</p>
        </div>
      </div>

      <div className="p-4">
        <ReusableButton onClick={onFinalize}>Finalizar</ReusableButton>
      </div>
    </div>
  );
};
