interface HeaderConfirmationProps {
    title: string;
  }
  
  export const HeaderConfirmation = ({ title }: HeaderConfirmationProps) => {
    return (
      <div className="flex justify-center items-center p-4 bg-customOrange shadow-md shadow-black/20">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    );
  };
  
