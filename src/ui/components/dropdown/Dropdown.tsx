import { useState, ReactNode } from "react";

interface DropdownProps {
  title: string;
  content: {
    subtitle: string; 
    text: ReactNode; 
  };
}

export const Dropdown = ({ title, content }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 w-full">
      <button
        className="w-full text-left py-4 px-6 flex justify-between items-center hover:bg-gray-100 transition duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="dropdown-content"
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4" id="dropdown-content">
          <h3 className="text-customOrange text-lg font-semibold">
            {content.subtitle}
          </h3>

          <div className="text-gray-600">{content.text}</div>
        </div>
      )}
    </div>
  );
};
