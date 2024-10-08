import React from "react";
import { CloseIcon } from "@/assets/icons/";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
  showCloseButton?: boolean; // Propiedad opcional para mostrar el botón de cierre
}

export const Modal = ({
  isOpen,
  title,
  footer,
  children,
  onClose,
  showCloseButton = true,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-70">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs relative">
        {showCloseButton && (
          <button
            className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <CloseIcon />
          </button>
        )}
        {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
        <div className="mb-4">{children}</div>
        <div className="flex justify-end">{footer ? footer : <></>}</div>
      </div>
    </div>
  );
};
