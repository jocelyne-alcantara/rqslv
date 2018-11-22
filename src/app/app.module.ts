import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BienvenidaPage } from '../pages/bienvenida/bienvenida'
import { AplicacionPage } from '../pages/aplicacion/aplicacion';
import { CreditosPage } from '../pages/creditos/creditos';
import { ReglasPage } from '../pages/reglas/reglas';
import { Reglas2Page } from '../pages/reglas2/reglas2';
import { Reglas3Page } from '../pages/reglas3/reglas3';
import { DndUtilizarPage } from '../pages/dnd-utilizar/dnd-utilizar';
import { R1Page } from '../pages/r1/r1';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@NgModule({
  declarations: [
    MyApp,
    BienvenidaPage,
    AplicacionPage,
    CreditosPage,
    ReglasPage,
    Reglas2Page,
    Reglas3Page,
    DndUtilizarPage,
    R1Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ' ',
      pageTransition: 'ios-transition'
    }
  )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BienvenidaPage,
    AplicacionPage,
    CreditosPage,
    ReglasPage,
    Reglas2Page,
    Reglas3Page,
    DndUtilizarPage,
    R1Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScreenOrientation
  ]
})
export class AppModule {}
