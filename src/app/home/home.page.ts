import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreEstudiante = 'Cristian Chavez';
  carnet = '22006761';

  constructor(private router: Router) {}

  cargarAves() {
    // Aquí es donde implementarías la lógica para cargar la segunda pantalla "infoaves"
    this.router.navigate(['/infoaves']);
  }
}
