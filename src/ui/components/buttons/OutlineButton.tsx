interface OutLineButtonProps {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
}

const OutlineButton = ({ icon, label, onClick }: OutLineButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full p-2 border-2 border-customOrange rounded-lg bg-white text-black font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center space-x-2">
        <span className="text-lg">{icon}</span>
        <span>{label}</span>
      </div>
    </button>
  );
};

export default OutlineButton;
