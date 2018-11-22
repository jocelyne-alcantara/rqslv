import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the R1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-r1',
  templateUrl: 'r1.html',
})
export class R1Page {
  select_tab = true;
  item;
  supervisor_preguntas;
  operador_preguntas;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
    this.supervisor_preguntas = this.item['supervisor'];
    this.operador_preguntas = this.item['operador'];
  }
  hide_select_tab(){
    this.select_tab = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad R1Page');
  }

}
