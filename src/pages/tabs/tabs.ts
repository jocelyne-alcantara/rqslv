import { Component } from '@angular/core';

import { AplicacionPage } from '../aplicacion/aplicacion';
import { CreditosPage } from '../creditos/creditos';
import { ReglasPage } from '../reglas/reglas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ReglasPage;
  tab2Root = AplicacionPage;
  tab3Root = CreditosPage;

  constructor() {

  }
}
