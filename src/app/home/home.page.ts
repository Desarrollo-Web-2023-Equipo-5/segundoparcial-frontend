import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Personas } from './personas-interface';
import { Empresas } from './empresas-interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  personas: Personas[] = [];
  empresas: Empresas[] = [];
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.obtenerEmpresas;
    this.obtenerTodasLasPersonas();
  }

  obtenerDatosEmpresa(id: number) {
    this.apiService.obtenerEmpresaPorId(id).subscribe(
      respuesta => {
        console.log(respuesta);
      },
      error => {
        console.error(error);
      }
    );
  }
  obtenerEmpresas() {
    this.apiService.obtenerEmpresas().subscribe(
      respuesta => {
        this.empresas = respuesta;
      },
      error => {
        console.error(error);
      }
    );
  }

  obtenerPersonaPorId(id: number) {
    this.apiService.obtenerPersonaPorId(id).subscribe(
      respuesta => {
        this.personas = respuesta.persona;
      },
      error => {
        console.error(error);
      }
    );
  }

  obtenerTodasLasPersonas() {
    this.apiService.obtenerTodasLasPersonas().subscribe(
      respuesta => {
        this.personas = respuesta.personas;
      },
      error => {
        console.error(error);
      }
    );
  }

  eliminarPersona(id: number) {
    this.apiService.eliminarPersonaPorId(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerTodasLasPersonas();
      },
      error => {
        console.error(error);
      }
    );
  }
}

