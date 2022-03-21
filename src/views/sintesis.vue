<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El servicio de recepción de mercancías comprende múltiples tareas entre las que se destacan: la recepción, la gestión documental, los controles aplicados al servicio, etiquetado, consolidación, entre otros. En la actualidad, con los avances tecnológicos las empresas que prestan servicios postales y de transporte de mercancías deben trabajar bajo normativas que regulan el sector. El plan de modernización del mismo ayudará a permanecer en el mercado y ser más competitivos.
    p En el siguiente mapa mental analice la estructura legal del sector de servicios postales y registre en su libreta personal de apuntes su propia síntesis de los contenidos estudiados en este componente.
    p.mb-5 #[strong ¡Adelante!]

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Sintesis',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
