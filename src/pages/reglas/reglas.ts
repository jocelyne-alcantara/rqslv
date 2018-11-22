import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Reglas2Page} from "../reglas2/reglas2";
import {DndUtilizarPage} from '../dnd-utilizar/dnd-utilizar';
import {R1Page} from "../r1/r1";

@Component({
  selector: 'page-reglas',
  templateUrl: 'reglas.html'
})
export class ReglasPage {
  reglas = [];
  constructor(public navCtrl: NavController) {
    this.reglas = [
      {
        'btn_numero': '1',
        'src' : '../assets/imgs/reglas/regla1_icono.png',
        'btn_txt': 'YO SIEMPRE INTERVENDRÉ EQUIPOS DESENERGIZADOS',
        'peligro':'PELIGRO: INTERVENCIÓN EQUIPO ENERGIZADO',
        'primera_col':'col-1',
        'segunda_col':'col-8',
        'supervisor':[
          {
            'class_fila1':'',
            'p_fila1':'',
            'class_titulo_fila2':'titulo',
            'p_titulo_fila2':'INTERVENCIÓN DE EQUIPO ENERGIZADO'
          },{
            'class_fila1':'fila1 primera',
            'p_fila1':'Permiso PTEE',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Se autorizó el Permiso de Trabajo para equipos energizados?'
          },{
            'class_fila1':'',
            'p_fila1':'',
            'class_titulo_fila2':'titulo',
            'p_titulo_fila2':'INTERVENCIÓN DE EQUIPO DESENERGIZADO'
          },{
            'class_fila1':'fila1 primera',
            'p_fila1':'Competencias del personal',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué las competencias del personal electricista que realizará el trabajo? (Licencia)'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Corte efectivo de todas las fuentes de energía',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué el corte de la fuente y retorno de energía eléctrica?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Bloqueo de los equipos de maniobra',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué aplicación del procedimiento de bloqueo?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Verificación ausencia de voltaje y puesta a tierra de la instalación a intervenir',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué estado de equipo de medición y aplicación puesta a tierra?'
          }
        ],
        'operador':[
          {
            'class_fila1':'',
            'p_fila1':'',
            'class_titulo_fila2':'titulo',
            'p_titulo_fila2':'INTERVENCIÓN DE EQUIPO ENERGIZADO'
          },{
            'class_fila1':'fila1 primera',
            'p_fila1':'Permiso PTEE',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Se realizó el Permiso de Trabajo para equipos energizados? (Aplicar PTEE)'
          },{
            'class_fila1':'',
            'p_fila1':'',
            'class_titulo_fila2':'titulo',
            'p_titulo_fila2':'INTERVENCIÓN DE EQUIPO DESENERGIZADO'
          },{
            'class_fila1':'fila1 primera',
            'p_fila1':'Competencias del personal',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy autorizado para intervenir equipos eléctricos energizados? (Licencia)'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Corte efectivo de todas las fuentes de energía',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Revisé con diagrama unilineal el corte de las fuentes?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Bloqueo de los equipos de maniobra',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Apliqué mi bloqueo en los equipos en que trabajaré?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Verificación ausencia de voltaje y puesta a tierra de la instalación a intervenir',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Participé en la medición de ausencia de voltaje y verifiqué que la instalación está aterrizada?'
          }
        ]
      },
      {
        'btn_numero': '2',
        'src' : '../assets/imgs/reglas/regla2_icono.png',
        'btn_txt': 'YO SIEMPRE ESTARÉ ATENTO A LAS CONDICIONES DE TRABAJO AL REALIZAR TAREAS EN ALTURA FÍSICA',
        'peligro':'PELIGRO: CAÍDA DISTINTO NIVEL',
        'primera_col':'col-1',
        'segunda_col':'col-8',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Sistema personal para detención de caídas (SPDC)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Revisé si el sistema (SPDC) es efectivo y se usa correctamente?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Certificación de plataformas de trabajo (provisorias / superficies de trabajo / puntos de anclaje, cuerdas o cabos de vida y líneas de vida)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué que las plataformas y superficies de trabajo, puntos de anclaje, líneas y cuerdas de vida están en buenas condiciones de uso?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación / Especialización',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo al personal a mi cargo capacitado y autorizado para operar, armar y/o desarmar andamios?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Aptitud física y psicológica del personal',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Mi personal tiene los exámenes físicos y psicológicos al día para trabajos en altura física?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Segregación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿La segregación aísla en forma efectiva e impide el ingreso de personas y equipos no autorizados al área de peligro?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Sistema personal para detención de caídas (SPDC)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Uso mi arnés de seguridad de cuerpo completo y éste se encuentra en buenas condiciones?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Certificación de plataformas de trabajo (provisorias / superficies de trabajo / puntos de anclaje, cuerdas o cabos de vida y líneas de vida)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿La tarjeta de autorización tiene el V°B° correspondiente en la jornada de trabajo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación / Especialización',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy capacitado para usar el sistema personal para detención de caídas? ¿Estoy capacitado y certificado para el montaje y desmontaje de andamios? (Si aplicara)'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Aptitud física y psicológica del personal',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Me encuentro en buenas condiciones físicas y psicológicas para realizar trabajos en altura física y tengo los exámenes vigentes?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Segregación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El área se encuentra segregada?'
          }
        ]
      },
      {
        'btn_numero': '3',
        'src' : '../assets/imgs/reglas/regla3_icono.png',
        'btn_txt': 'YO SIEMPRE RESPETARÉ LA SEGREGACIÓN EN CARGAS SUSPENDIDAS O MANIOBRAS DE IZAJE',
        'peligro':'PELIGRO: EXPOSICIÓN A CARGAS SUSPENDIDAS',
        'primera_col':'col-1',
        'segunda_col':'col-8',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Plan de maniobra de izaje',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Se encuentra autorizado el Plan de maniobra de izaje?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Segregación del área',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿La segregación aísla efectivamente el ingreso de personas y equipos no autorizados?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Inspección previa del equipo de izaje y de los elementos de izaje',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué que el o los equipo(s) de izaje y elementos de izaje están de acuerdo al Plan de izaje?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Comunicación bi-direccional permanente entre operador del equipo de izaje y Rigger',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Aseguré la comunicación, ya sea radial o visual permanente, entre Rigger y operador del equipo de izaje?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Competencias del personal involucrado en maniobras',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El operador, Rigger y ayudantes conocen sus funciones de acuerdo al Plan?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Plan de maniobra de izaje',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco el Plan de izaje?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Segregación del área',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El área se encuentra segregada y dispongo los “vientos” (cuerdas guía) para no exponerme bajo carga suspendida y controlar la carga?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Inspección previa del equipo de izaje y de los elementos de izaje',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los elementos y el o los equipo(s) de izaje se encuentran inspeccionados, están en buen estado y son los adecuados para la maniobra de izaje?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Comunicación bi-direccional permanente entre operador del equipo de izaje y Rigger',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco el código de señales manuales y/o tengo radio comunicación?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Competencias del personal involucrado en maniobras',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El operador del equipo y el Rigger cuentan con sus credenciales vigentes?'
          }
        ]
      },
      {
        'btn_numero': '4',
        'src' : '../assets/imgs/reglas/regla4_icono.png',
        'btn_txt': 'YO SIEMPRE MANTENDRÉ DISTANCIA SEGURA DE ENERGIAS PELIGROSAS Y DESCONTROLADAS (NEUMÁTICA, HIDRÁULICA, TÉRMICA, MECÁNICA, POTENCIAL, QUÍMICA)',
        'peligro':'PELIGRO: CONTACTO CON ENERGÍAS PELIGROSAS POR LIBERACIÓN DESCONTROLADA',
        'primera_col':'col-1',
        'segunda_col':'col-8',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Competencias del personal involucrado en la maniobra',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Informé todas las energías presentes?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Aislación y Bloqueo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué la desenergización / aislación, bloqueo y “Energía Cero” de los equipos que intervendrá mi cuadrilla?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Dispositivos de contención',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Se encuentran operativos los dispositivos de contención?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Segregación y Aislación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿La segregación aísla efectivamente el ingreso de personas y equipos no autorizados?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Dispositivos de lectura de niveles de energía (Energía Cero) / Verificación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los instrumentos de medición se encuentran operativos?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Competencias del personal involucrado en la maniobra',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo identificadas todas las energías presentes?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Aislación y Bloqueo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Bloqueé y verifiqué “Energía Cero” del equipo o sistema que voy a intervenir?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Dispositivos de contención',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco los dispositivos de contención de energía?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Segregación y Aislación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo aislada mi área de trabajo?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Dispositivos de lectura de niveles de energía (Energía Cero) / Verificación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Sé interpretar los instrumentos de medición?'
          }
        ]
      },
      {
        'btn_numero': '5',
        'src' : '../assets/imgs/reglas/regla5_icono.png',
        'btn_txt': 'YO SIEMPRE ESTARÉ ATENTO A LAS CONDICIONES DEL TERRENO (CAÍDA DE ROCAS, DERRUMBES, COLAPSO DE TALUD, FALLA DE PILAS MINA RAJO, BOTADERO, PILAS POR FALLA DE TERRENO)',
        'peligro':'PELIGRO: CAÍDA DE ROCAS',
        'primera_col':'col-1',
        'segunda_col':'col-8',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Mapa o informe técnico de criticidad de falla de terreno',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Informé la criticidad del terreno a los operadores o personal expuestos?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Cumplimiento de diseño y construcción',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Controlé las variables de diseño?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Recomendaciones geotecnia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué de manera permanente el cumplimiento de las medidas en geotecnia a fallas de terreno en áreas críticas?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Plan de contingencia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Están operativos los canales de comunicación y sé cómo actuar cuando se producen fallas de terreno?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Segregación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Aseguré la segregación de las áreas con fallas de terreno?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Mapa o informe técnico de criticidad de falla de terreno',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Consulté acerca de la criticidad del terreno (lugar) donde me encuentro?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Cumplimiento de diseño y construcción',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Identifiqué la línea de programa de carguío o descarga que debo cumplir?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Recomendaciones geotecnia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco las recomendaciones de geotecnia asociadas a fallas de terreno en áreas críticas?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Plan de contingencia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Sé cómo actuar cuando se producen fallas de terreno?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Segregación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Me encuentro dentro de un área segregada?'
          }
        ]
      },
      {
        'btn_numero': '6',
        'src' : '../assets/imgs/reglas/regla6_icono.png',
        'btn_txt': 'YO SIEMPRE ME MANTENDRÉ INSTRUIDO EN LOS PLANES DE EMERGENCIA ANTE LA OCURRENCIA DE UN INCENDIO',
        'peligro':'PELIGRO: INCENDIO',
        'primera_col':'col-1',
        'segunda_col':'col-8',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Plan de emergencia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Está todo mi personal instruido en el Plan de emergencia?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Sistema de control de presencia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco cuántos son y dónde se encuentra todo mi personal?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Vías de evacuación y salidas de emergencia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué que las vías de evacuación y salidas de emergencia de mi área de responsabilidad se encuentran habilitadas y expeditas?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Sistemas de Detección y Extinción en equipos e instalaciones críticos',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy capacitado y entrenado para dirigir equipos de respuesta ante emergencias y extinción de incendio?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Plan de emergencia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco los sistemas de alerta y sé cómo actuar frente a un incendio?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Sistema de control de presencia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Registré mi ingreso a mi área?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Vías de evacuación y salidas de emergencia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco las vías de evacuación y salidas de emergencia?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Sistemas de Detección y Extinción en equipos e instalaciones críticos',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy instruido en el uso de los sistemas de protección y extinción de incendio?'
          }
        ]
      },
      {
        'btn_numero': '7',
        'src' : '../assets/imgs/reglas/regla7_icono.png',
        'btn_txt': 'YO SIEMPRE TRABAJARÉ EN ÁREAS LIBRES DEL CONTACTO CON ÁCIDO SULFÚRICO',
        'peligro':'PELIGRO: CONTACTO CON ÁCIDO SULFÚRICO',
        'primera_col':'col-1',
        'segunda_col':'col-8',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Segregar el áreade trabajo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué que los accesos están señalizados y sus ingresos controlados?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Uso de EPP específico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Revisé si el sistema es efectivo y se utiliza correctamente?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Protecciones de uniones y acoples',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué que las protecciones y uniones están operativas?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Análisis de incompatibilidad / rotulación / señalización / HDS',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los operadores y personal a mi cargo saben cómo actuar en caso de emergencia?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Plan de mantenimiento de líneas, uniones y acoples',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Las duchas y lavaojos de emergencia están operativos?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Segregar el áreade trabajo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo autorización específica para ingresar al área y/o el equipo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Uso de EPP específico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Uso el EPP específico, está en buenas condiciones y cuento con Diphoterine en mi área de trabajo ante salpicaduras de ácido?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Protecciones de uniones y acoples',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Mi área de trabajo está libre de filtraciones que me puedan afectar?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Análisis de incompatibilidad / rotulación / señalización / HDS',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Sé cómo actuar en caso de contacto de ácido y personas?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Plan de mantenimiento de líneas, uniones y acoples',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco el sector donde está la ducha y el lavaojos ante una emergencia por contacto con ácido sulfúrico?'
          }
        ]
      }
    ]
  }

  openDndUtilizar(){
    this.navCtrl.push(DndUtilizarPage);
  }
  openReglas2(){
    this.navCtrl.push(Reglas2Page);
  }
  openR1(item){
    this.navCtrl.push(R1Page,{ item: item });
  }
}
