import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Reglas3Page} from "../reglas3/reglas3";
import {R1Page} from "../r1/r1";

/**
 * Generated class for the Reglas2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reglas2',
  templateUrl: 'reglas2.html',
})
export class Reglas2Page {
  reglas = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reglas = [
      {
        'btn_numero': '8',
        'src' : '../assets/imgs/reglas/regla8_icono.png',
        'btn_txt': 'YO SIEMPRE RESPETARÉ EL REGLAMENTO PARA EL MANEJO, TRANSPORTE, USO (TRONADURA) O ALMACENAMIENTO DE EXPLOSIVOS',
        'peligro':'PELIGRO: EXPOSICIÓN A EXPLOSIVOS',
        'primera_col':'col-1',
        'segunda_col':'col-8',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Competencias / acreditaciones',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Planifiqué la tronadura considerando las condiciones habituales y no habituales (ej. Terreno/taco) y todo el personal involucrado en la actividad se encuentra con acreditaciones vigentes?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Carta de Loros (aislación y evacuación)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco la Carta de Loros, se la comuniqué a los involucrados?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Verificación post-tronadura',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Planifiqué la verificación post-tronadura para informar la posibilidad de un tiro quedado (TQ) y/o daños estructurales?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Competencias / acreditaciones',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo mi acreditación vigente para manipular explosivos?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Carta de Loros (aislación y evacuación)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco las áreas aisladas?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Verificación post-tronadura',
            'class_titulo_fila2':'fila2 regla_especial',
            'p_titulo_fila2':'Control ejercido por el supervisor de tronadura'
          }
        ]
      },
      {
        'btn_numero': '9',
        'src' : '../assets/imgs/reglas/regla9_icono.png',
        'btn_txt': 'YO SIEMPRE MANTENDRÉ DISTANCIA SEGURA DE LOS EQUIPOS EN MOVIMIENTO/PARTES MOVILES',
        'peligro':'PELIGRO: ATRAPAMIENTO CON PARTES / PIEZAS MÓVILES',
        'primera_col':'col-1',
        'segunda_col':'col-8',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Guardas y protecciones',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Las guardas y protecciones de equipos o piezas móviles, existen y separan o aíslan efectivamente la energía?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Paradas de emergencia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Todas las paradas de emergencia de mi responsabilidad están operativas?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Control de elementos susceptibles de ser atrapados',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Instruí a mis trabajadores de no usar elementos que sean susceptibles de ser atrapados por partes o piezas móviles?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Segregación / Señalización',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿En caso de no poder colocar guardas o protecciones a partes móviles, me aseguro de instalar una efectiva segregación y señalizaciòn?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Guardas y protecciones',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Existe guarda, protección o segregación efectiva para el trabajo que realizaré?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Paradas de emergencia',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco y sé cómo activar los sistemas de parada de emergencia?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Control de elementos susceptibles de ser atrapados',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Me aseguré de no usar elementos susceptibles de ser atrapados por partes o piezas móviles de equipos? (ej: cabello largo suelto, pulseras, cadenas, anillos, relojes, etc.)'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Segregación / Señalización',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Sé que por ningún motivo debo interactuar (manos u otra parte del cuerpo) con un equipo en movimiento con partes o piezas móviles?'
          }
        ]
      },
      {
        'btn_numero': '10',
        'src' : '../assets/imgs/reglas/regla10_icono.png',
        'btn_txt': 'YO SIEMPRE ESTARÉ ATENTO ANTES Y DURANTE LA CONDUCCIÓN DE EQUIPOS Y VEHÍCULOS',
        'peligro':'PELIGRO: CONDUCCIÓN INSEGURA DE VEHÍCULOS O EQUIPOS',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Verificación teórica y práctica de competencias por equipo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué si las competencias de mis operadores son las requeridas y comuniqué los incidentes o cuasi incidentes del turno a mi equipo? (En caso de ocurrencia)'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Programa de mantención - equipos y vehículos (CODELCO y Contratistas)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué que los equipos no se encuentran con fallas de mantenimiento que puedan ocasionar un accidente grave en su operación/conducción?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Evaluación - Riesgos de rutas críticas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo las evaluaciones de criticidad de las rutas, las recomendaciones y las he transmitido a mi equipo de trabajo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Estándar EST de fatiga y somnolencia (Sistema de Alerta Temprana para CODELCO y Contratistas)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tomé acciones para casos de fatiga y somnolencia?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Manual de carretera (Diseño - layout de rutas y caminos)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Para trabajadores nuevos de mi equipo, la primera vuelta en ruta, el conductor fue acompañado por personal especialista y evaluado durante la misma?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Verificación teórica y práctica de competencias por equipo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo y porto licencia interna al día y adecuada para el equipo específico que debo operar?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Programa de mantención - equipos y vehículos (CODELCO y Contratistas)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Apliqué la lista de chequeo del equipo y éste se encuentra en condiciones de ser operado? ¿Estoy acreditado para este modelo o clase de equipo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Evaluación - Riesgos de rutas críticas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Consulté sobre la criticidad de los riesgos existentes en la ruta a transitar / operar?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Estándar EST de fatiga y somnolencia (Sistema de Alerta Temprana para CODELCO y Contratistas)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy en condiciones de conducir / operar? ¿El dispositivo de fatiga y somnolencia está operativo? (Si aplicara)'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Manual de carretera (Diseño - layout de rutas y caminos)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco la ruta, las velocidades máximas permitidas y las acciones adicionales que debo realizar si la ruta es crítica?'
          }
        ]
      },
      {
        'btn_numero': '11',
        'src' : '../assets/imgs/reglas/regla11_icono.png',
        'btn_txt': 'YO SIEMPRE REALIZARÉ MEDICIÓN DE GASES EN ÁREAS ABANDONADAS O ESPACIOS CONFINADOS ANTES DE INGRESAR',
        'peligro':'PELIGRO: EXPOSICIÓN A ATMÓSFERAS PELIGROSAS',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Medición de Gases',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los equipos de medición de gases utilizados están calibrados y certificados para un monitoreo permanente?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Uso de EPP específico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Revisé si el EPP específico es efectivo y se utiliza correctamente?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación / Especialización / Aptitud Física y Psicológica',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Informé a mi cuadrilla acerca de los peligros y parámetros a los cuales estarán expuestos y me aseguré que los entienden?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Segregación / Señalización / Cierre',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué que los accesos están señalizados y sus ingresos controlados?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Comunicación y autorización de ingreso del dueño del área para ejecutar el trabajo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy autorizado e informado para realizar el trabajo en el área o equipo y solicité información del turno anterior?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Medición de Gases',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El resultado de la medición permanente de gases me permite trabajar?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Uso de EPP específico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Uso el EPP específico y está en buenas condiciones?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación / Especialización / Aptitud Física y Psicológica',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy capacitado y entrenado para realizar trabajos en atmósferas peligrosas, conozco límites inferiores de explosividad, primeros auxilios, uso de EPP especial, % mínimo de oxígeno?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Segregación / Señalización / Cierre',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo autorización específica para ingresar al área y/o el equipo?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Comunicación y autorización de ingreso del dueño del área para ejecutar el trabajo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy autorizado para realizar trabajos en atmósferas peligrosas?'
          }
        ]
      },
      {
        'btn_numero': '12',
        'src' : '../assets/imgs/reglas/regla12_icono.png',
        'btn_txt': 'YO SIEMPRE UTILIZARÉ EL EPP ESPECÍFICO EN ÁREAS CON EXPOSICIÓN A RADIACIÓN POR MATERIALES FUNDIDOS Y TEMPERATURAS EXTREMAS',
        'peligro':'PELIGRO: CONTACTO O RADIACIÓN CON MATERIAL FUNDIDO / TEMPERATURAS EXTREMAS',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'EPP específico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué si el EPP específico es efectivo y se utiliza correctamente?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación / Especialización',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Informé al personal a mi cargo acerca de los peligros, riesgos y parámetros a los cuales estarán expuestos?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Segregación del área',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué que los accesos están señalizados y controlados?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Condiciones de equipos críticos',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué que los equipos críticos de mi área, están en buen estado de operación?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Control de variables críticas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué que las variables críticas de operación / mantención, se encuentran controladas (ley de cobre; agua en entornos, niveles de fluido antes de mantenimiento)?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'EPP específico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Uso el EPP específico y está en buenas condiciones?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación / Especialización',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy capacitado e instruido para realizar trabajos con material fundido y expuesto a temperaturas extremas?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Segregación del área',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo autorización específica para ingresar al área y/o el equipo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Condiciones de equipos críticos',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco los límites y prácticas seguras de operación con los equipos críticos?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Control de variables críticas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Consulté acerca de las variables críticas (ley de cobre, agua en entornos, niveles de fluido antes de mantenimiento) antes de realizar mis tareas?'
          }
        ]
      },
      {
        'btn_numero': '13',
        'src' : '../assets/imgs/reglas/regla13_icono.png',
        'btn_txt': 'YO SIEMPRE MANTENDRÉ MIS HERRAMIENTAS ASEGURADAS PARA EVITAR SU CAÍDA',
        'peligro':'PELIGRO: CAÍDA DE OBJETOS DESDE DISTINTO NIVEL',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Segregación a niveles inferiores y aseguramiento de herramientas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿La segregación aísla efectivamente el ingreso de personas no autorizadas al área?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Protecciones en fuentes de proyección',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo identificados y controlados los riesgos de proyección en mi área de trabajo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Aseguramiento de herramientas en trabajos de altura para evitar su caída',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Mi equipo de trabajo está informado y en condiciones de evitar la caída de equipos, herramientas u otros objetos?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Comunicación y autorización de ingreso por dueño del área',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Solicité la autorización de ingreso e información de los riesgos asociados al área en que mi personal desarrollará sus tareas?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Control previo de objetos suspendidos',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Me aseguré que mipersonal no se encuentra expuesto a la línea de fuego?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Segregación a niveles inferiores y aseguramiento de herramientas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy dentro de un área segregada por potencial caída de objetos?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Protecciones en fuentes de proyección',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Solicité información sobre los riesgos de proyección en mi área de trabajo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Aseguramiento de herramientas en trabajos de altura para evitar su caída',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo aseguradas las herramientas, equipos y otros objetos de trabajo, para evitar su caída desde altura?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Comunicación y autorización de ingreso por dueño del área',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Solicité información acerca de los riesgos, de las medidas de control (controles) y trabajos paralelos o simultáneos que se encuentran presentes en el área donde desarrollaré mis tareas?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Control previo de objetos suspendidos',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Me aseguré de no estar en la línea de fuego?'
          }
        ]
      },
      {
        'btn_numero': '14',
        'src' : '../assets/imgs/reglas/regla14_icono.png',
        'btn_txt': 'YO SIEMPRE RESPETARÉ SEGREGACIONES EN OPERACIONES DE EQUIPOS FERROVIARIOS',
        'peligro':'PELIGRO: OPERACIONES FERROVIARIAS',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Condición de las vías y regulación de cruces',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Solicité e informé del estado, los riesgos y controles de las vías y cruces de la ruta?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Competencias del personal',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué la vigencia de las acreditaciones y/o competencias de mis trabajadores a cargo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Mantenimiento preventivo de equipos de operación ferroviaria',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué el cumplimiento del programa de mantención del equipo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Control de tráfico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Coordiné las actividades del turno con control de tráfico y maquinistas?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Bloqueo y verificación de energía residual',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Verifiqué desenergización, bloqueo y “Energía Cero” de los equipos que intervendrán?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Condición de las vías y regulación de cruces',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Solicité información del estado de las vías y cruces de mi ruta de trabajo y las restricciones que se presentan?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Competencias del personal',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo mi autorización vigente para realizar el trabajo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Mantenimiento preventivo de equipos de operación ferroviaria',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Realicé la Lista de Chequeo (Check List) de mi equipo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Control de tráfico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Mantengo comunicación permanente con despacho?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Bloqueo y verificación de energía residual',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Bloqueé y verifiqué estado de “Energía Cero” del equipo que voy a intervenir?'
          }
        ]
      }
    ]
  }

  openReglas3(){
    this.navCtrl.push(Reglas3Page);
  }
  openR1(item){
    this.navCtrl.push(R1Page,{ item: item });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Reglas2Page');

  }

}
