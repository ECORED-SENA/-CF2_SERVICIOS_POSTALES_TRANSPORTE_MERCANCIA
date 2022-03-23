<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manejo de documentación
    
    p En los servicios postales, al igual que en todo proceso de movilización de mercancías y en especial de aquellas que pueden involucrar cambio de manos, la documentación y procesos de administración de las mismas, en físico y digital, requieren un tratamiento reglamentado tanto a nivel legal como a nivel privado respecto a los procesos de control y auditoría de cada operador.
    p.mb-5 Ahora, profundice en los aspectos más relevantes del manejo de documentación, observando las tres etapas de este proceso con su respectiva explicación, a través del siguiente recurso:

    SlyderB.mb-3(:datos="datosSlyder")

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Elaboración de informes
    
    .row.mb-5
      .col-12.col-md-8.col-lg-8.mb-3(data-aos="fade-right").align-items-center
        div
          p Las empresas de servicios postales y transporte de mercancías en el proceso de operación de sus servicios deben generar una serie de informes que les permita no solo dar cumplimiento a lo establecido en la normatividad vigente y por las entidades reguladoras, sino que además, procesar información que favorezca la trazabilidad de los servicios que prestan y hacer evaluación de los mismos.
          p El Artículo 5 de la Resolución 6128 de 2020 establece que las empresas de servicios postales y transporte de mercancías deben reportar información de la CRC; la información reportada debe contener:
      .col-12.col-md-4.col-lg-4.mb-2(data-aos="fade-left")
       .imagen-adornos-flotantes
          img.img350(src="@/assets/curso/tema4/t4-6.png" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/tema4/sobre.svg" style="left: ; right: 34% ; top: ; bottom: -15% ; width: 170px ")
      
    ol.lista-ol.lista-ol--separador.mb-5
      li 
        span.text-bold a. 
        span #[strong Año:] 
          | que se está reportando, este es un campo numérico.
      li 
        span.text-bold b. 
        span #[strong Trimestre:] 
          | del año que se está reportando, también campo numérico.
      li 
        span.text-bold c. 
        span #[strong Mes:] 
          | del trimestre que se está reportando, campo numérico.
      li 
        span.text-bold d. 
        span #[strong Tipo de objeto:] 
          |son los tipos de objetos postales para los cuales se generaron ingresos, como paquetes o documentos.
      li 
        span.text-bold e. 
        span #[strong Tipo de servicio:] 
          | se registran los servicios prestados como correo, telégrafo, encomienda normal, encomienda certificada, correspondencia no prioritaria normal, correspondencia no prioritaria certificada, etc.
      li 
        span.text-bold f. 
        span #[strong Tipo de correo:] 
          | refiere si el servicio se prestó a través del servicio de correo perteneciente al Sistema Postal Universal o fue un servicio prestado a partir del sistema que no pertenece al SPU.
      li 
        span.text-bold g. 
        | Tipo de cliente.
      li 
        span.text-bold h. 
        | Tipo de remitente.
      li 
        span.text-bold i. 
        span #[strong Tipos de envíos:] 
          | masivos, individuales.
      li 
        span.text-bold j. 
        | Ámbito del envío.
      li 
        span.text-bold k. 
        | Código municipio de destino.
      li 
        span.text-bold l. 
        | Código municipio de origen.
      li 
        span.text-bold m. 
        | Código del país.
      li 
        span.text-bold n. 
        | Rango de peso.
      li 
        span.text-bold o. 
        | Ingresos, expresados en pesos.
      li 
        span.text-bold p. 
        | Número total de envíos.

    .row.justify-center.mb-5(data-aos="zoom-in-up")
      .col-12.col-md-8.col-lg-8
        TabsC.color-primario
          .py-3.py-md-4.bgr_3.p-4(titulo="¡Atención!")
            p Otros informes que deben generarse en la organización:
            p.m-0 La recepción de solicitudes.
            p.m-0 Recibo de objetos postales y mercancías vs. las entregas realizadas.
            p.m-0 Informe de novedades.
            p.m-0 Informe de gestión documental.
          .py-3.py-md-4.bgr_3.p-4(titulo="¡Importante!")
            p Los informes explicados anteriormente permiten que la empresa evalúe e inspeccione los procesos, realice seguimientos e implemente planes y acciones de mejora continua, para el cumplimiento de entregas oportunas y demás objetivos organizacionales.    
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2	Documentos aplicados
    
    p En lo que respecta a los envíos en condición de envío especializado, han de procesarse documentos a los que se les aplica un trato diferenciado, por ejemplo, los apostillados, las notificaciones judiciales, historias clínicas, documentos de alta confidencialidad, entre otros.
    p.mb-5 Al respecto, se muestran a continuación, algunos aspectos de suma importancia que debe tener en cuenta:

    
    ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in-up")
      template(v-slot:imagen)
        figure.justify-center
          img.img750(src='@/assets/curso/tema4/t4-7.svg', alt='Imagen 4-7')

      .tarjeta.color-acento-botones.p-3(x="18%" y="35%" numero="1")
        p Los documentos aplicados son aquellos que se envían con registro especial de seguridad y están sujetos a un tratamiento diferenciado, en relación con el que se da cuando se trata de un objeto postal tradicional.
      .tarjeta.color-acento-botones.p-3(x="31%" y="79%" numero="2")
        p Los tratamientos especiales dependerán de la entidad que los requiera en cada servicio. 
      .tarjeta.color-acento-botones.p-3(x="50%" y="94%" numero="3")
        p Según la necesidad que cada uno determine, respecto a la importancia, deferencia, confidencialidad, agilidad y demás elementos que caractericen el documento en particular, este manejo es entregado por el solicitante del servicio al operador postal.
      .tarjeta.color-acento-botones.p-3(x="69%" y="79%" numero="4")
        p El régimen de concesiones y licencias postales también define cuál licencia o autorización se concederá para la prestación de servicios de mensajería especializada.
      .tarjeta.color-acento-botones.p-3(x="82%" y="35%" numero="5")
        p Los servicios de envíos especializados serán prestados de forma independiente a las redes de servicios postales oficiales, tanto nacionales como internacionales. 

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Etapa uno, de generación del documento',
        texto:
          'En esta etapa se genera un hecho, del cual se debe obtener un documento en el que se registren todos los componentes necesarios, que permitan identificar el proceso que se está implementando.',
        imagen: require('@/assets/curso/tema4/t4-1.png'),
      },
      {
        titulo: 'Debe contener',
        texto:
          'Este documento debe contener información como: datos de origen de las mercancías, datos del tránsito de la mercancía y del destino de la misma; el documento también ha de registrar información sobre las características naturales (volumen, peso, masa) y datos tarifarios.',
        imagen: require('@/assets/curso/tema4/t4-2.png'),
      },
      {
        titulo: 'Etapa dos, de documentación interna',
        texto:
          'Los documentos generados en este punto registrarán la recepción del objeto postal, el tratamiento interno de verificación y el almacenamiento, para la posterior designación de transporte y traslado.',
        imagen: require('@/assets/curso/tema4/t4-3.png'),
      },
      {
        titulo: 'Documentación vehicular',
        texto:
          'Los documentos del vehículo que se utilizará para el transporte se determinan según la naturaleza de las mercancías, la guía del objeto postal o la mercancía y la recepción en el destino final de la compañía que realiza el transporte.',
        imagen: require('@/assets/curso/tema4/t4-4.png'),
      },
      {
        titulo: 'Etapa tres, de registro y conservación',
        texto:
          'Una vez entregado el objeto postal o la mercancía, y luego de haberse producido la evidencia de recepción por parte del destinatario, debe conservarse el registro físico y documental, en cumplimiento de la normatividad vigente y para probables verificaciones posteriores.',
        imagen: require('@/assets/curso/tema4/t4-5.png'),
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
