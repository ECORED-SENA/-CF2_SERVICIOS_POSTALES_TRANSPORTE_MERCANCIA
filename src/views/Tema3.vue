<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Métodos de codificación
    
    #t_3_1.titulo-segundo
      .h4 3.1 Métodos de divulgación documental


    #t_3_2.titulo-segundo
      .h4 3.2 Fichas técnicas
    
    


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
