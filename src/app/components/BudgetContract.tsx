import { Paper } from "@/ui/components/others/Paper";
interface Item {
  nombre: string;
  quantity: number;
  precio: number;
}

interface BudgetContractProps {
  budgetItems: Item[];
}

export const BudgetContract = ({ budgetItems }: BudgetContractProps) => {
  const date = new Date();
  const today =
    date.getUTCDate() + "/" + date.getUTCMonth() + "/" + date.getUTCFullYear();
  const datetimeExpiration = new Date(date.setMonth(date.getMonth() + 1));
  const expirationDate =
    datetimeExpiration.getUTCDate() +
    "/" +
    datetimeExpiration.getUTCMonth() +
    "/" +
    datetimeExpiration.getUTCFullYear();

 
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(value);
  };

  const totalGlobal = budgetItems.reduce(
    (total, item) => total + item.quantity * item.precio,
    0
  );

  return (
    <Paper>
      <div className="flex justify-between ">
        <div>
          <h3 className="font-medium text-lg">Datos del cliente</h3>
          <p>{"nombre"}</p>
          <p>{"Direccion"}</p>
          <p>
            {"Provincia"} {"Pais"}
          </p>
          <p>{"Email"}</p>
        </div>
        <div>
          <h3 className="font-medium text-lg">Datos del emisor</h3>
          <p>{"nombre"}</p>
          <p>{"Direccion"}</p>
          <p>
            {"Provincia"} {"Pais"}
          </p>
          <p>{"Email"}</p>
        </div>
      </div>

      <div className="mt-10 ">
        <div className="mb-2">
          <h3 className="font-medium text-xl">Presupuesto</h3>
        </div>
        <div className="flex mb-8 justify-between">
          <p>N° de presupuesto: {"número"}</p>
          <p>Feha: {today}</p>
        </div>
      </div>
      <div>
        <p>Estimados/as Sres/Sras:</p>
        <p>
          Le agradezco su consulta y le envio el siguiente presupuesto según lo
          conversado.
        </p>
        <table className="mt-10 w-full  border-collapse *:border-2 ">
          <thead>
            <tr className="*:p-2 *:border-2">
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio/ud.</th>
              <th>Importe total</th>
            </tr>
          </thead>
          <tbody>
            {budgetItems.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.quantity}</td>
                <td>{formatCurrency(item.precio)}</td>
                <td>{formatCurrency(item.quantity * item.precio)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className="mt-6 bg-black w-full h-1 mb-4 rounded-md" />

        <div className="flex justify-between">
          <h4 className="uppercase text-xl font-medium">
            total <span>(Pesos)</span>
          </h4>
          <h4 className="font-medium text-xl">{formatCurrency(totalGlobal)}</h4>
        </div>
        <div>
          <p>Esta oferta es válida hasta el [{expirationDate.toString()}] </p>
        </div>
      </div>
    </Paper>
  );
};
