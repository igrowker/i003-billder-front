import { PencilIcon } from "@/assets/icons";
import { ReactNode } from "react";

interface ReturnLayoutProps {
  children: ReactNode;
  title: string;
  paddingContent?: boolean;
  backgroundColor?: string;
  isPending?: boolean;
  canEdit?: {
    onClick: () => void;
    isEditing: boolean;
  };
}

export const BasicLayout = ({
  children,
  title,
  paddingContent = true,
  isPending = false,
  backgroundColor = "bg-white",
  canEdit = { isEditing: false, onClick: () => { } },
}: ReturnLayoutProps) => {
  return (
    <div className="">
      <div
        className={`flex sticky top-0 z-50 p-3 shadow-md items-center ${backgroundColor} shadow-black/20`}
      >
        <h3 className=" flex-grow text-center font-medium text-lg">{title}</h3>
        {
          (canEdit.isEditing)
          && (
            <button onClick={canEdit.onClick} >
              <PencilIcon />
            </button>
          )
        }

      </div>
      <div
        className={`bg-customWhite min-h-[calc(100dvh-60px)] h-full flex flex-col overflow-auto    ${paddingContent ? "px-4 pb-4" : ""
          }  ${isPending ? "agregar clases animacion" : ""} `}
      >
        {children}
      </div>
    </div>
  );
};
//
