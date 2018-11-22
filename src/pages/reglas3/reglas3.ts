import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {R1Page} from "../r1/r1";

/**
 * Generated class for the Reglas3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reglas3',
  templateUrl: 'reglas3.html',
})
export class Reglas3Page {
  reglas = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reglas = [
      {
        'btn_numero': '15',
        'src' : '../assets/imgs/reglas/regla15_icono.png',
        'btn_txt': 'YO SIEMPRE ESTARÉ ATENTO A LAS CONDICIONES DE TERRENO/AVALANCHA ALUDES',
        'peligro':'PELIGRO: EXPOSICIÓN A AVALANCHA / ALUD',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Monitoreo de variables nivometeorológicas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Informé a mi personal de los riesgos de avalanchas y las medidas de control en base a información especializada?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Control de laderas',
            'class_titulo_fila2':'fila2 regla_especial',
            'p_titulo_fila2':'*Control que debe ser ejercido por el encargado de División o Proyecto'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación / Especialización',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Controlo el cumplimiento de los alcances del Plan de Invierno?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Protocolo de control de tránsito y ubicación de instalaciones',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Transmití e instruí a mi personal de las alertas decretadas?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'EPP Específico aparato de rescate de víctimas de avalancha',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Aseguro que mi personal está instruido y su ARVA está en emisión?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Monitoreo de variables nivometeorológicas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco las zonas de riesgo de avalanchas y aludes y sé qué hacer al respecto?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Control de laderas',
            'class_titulo_fila2':'fila2 regla_especial',
            'p_titulo_fila2':'*Control que debe ser ejercido por el encargado de División o Proyecto'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación / Especialización',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco el Plan de Invierno?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Protocolo de control de tránsito y ubicación de instalaciones',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco los tipos de alerta y sé cómo actuar en cada una de ellas?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'EPP Específico aparato de rescate de víctimas de avalancha',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Para transitar en superficie cuento con ARVA en buenas condiciones?'
          }
        ]
      },
      {
        'btn_numero': '16',
        'src' : '../assets/imgs/reglas/regla16_icono.png',
        'btn_txt': 'YO SIEMPRE MANTENDRÉ DISTANCIA SEGURA DE LUGARES CON RIESGO DE CAÍDA A PIQUE',
        'peligro':'PELIGRO: CAÍDA A PIQUE',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Segregación de puntos de vaciado',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los puntos de vaciado sin operar, se encuentran tapados?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Muro de brocal',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El pique de vaciado cuenta con muro de acuerdo a diseño y está en buenas condiciones?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Sistema personal para detención de caídas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Revisé si el sistema personal para detención de caídas es efectivo y se utiliza correctamente?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Iluminación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Todos los piques de mi responsabilidad se encuentran iluminados de manera que permite visualizarlos claramente?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Señalización / Segregación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Todos los piques de mi responsabilidad se encuentran señalizados, de tal manera que me permite identificarlo claramente?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Segregación de puntos de vaciado',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Evalúo en mi área si existen puntos de vaciado sin operar y tapados?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Muro de brocal',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los puntos de vaciado de producción cuentan con muros que impidan la caída?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Sistema personal para detención de caídas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Cuento con el EPP, sé cómo se utiliza y uso mi arnés de seguridad al exponerme al riesgo de caída a pique?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Iluminación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El lugar se encuentra iluminado de manera que permite identificar claramente el pique y me posibilita transitar en condiciones seguras?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Señalización / Segregación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿La señalización permite identificar claramente el pique?'
          }
        ]
      },
      {
        'btn_numero': '17',
        'src' : '../assets/imgs/reglas/regla17_icono.png',
        'btn_txt': 'YO SIEMPRE MANTENDRÉ DISTANCIA SEGURA DE ZONAS CRÍTICAS DE BOMBEO AGUA BARRO',
        'peligro':'PELIGRO: EXPOSICIÓN A BOMBEO AGUA BARRO',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Estudios hidrogeológicos actualizados en zonas expuestas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Informé al personal a mi cargo de los puntos con riesgo de bombeo y sus medidas de control?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Contar con equipos telecomandados en zonas críticas de bombeo agua barro',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Definí y controlé la posición del operador?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Evaluación y autorización para ingreso a zonas de bombeo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Cuento con una evaluación de especialistas y la autorización correspondiente del Superintendente o Director?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación del personal que ejecuta actividades en zonas con potencial de bombeo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy capacitado para detectar los cambios de humedad?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Monitoreo de los puntos de riesgos de bombeo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Realicé control permanente en las zonas identificadas con riesgo de bombeo y sus medidas de control?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Estudios hidrogeológicos actualizados en zonas expuestas',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco las zonas de humedad con peligros de bombeo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Contar con equipos telecomandados en zonas críticas de bombeo agua barro',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Mantengo las distancias de seguridad definidas por mi supervisor?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Evaluación y autorización para ingreso a zonas de bombeo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Cuento con autorización de ingreso?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación del personal que ejecuta actividades en zonas con potencial de bombeo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy capacitado en el riesgo de bombeo y el control de éste?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Monitoreo de los puntos de riesgos de bombeo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Sé que tengo que abandonar el área al tener escurrimiento de agua en el punto de extracción?'
          }
        ]
      },
      {
        'btn_numero': '18',
        'src' : '../assets/imgs/reglas/regla18_icono.png',
        'btn_txt': 'YO SIEMPRE ESTARÉ ATENTO A LOS CONTROLES DE TERRENO / CAÍDA DE ROCA - PLANCHONEO',
        'peligro':'PELIGRO: ATRAPAMIENTO POR CAÍDA DE ROCA',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Acuñadura y Saneamiento',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los sectores de mi responsabilidad de trabajo se encuentran acuñados / saneados?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Fortificación / Estabilización de materiales no consolidados',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿La fortificación / saneamiento de banco está de acuerdo a diseño?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación / Especialización',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Instruí al personal a mi cargo acerca de los sectores con riesgo de caída de roca / planchoneo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Control geotécnico / geomecánico / geométrico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Cuento con información geotécnica de las áreas que presentan riesgo de caída de rocas / planchoneo?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Segregación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Realicé una efectiva segregación de la o las áreas que presentan riesgo de caída de roca / planchoneo?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Acuñadura y Saneamiento',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El sector donde voy a ingresar se encuentra acuñado / saneado?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Fortificación / Estabilización de materiales no consolidados',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El área está fortificada / saneada?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Capacitación / Especialización',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Solicité información acerca de áreas con riesgo de atrapamiento por caída de roca / planchoneo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Control geotécnico / geomecánico / geométrico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Puedo identificar los riesgos de caída de roca/ planchoneo?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Segregación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Me encuentro dentro de un área segregada?'
          }
        ]
      },
      {
        'btn_numero': '19',
        'src' : '../assets/imgs/reglas/regla19_icono.png',
        'btn_txt': 'YO SIEMPRE PEDIRÉ AUTORIZACIÓN Y CAPACITACIÓN ANTES DE HACER INGRESO A UN ÁREA DE TRANSICIÓN',
        'peligro':'PELIGRO: EXPOSICIÓN A ESTALLIDO DE ROCA',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Contar y mantener sistema de monitoreo sísmico y alerta temprana',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco el Estado de Alerta de las áreas con este riesgo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Señalización de sectores propensos a estallido de roca',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo actualizada e informada la zona de transición?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Uso de equipos telecomandados en zonas críticas de transición',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo sólo equipos telecomandados en las zonas críticas de transición en niveles de hundimiento y producción?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Evaluación y autorización para el ingreso a zonas de transición',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Evalué la zona antes de autorizar el ingreso a la zona de transición?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Capacitación del personal expuesto',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco los protocolos de alerta y evacuación?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Contar y mantener sistema de monitoreo sísmico y alerta temprana',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Cuento con información del monitoreo sísmico?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Señalización de sectores propensos a estallido de roca',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco la zona de transición?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Uso de equipos telecomandados en zonas críticas de transición',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy operando equipos telecomandados en zonas críticas de transición en áreas de hundimiento y producción?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Evaluación y autorización para el ingreso a zonas de transición',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Estoy autorizado para ingresar a zonas de transición?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Capacitación del personal expuesto',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Sé cómo actuar en caso de alerta?'
          }
        ]
      },
      {
        'btn_numero': '20',
        'src' : '../assets/imgs/reglas/regla20_icono.png',
        'btn_txt': 'YO SIEMPRE UTILIZARÉ MI RESPIRADOR EN PRESENCIA DE POLVO SÍLICE',
        'peligro':'PELIGRO: EXPOSICIÓN A POLVO CON CONTENIDO SÍLICE',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Exámenes de Aptitud vigentes para exposición a Sílice',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los trabajadores a mi cargo cuentan con exámenes ocupacionales y de vigilancia médica al día?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Señalización de advertencia de riesgo / Uso correcto de Equipo de Protección Respiratoria (EPR) de acuerdo a la tarea y nivel de riesgo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El área cuenta con señalización de advertencia sobre exposición a sílice y uso obligatorio de EPR? ¿Los trabajadores usan correctamente el EPR?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Sistemas críticos de control de polvo operando (supresión, encerramiento, captación, precipitación, presión positiva, filtrado previo, hermeticidad, etc.) en equipos, herramientas, cabinas, caminos o instalaciones',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El (los) sistema(s) crítico(s) de control de polvo se encuentra(n) funcionando?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Aseo / limpieza y técnicas que eviten la dispersión de polvo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los trabajadores utilizan métodos de limpieza apropiados para evitar la dispersión del polvo?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Sistemas de ventilación operando en área subterránea',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El sistema de ventilación se encuentra funcionando?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Exámenes de Aptitud vigentes para exposición a Sílice',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo mis exámenes médicos para trabajar y están vigentes?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Señalización de advertencia de riesgo / Uso correcto de Equipo de Protección Respiratoria (EPR) de acuerdo a la tarea y nivel de riesgo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo el EPR adecuado y sé cómo usarlo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Sistemas críticos de control de polvo operando (supresión, encerramiento, captación, precipitación, presión positiva, filtrado previo, hermeticidad, etc.) en equipos, herramientas, cabinas, caminos o instalaciones',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El (los) sistema(s) crítico(s) de control de polvo se encuentra(n) funcionando?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Aseo / limpieza y técnicas que eviten la dispersión de polvo',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco y aplico métodos de limpieza que eviten la dispersión de polvo?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Sistemas de ventilación operando en área subterránea',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El sistema de ventilación se encuentra funcionando?'
          }
        ]
      },
      {
        'btn_numero': '21',
        'src' : '../assets/imgs/reglas/regla21_icono.png',
        'btn_txt': 'YO SIEMPRE UTILIZARÉ MI EPP ESPECÍFICO EN PRESENCIA DE ARSENITA',
        'peligro':'PELIGRO: EXPOSICIÓN A ARSÉNICO INORGÁNICO',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Exámenes de vigilancia de Indicador Biológico: Arsénico inorgánico en orina a trabajadores definidos con riesgo de exposición a arsénico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los trabajadores a mi cargo se han realizado el examen de vigilancia de exposición a Arsénico?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Señalización de advertencia de riesgo / Uso correcto de EPP (de acuerdo a la tarea y nivel de riesgo)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El área cuenta con señalización de advertencia de riesgo de exposición a arsénico y uso obligatorio de EPP específico? ¿Los trabajadores usan correctamente el EPP específico?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Sistema de control operando (encerramiento, captación, filtrado previo y presión positiva, hermeticidad, material antiadherente en revestimiento de chutes de traspaso, presión negativa en unidades de proceso, etc.) en instalaciones, zonas de acopio, equipos, vehículos de transporte de material con contenido de As o como RESPEL',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El (los) sistema(s) crítico(s) de control de polvo se encuentra(n) funcionando?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Aseo o limpieza mediante métodos que eviten la dispersión de polvo con contenido de arsénico (Incluye el lavado de equipos/vehículos de transporte y herramientas)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los trabajadores utilizan métodos de limpieza apropiados para evitar la dispersión del polvo?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Instructivo de normas higiénicas y uso de casa de cambio / áreas de hidratación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Di a conocer el instructivo a los trabajadores y verifiqué que lo cumplen?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Exámenes de vigilancia de Indicador Biológico: Arsénico inorgánico en orina a trabajadores definidos con riesgo de exposición a arsénico',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Tengo vigente mi examen de orina para verificar exposición a arsénico?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Señalización de advertencia de riesgo / Uso correcto de EPP (de acuerdo a la tarea y nivel de riesgo)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco el riesgo de exponerme al arsénico? ¿Tengo el EPP adecuado y sé cómo usarlo?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Sistema de control operando (encerramiento, captación, filtrado previo y presión positiva, hermeticidad, material antiadherente en revestimiento de chutes de traspaso, presión negativa en unidades de proceso, etc.) en instalaciones, zonas de acopio, equipos, vehículos de transporte de material con contenido de As o como RESPEL',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El (los) sistema(s) crítico(s) de control de polvo se encuentra(n) funcionando?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Aseo o limpieza mediante métodos que eviten la dispersión de polvo con contenido de arsénico (Incluye el lavado de equipos/vehículos de transporte y herramientas)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco y aplico métodos de limpieza que eviten la dispersión de polvo?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Instructivo de normas higiénicas y uso de casa de cambio / áreas de hidratación',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco el instructivo de uso adecuado de casa de cambio y áreas de hidratación, y lo aplico correctamente?'
          }
        ]
      },
      {
        'btn_numero': '22',
        'src' : '../assets/imgs/reglas/regla22_icono.png',
        'btn_txt': 'YO SIEMPRE PROTEGERÉ MI PIEL DURANTE EL CONTACTO CON MATERIAL IRRITANTE Y/O EN AMBIENTES ÁCIDOS',
        'peligro':'PELIGRO: RIESGO DE DERMATITIS POR CONTACTO',
        'primera_col':'col-2',
        'segunda_col':'col-7',
        'supervisor':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Advertencia del Riesgo en Terreno',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El área de trabajo cuenta con mapa de riesgo? ¿Los trabajadores conocen sus riesgos y cómo controlarlos?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Uso correcto de EPP (de acuerdo a la tarea y nivel de riesgo)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los trabajadores utilizan correctamente los EPPs definidos? ¿Los trabajadores cuidan sus EPPs (limpieza, almacenamiento y eliminación)'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Sistema de Control (Aseo, limpieza, captación, rotación, pausas en trabajos de contacto directo)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El área de trabajo se recibe limpia y ordenada? (material ensacado o acopiado) ¿Las tareas a ejecutar requieren de humectación, aspirado, pausas y/o rotación?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Tareas Críticas (Interior de Equipos y Plataformas)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Los procedimientos consideran riesgos de Salud Ocupacional?(control del área, pausas, EPP específico)'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Prácticas de Higiene (Ducha, afeitado, uñas, ropa, alimentación, hidratación)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Informo a mis trabajadores las Normas de Higiene? ¿Aseguro que los trabajadores se hidratan y se trasladen en buses limpios?'
          }
        ],
        'operador':[
          {
            'class_fila1':'fila1 primera',
            'p_fila1':'Advertencia del Riesgo en Terreno',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Conozco los riesgos de mi tarea y cómo puede dañar mi salud?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Uso correcto de EPP (de acuerdo a la tarea y nivel de riesgo)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Utilizo y cuido mis EPPs como fui instruido?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Sistema de Control (Aseo, limpieza, captación, rotación, pausas en trabajos de contacto directo)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿El área que intervendré está limpia? ¿Necesito utilizar humectación y/o aspirado para controlar el material particulado presente en mis tareas? ¿Tomo pausas definidas?'
          },{
            'class_fila1':'fila1',
            'p_fila1':'Tareas Críticas (Interior de Equipos y Plataformas)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Reconosco los riesgos de Salud Ocupacional en mis actividades diarias?'
          },{
            'class_fila1':'fila1 ultima',
            'p_fila1':'Prácticas de Higiene (Ducha, afeitado, uñas, ropa, alimentación, hidratación)',
            'class_titulo_fila2':'fila2',
            'p_titulo_fila2':'¿Cumplo don ducha, uso toalla, cambio de ropa diaria, uso dos casilleros, afeitado, uñas cortas, ingreso a casino y bus limpio y evito llevar manos a la boca?'
          }
        ]
      }
    ]
  }

  openR1(item){
    this.navCtrl.push(R1Page,{ item: item });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Reglas3Page');
  }

}
