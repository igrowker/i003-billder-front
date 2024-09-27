interface ModalProps {
  isOpen: boolean;
  title?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal = ({ isOpen, title, content, footer }: ModalProps) => {
  if (!isOpen) return null;

  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-70">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs">
        {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
        <div className="mb-4">{content}</div>
        <div className="flex justify-end">{footer ? footer : <></>}</div>
      </div>
    </div>
  );
};

export default Modal;
