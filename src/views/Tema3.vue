<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Métodos de codificación
    
    p.mb-5 Colombia a partir del año 2009 dividió el territorio en zonas postales, a cada zona le asignó un código postal. Dichos códigos tienen 6 dígitos así #[strong 050001], los primeros dos dígitos corresponden al departamento, los siguientes dos dígitos hacen referencia a las zonas regionales y los dos últimos dígitos refieren las zonas municipales. Estos códigos postales se deben registrar en todos los envíos que se realicen de objetos postales o transporte de mercancías, con el objeto de facilitar la labor de entrega a la empresa transportadora. Por ejemplo:

    figure.justify-center.mb-5(data-aos="zoom-in-up")
      img.img600(src="@/assets/curso/tema3/t3-1.svg" alt="1-2")
    
    p.mb-5 Las empresas de servicios postales y transporte de mercancías con relación a los modelos de codificación deben:

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-center
          .col-12.col-md-10.col-lg-10
            p Dar cumplimiento en su estructura documental al componente de retención documental.
        .row.justify-center
          .col-12.col-md-10.col-lg-10
            p Aplicar los documentos soporte de entrega, guías, constancias de recibido y demás documentos adicionales que estimen conveniente y que implementen en la prestación del servicio.
        .row.justify-center
          .col-12.col-md-10.col-lg-10
            p Conservar la documentación por un período no menor de 3 años; este tiempo contado a partir de la fecha de expedición, al transcurrir este tiempo los documentos pueden ser destruidos.
        .row.justify-center
          .col-12.col-md-10.col-lg-10
            p Ofrecer garantía de conservación de copia exacta por cualquier medio técnico, es decir, se debe digitalizar la documentación. 
    .row
      .col-12.col-md-6.col-lg-6(data-aos="fade-right")
        .tarjeta.color-primario.p-4.mb-5      
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.m-0.text-small Conozca y estudie el listado de códigos postales de Colombia, visitando el documento que aquí se muestra  
            .col-sm-auto.justify-star
              a.boton.color-acento-botones.indicador__container(href="https://www.fedex.com/lacpdf/CO_CodigosPostales_02014.pdf" target="_blank")
                span Ver más
                i.fas.fa-link
                .indicador--click(v-if="mostrarIndicador")
      .col-12.col-md-6.col-lg-6(data-aos="fade-left")
        .tarjeta.color-primario.p-3.mb-5      
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.m-0.text-small Realice un recorrido por el mapa interactivo digital de códigos postales del Estado colombiano. Para ello, explore este enlace 
            .col-sm-auto.justify-star
              a.boton.color-acento-botones.indicador__container(:href="obtenerLink('/downloads/cod_post_Fedex.pdf')" target="_blank")
                span Ver más
                i.fas.fa-link
                .indicador--click(v-if="mostrarIndicador")
          
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Métodos de divulgación documental
    
    p Son un componente de gran relevancia en la prestación de los servicios postales, aplica para el manejo y conservación de los archivos digitales, los cuales toda empresa de prestación de servicios postales y manejo de mercancías debe implementar, a través de una plataforma que se ajuste a las condiciones de la organización.
    p.mb-5 En cuanto a los métodos de divulgación documental tenga en cuenta:

    .row.mb-3
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.align-items-center
              figure.justify-center
                img.img90(src='@/assets/curso/tema3/t3-2.svg', alt='img 3-2')
            .tarjeta-flip__contenido.bgr_2.p-4.p-xl-5
              p.m-0 Este proceso es de obligatorio cumplimiento, ya que cuando la empresa recibe requerimientos entre los que se cuentan los de orden judicial, debe emitir respuestas precisas dentro de los tiempos establecidos.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.align-items-center
              figure.justify-center
                img.img90(src='@/assets/curso/tema3/t3-2.svg', alt='img 3-2')
            .tarjeta-flip__contenido.bgr_2.p-4.p-xl-5
              p.m-0 Las respuestas y acciones correspondientes deben ir acompañadas de los documentos electrónicos que soportan los requerimientos: guías, soportes de entrega de documentación o paquete transportado y entregado.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.align-items-center
              figure.justify-center
                img.img90(src='@/assets/curso/tema3/t3-2.svg', alt='img 3-2')
            .tarjeta-flip__contenido.bgr_2.p-4.p-xl-5
              p.m-0 Para la entrega de dicha información, la cual es de carácter confidencial, la empresa debe tener una orden judicial o en su defecto, una solicitud autenticada ante notaria, emitida por el remitente o el destinatario. 
    
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Fichas técnicas
    
    .row.mb-5
      .col-12.col-md-4.col-lg-4.mb-2(data-aos="fade-right")
       .imagen-adornos-flotantes
          img.img350(src="@/assets/curso/tema3/t3-3.png" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/tema3/sobre.svg" style="left: ; right: 10% ; top: ; bottom: -12% ; width: 170px ")
      .col-12.col-md-8.col-lg-8(data-aos="fade-left").align-items-center
        div
          p Son los registros de los procesos o procedimientos que, al interior de las organizaciones, son implementadas para soportar y gestionar de manera adecuada y óptima la prestación del servicio desde la etapa inicial de recibo, hasta la etapa final de entrega del objeto postal o de la mercancía a su destinatario en el lugar y condiciones acordadas.
          p Las fichas técnicas son de suma importancia en tanto que facilitan la verificación y validación de los pasos y procedimientos de recepción, almacenaje, preparación de carga, cargue al vehículo y entrega al destinatario, como se muestra en la siguiente tabla.

  .container.bgr_3.p-4.p-md-5
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Formato recepción de objetos postales o transporte de mercancías
    
    figure(data-aos="zoom-in-up")
      img(src='@/assets/curso/tema3/Ficha.svg', alt='ficha')
    
    


</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
