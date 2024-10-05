import { Paper } from "@/ui/components/others/Paper"

export const BudgetContract = () => {
    const date = new Date() 
    const today = date.getUTCDate() + '/' + date.getUTCMonth() + '/' + date.getUTCFullYear()
    const datetimeExpiration = new Date( date.setMonth(date.getMonth() + 1));
    const expirationDate = datetimeExpiration.getUTCDate() + '/' + datetimeExpiration.getUTCMonth() + '/' + datetimeExpiration.getUTCFullYear();
   


    return (
        <Paper>
            <div className="flex justify-between ">
                <div>
                    <h3 className="font-medium text-lg">Datos del cliente</h3>
                    <p>{'nombre'}</p>
                    <p>{'Direccion'}</p>
                    <p>{'Provincia'} {'Pais'}</p>
                    <p>{'Email'}</p>
                </div>
                <div>
                    <h3 className="font-medium text-lg">Datos del emisor</h3>
                    <p>{'nombre'}</p>
                    <p>{'Direccion'}</p>
                    <p>{'Provincia'} {'Pais'}</p>
                    <p>{'Email'}</p>
                </div>
            </div>

            <div className="mt-10 ">
                <div className="mb-2">
                    <h3 className="font-medium text-xl">Presupuesto</h3>

                </div>
                <div className="flex mb-8 justify-between">
                    <p>N° de presupuesto: {'número'}</p>
                    <p>Feha: {today}</p>
                </div>
            </div>
            <div>
                <p>Estimados/as Sres/Sras:</p>
                <p>Le agradezco su consulta y le envio el siguiente presupuesto según lo conversado.</p>
                <table className="mt-10 w-full  border-collapse *:border-2 ">
                    <thead >
                        <tr className="*:p-2 *:border-2">
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th>Precio/ud.</th>
                            <th>Importe total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="*:p-2 *:border-2 *:text-center">
                            <td>
                                Servicio
                            </td>
                            <td>
                                1
                            </td>
                            <td>
                                $200.000,00
                            </td>
                            <td>
                                $200.000,00
                            </td>
                        </tr>
                    </tbody>
                </table>

                <hr className="mt-6 bg-black w-full h-1 mb-4 rounded-md" />

                <div className="flex justify-between">
                    <h4 className="uppercase text-xl font-medium">total <span>(Pesos)</span></h4>
                    <h4 className="font-medium text-xl">{`$ 300.000,00`}</h4>
                </div>
                <div>
                    <p>Esta oferta es válida hasta el [{ expirationDate.toString() }] </p>
                </div>
            </div>
        </Paper>
    )
}
