import { CabeceraVenta } from "./cabeceraVenta";
import { Producto } from "./producto";

export class DetalleVenta{
    id!: number;
    cabeceraVenta!: CabeceraVenta;
    producto!: Producto;
    cantidad!: number;
    totalDetalle!: number;
}