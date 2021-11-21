import { Component, OnInit } from '@angular/core';
import { Cliente } from "../../models/cliente";
import { ClienteService } from '../../service/cliente.service';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  guardarCliente(){
    this.cliente.id = uuid();;
    this.clienteService.create(this.cliente).then(()=>window.location.pathname="cliente")
  }

}