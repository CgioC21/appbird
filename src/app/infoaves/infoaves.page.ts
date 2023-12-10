// infoaves.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-infoaves',
  templateUrl: 'infoaves.page.html',
  styleUrls: ['infoaves.page.scss'],
})
export class InfoavesPage {
  aves: any[] = [
    { Familia: 'Trochilidae', Nombre: 'Colibrí Esmeralda', Ubicacion: 'Guatemala', Descubridor: 'John Doe' },
    { Familia: 'Fringillidae', Nombre: 'Jilguero Dorado', Ubicacion: 'Guatemala', Descubridor: 'Jane Doe' },
    { Familia: 'Parulidae', Nombre: 'Cigüeñuela Común', Ubicacion: 'Guatemala', Descubridor: 'Ornithologist Ornithologister' },
    { Familia: 'Accipitridae', Nombre: 'Águila Crestada', Ubicacion: 'Guatemala', Descubridor: 'Birdwatcher Watcherson' },
    { Familia: 'Columbidae', Nombre: 'Paloma Turca', Ubicacion: 'Guatemala', Descubridor: 'Pigeon Lover' },
    { Familia: 'Thraupidae', Nombre: 'Azulejo Palmero', Ubicacion: 'Guatemala', Descubridor: 'Colorful Birder' },
    { Familia: 'Tyrannidae', Nombre: 'Mosquero Cabecigrís', Ubicacion: 'Guatemala', Descubridor: 'Nature Explorer' },
  ];

  constructor() {}
}
