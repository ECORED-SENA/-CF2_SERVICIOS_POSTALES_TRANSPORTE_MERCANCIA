<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normativa asociada
    
    .row.mb-5
      .col-12.col-md-4.col-lg-4.mb-4(data-aos="fade-right")
       .imagen-adornos-flotantes
          img(src="@/assets/curso/tema1/t1-1.png" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/tema1/sobre.svg" style="left: ; right: 10% ; top: ; bottom: -12% ; width: 170px ")
      .col-12.col-md-8.col-lg-8(data-aos="fade-left")
        p Los servicios postales están definidos en la #[strong Ley 1369 de 2009] y se entienden como “las actividades de recepción, clasificación, transporte y entrega de objetos postales a través de redes postales, en el territorio nacional o para enviar a otros países o recibir del exterior, estos se clasifican en servicio de correo, servicios postales de pago, servicios de mensajería expresa y otros servicios postales, definidos como aquellos que la unión postal universal clasifique como tales” (MinTIC, 2020, p. 19).
        p Es así como el punto de partida para abordar el tema de servicios postales es:
    
    figure.justify-center.mb-5(data-aos="zoom-in-up")
      img.img850(src="@/assets/curso/tema1/t1-2.svg" alt="1-2")

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2.justify-end
          img.img90(src="@/assets/curso/tema1/t1-3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small Amplíe su conocimiento sobre la normatividad y disposiciones legales que regulan los servicios postales en Colombia, para ello, observe el video que aquí se propone.  
            .col-sm-auto.justify-star
              a.boton.color-acento-botones.indicador__container(href="https://www.youtube.com/embed/2L91WMqw96A" target="_blank")
                span Ver más
                i.fas.fa-link
                .indicador--click(v-if="mostrarIndicador")
          
         


          
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    modal1: false,
  }),
}
</script>

<style lang="sass"></style>
