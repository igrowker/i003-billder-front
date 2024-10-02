import { AddCircleIcon } from "@/assets/icons"
import { InputText, Modal } from "@/ui/components"
import { useState } from "react"

export const BudgetCalcTab = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true)
    };
    const handleCloseModal = () => {
        setIsModalOpen(false)

    }

    return (
        <div className="mt-2 flex flex-col gap-9 ">
            <div className="grid grid-cols-2 gap-2">
                <InputText labelText="Precio" id="price" />
                <InputText labelText="Cantidad" type="number" id="quantity" />
            </div>
            <InputText labelText="Tiempo" placeholder="Días, horas, m2, etc" id="time" />

            <button onClick={handleOpenModal} className="p-2 justify-center  bg-white shadow-md rounded-md text-black font-medium flex items-center gap-2">
                <AddCircleIcon/>
                Añadir gasto
            </button>
            <div className="rounded-md shadow-md flex justify-between items-center p-2 bg-white ">
                <h4 className="uppercase">Total:</h4>
                <h5>{30000000.00.toLocaleString()}</h5>
            </div>
            <Modal 
                title="Añadir gasto"
                isOpen={isModalOpen}
                children={
                    <div className="flex flex-col gap-6">
                        <InputText id="name" labelText="Nombre"/>
                        <InputText id="price2" labelText="Precio"/>
                        <InputText id="quantity2s" labelText="Cantidad" />
                        <h3 className="font-medium">Total: <span>{123.0.toLocaleString()}</span></h3>
                    </div>
                }
                footer={
                    <div className="flex items-center gap-4">
                        <button className="text-customOrange" onClick={handleCloseModal}>Cancelar</button>
                        <button className="text-customOrange">Añadir</button>
                    </div>
                }
            />
        </div>
    )
}
