import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.cliente.id = paramMap.get('id') ?? '';
      this.clienteService.retrieve(this.cliente.id)
        .then(data => {
          this.cliente.id = (data as any).id;
          this.cliente.nombreCompleto = (data as any).nombreCompleto;
          this.cliente.ruc = (data as any).ruc;
          this.cliente.email = (data as any).email;
        });
    });
  }

  modificarCliente() {
    this.clienteService.update(this.cliente).then(() => window.location.pathname = "cliente");
  }

}
