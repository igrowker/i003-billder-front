import { Client } from "./client.interfaces";

export interface Project {
    clienteId:   number;
    description: string;
    fecha:       Date;
    estado:      string;
    // presupuesto: null;
    // contrato:    null;
    // pago:        null;
    // usuario:     null;
    cliente:     Client;
    id:          number;
}
