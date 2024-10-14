import { useEffect, useRef, useState } from "react";
import { AddCircleIcon } from "@/assets/icons";
import { InputText } from "@/ui/components";

interface Item {
  nombre: string;
  quantity: number;
  precio: number;
}

interface BudgetCalcTabProps {
  onItemsChange: (items: Item[]) => void;
}

export const BudgetCalcTab = ({ onItemsChange }: BudgetCalcTabProps) => {
  const [items, setItems] = useState<Item[]>([]);
  const [nombre, setNombre] = useState("");
  const [quantity, setQuantity] = useState("");
  const [precio, setPrecio] = useState("");

  const nombreInputContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nombreInputContainerRef.current) {
      // Buscamos el input dentro del contenedor usando querySelector
      const nombreInput =
        nombreInputContainerRef.current.querySelector("input#nombre");
      if (nombreInput) {
        (nombreInput as HTMLInputElement).focus(); // Hacemos foco en el input
      }
    }
  }, []);

  useEffect(() => {
    onItemsChange(items);
  }, [items, onItemsChange]);

  const handleAddItem = () => {
    if (nombre && quantity && precio) {
      const newItem: Item = {
        nombre: nombre,
        quantity: parseInt(quantity, 10),
        precio: parseFloat(precio),
      };

      setItems([...items, newItem]);
      setNombre("");
      setQuantity("");
      setPrecio("");
    }
  };

  const totalGlobal = items.reduce(
    (total, item) => total + item.quantity * item.precio,
    0
  );

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(value);
  };

  return (
    <div className="mt-6 flex flex-col gap-9" >
      <p className="text-gray-400">
        Para calcular tu trabajo, ingresá el nombre del trabajo (material, días,
        metros, horas), la cantidad y el precio unitario. También podés añadir
        otros gastos adicionales.
      </p>

      <div className="flex flex-col gap-6" ref={nombreInputContainerRef}>
        <InputText
          labelText="Nombre"
          type="text"
          id="nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          className="w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-customOrange shadow-md"
        />
        <div className="grid grid-cols-2 gap-4">
          <InputText
            labelText="Cantidad"
            type="number"
            id="quantity"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
          <InputText
            labelText="Precio"
            type="number"
            id="precio"
            value={precio}
            onChange={e => setPrecio(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={handleAddItem}
        className="p-2 justify-center bg-white shadow-md rounded-md text-black font-medium flex items-center gap-2"
      >
        <AddCircleIcon />
        Añadir
      </button>

      {items.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium">Artículos añadidos:</h4>
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 p-2">Nombre</th>
                <th className="border border-gray-200 p-2">Cantidad</th>
                <th className="border border-gray-200 p-2">Precio</th>
                <th className="border border-gray-200 p-2">
                  Total por Artículo
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-200 p-2">{item.nombre}</td>
                  <td className="border border-gray-200 p-2 text-right">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-200 p-2 text-right">
                    {formatCurrency(item.precio)}
                  </td>
                  <td className="border border-gray-200 p-2 text-right">
                    {formatCurrency(item.quantity * item.precio)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="rounded-md shadow-md flex justify-between items-center p-2 bg-white mt-2">
        <h4 className="uppercase">Total Global:</h4>
        <h5>{formatCurrency(totalGlobal)}</h5>
      </div>
    </div>
  );
};
