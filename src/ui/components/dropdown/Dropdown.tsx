import { useState } from "react";

interface DropdownProps {
  title: string;
  content: string;
}

export const Dropdown = ({ title, content }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-6 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
