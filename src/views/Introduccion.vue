<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.colorw
      h1 Introducción
    
    p Se da la bienvenida al componente formativo #[strong “Recibo de mercancías”], en este abordará entre otros temas clave, la codificación aplicable en el manejo de servicios y la documentación que soporta su trazabilidad y seguimiento. Para comenzar explore el recurso que se propone a continuación. 
    p #[strong ¡Adelante!]
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jQBCg1CF3lM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
