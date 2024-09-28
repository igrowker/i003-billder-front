import { CameraIcon, UndoIcon } from "../../assets/icons"
import ReusableButton from "../../ui/components/buttons/ReusableButton"


interface RegisterSignatureTabProps {
    handleContinue: () => void;
}

export const RegisterSignatureTab = ({ handleContinue }: RegisterSignatureTabProps) => {
    return (
        <div className="flex flex-col flex-grow h-full gap-4">
            <div className="flex-grow ">
                <h3 className="font-medium  pt-2 pb-1 text-lg text-customOrange">Registra tu firma</h3>
                <h3 className="font-medium  pt-2 pb-1 text-lg ">Realizá tu firma en papel y tómale una foto.</h3>


                <div className="mt-6 bg-[#e8e9ea] h-max-[500px]  rounded-md h-[60dvh] relative">
                    <div className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <CameraIcon />

                    </div>
                    <button className="shadow-sm bg-customYellow size-8 rounded-full p-1 text-sm absolute top-3 right-3 text-[#7f7700] flex justify-center items-center">

                        <UndoIcon />
                    </button>
                </div>

            </div>
            <ReusableButton onClick={handleContinue}>
                Continuar
            </ReusableButton>
        </div>
    )
}
