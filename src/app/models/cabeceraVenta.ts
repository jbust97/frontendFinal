import {Cliente} from "./cliente"
export class CabeceraVenta{
    id!: number;
    fecha!: string;
    factura!: string;
    cliente!: Cliente
    total!: number;
}