import { CabeceraVenta } from './cabeceraVenta';
import { Producto } from './producto';

export class DetalleVenta {
  id!: number;
  producto!: Producto;
  cantidad!: number;
  totalDetalle!: number;
}
