import { Component, OnInit } from '@angular/core';
import { Cliente } from "../models/cliente";
import { ClienteService } from '../service/cliente.service';
import { DocumentData } from 'rxfire/firestore/interfaces';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  public data: DocumentData[] = [];
  public columns = ["ID","Nombre Completo","RUC","Email"];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() { 

    this.clienteService.getAll()
    .then(data => this.data = data);
  }


  cancelarCliente(cliente: Cliente) {
    this.clienteService.delete(cliente.id)
    .then((data:any) => console.log(`Cliente ${cliente.id} cancelada!`));
    this.getClientes();
  }

}