interface ActionCardProps {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
  fullWidth?: boolean;
}

export const ActionCard = ({ icon, label, onClick, fullWidth=false }: ActionCardProps) => {
  return (
    <div
      className={`flex justify-center p-2 bg-customOrange hover:bg-orange-500 text-white font-semibold rounded-md items-center cursor-pointer shadow-md transition-all duration-300 ease-in-out ${fullWidth ? 'w-full ' : ''}`}
      onClick={onClick}
    >
      <div className={`flex  ${fullWidth ? 'gap-4' : 'justify-center flex-col gap-4'} items-center`}>
        <div className="text-3xl ">{icon}</div>
        <span className="text-lg">{label}</span>
      </div>
    </div>
  );
};
