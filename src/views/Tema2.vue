<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Servicio postal: definición y clasificación
    
    #t_2_1.titulo-segundo
      .h4 2.1 Servicio postal universal y sistema tarifario 
    
    
    #t_2_2.titulo-segundo
      .h4 2.2 Objetos postales

   
    #t_2_3.titulo-segundo
      .h4 2.3 Mercancías

    
   
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
