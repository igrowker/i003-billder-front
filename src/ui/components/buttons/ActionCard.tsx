interface ActionCardProps {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
}

const ActionCard = ({ icon, label, onClick }: ActionCardProps) => {
  return (
    <div
      className="flex items-center justify-center w-40 h-20 bg-customOrange hover:bg-orange-500 text-white font-semibold rounded-2xl cursor-pointer shadow-md transition-all duration-300 ease-in-out "
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <div className="text-3xl mb-2">{icon}</div>
        <span className="text-lg">{label}</span>
      </div>
    </div>
  );
};

export default ActionCard;
