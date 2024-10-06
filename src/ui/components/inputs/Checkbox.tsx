import React from "react";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        id={id}
        className="mr-2 checked:before:content-['✓'] before:absolute before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:left-1/2 relative border-customOrange checked:text-white checked:bg-customOrange transition-all duration-200 appearance-none w-4 h-4 rounded-sm border-2"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};
