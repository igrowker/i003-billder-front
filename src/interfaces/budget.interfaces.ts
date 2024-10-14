export interface Budget {
    trabajoId: number;
    gastos: Gasto[]
}


export interface Gasto {
    precio: number;
    cantidad: number;
    nombre: string;
}