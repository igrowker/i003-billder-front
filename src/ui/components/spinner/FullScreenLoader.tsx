import { Spinner } from "@/ui/components/spinner/Spinner";

interface FullScreenLoaderProps {
  message?: string;
  isVisible: boolean;
}

export const FullScreenLoader = ({
  message = "Cargando...",
  isVisible,
}: FullScreenLoaderProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <Spinner />
      <p className="mt-8 text-gray-600">{message}</p>
    </div>
  );
};
