<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Servicio postal: definición y clasificación
    
    .row
      .col-12.col-md-7.col-lg-7.mb-3(data-aos="fade-right")
        p La Ley 1369 de 2009 define los servicios postales como servicios de calidad, prestados de forma constante y permanente a precios asequibles, que el Estado debe garantizar en todo el territorio nacional, independientemente de la ubicación geográfica. Es a través de Operadores Postales Oficiales (OPO) o a través de un concesionario de correo que son prestados dichos servicios. 
        p De acuerdo con lo anterior, los servicios han venido evolucionando a medida que evoluciona la conectividad persona a persona; en ese proceso de cambios e innovaciones se destacan las siguientes generalidades:
      
      
      .col-12.ccol-md-5.col-lg-5(data-aos="fade-left")
        .imagen-adornos-flotantes
          img.img400(src="@/assets/curso/tema2/t2-1.png" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/tema2/sobre2.svg" style="left: ; right: 47% ; top: ; bottom: -6% ; width: 170px ")
      
      ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in-up")
        template(v-slot:imagen)
          .row.modalabso
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span Más Información
                .indicador--click(v-if="mostrarIndicador")
      
    
          ModalA(:abrir-modal.sync="modal1")
            .row.align-items-center
              .col-md-12.mb-4.mb-md-0  
                h4 Se clasifican  
                h5 Mensajería Expresa
                p Es un servicio postal, catalogado como urgente, requiere la implementación de procesos especiales para la recepción, recolección, clasificación, transporte y entrega de los objetos postales; estos no pueden superar los 5 kilogramos de peso.
                h5 Servicios postales de pago
                p son servicios de pago suministrados, a través del uso de infraestructura exclusivamente postal.
                h5 Los giros nacionales
                p Son servicios postales de pago, a  través de los cuales se ordena hacer un pago a una persona jurídica o natural, ordenado por otra persona en el territorio nacional y haciendo uso de la red postal.
                h5 Otros servicios postales de pago son los giros internacionales
                p En este servicio exclusivo del  operador postal oficial o de un concesionario de correo, se envía dinero a personas jurídicas o naturales.  Igualmente es ordenado por otra persona jurídica o natural en el exterior; los giros internacionales son regulados por la Ley 9 de 1991.
                h5 Servicios de correo
                p Otros servicios de correo son los demás servicios que la unión postal universal cataloga como tal.

          .infografia-autores.p-5(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema2/t2-2.svg" alt="Adornos flotantes")
            .infografia-autores__img(@mouseover="mostrarIndicador = false")
              img(src="@/assets/curso/tema2/1.png" style="left: 37.8% ; right:  ; top: 20.2% ; bottom:  ; width: 130px ")
              .indicador--hover(v-if="mostrarIndicador" style=" top: 19% ")
            .infografia-autores__img: img(src="@/assets/curso/tema2/2.png" style="left: 51.2% ; right:  ; top: 20.4% ; bottom:  ; width: 130px ")
            .infografia-autores__img: img(src="@/assets/curso/tema2/3.png" style="left: 57.9% ; right:  ; top: 43% ; bottom:  ; width: 130px ")
            .infografia-autores__img: img(src="@/assets/curso/tema2/4.png" style="left: 51.2% ; right:  ; top: 65% ; bottom:  ; width: 130px ")
            .infografia-autores__img: img(src="@/assets/curso/tema2/5.png" style="left: 37.8% ; right:  ; top: 65% ; bottom:  ; width: 130px ")
            .infografia-autores__img: img(src="@/assets/curso/tema2/6.png" style="left: 31.1% ; right:  ; top: 42.5% ; bottom:  ; width: 130px ")
        .tarjeta.color-acento-botones.p-3(x="33%" y="26%" numero="+")
          h4 La evolución o revolución 
          p Logra aumentar las posibilidades de supervivencia de una civilización en términos de mayor expectativa de años de vida. Los primeros servicios postales en la era antigua eran mensajero a pie o  a caballo.
        .tarjeta.color-acento-botones.p-3(x="75%" y="26%" numero="+")
          h4 Mejoras significativas y sustantiva
          p Escritura continua, codificación, seguridad, empaque, viabilidad y el nacimiento de las primeras organizaciones especializadas en servicios de mensajería, que principalmente estaban en mejor grado de formalización para las casas regentes, monarquías y comerciantes de alto nivel y hasta las diligencias de las oficinas postales movidas por caballos.
        .tarjeta.color-acento-botones.p-3(x="83%" y="58%" numero="+")
          h4 Segundo salto 
          p El ferrocarril fue el primero, luego los automóviles con especialización de bodega.
        .tarjeta.color-acento-botones.p-3(x="89%" y="85%" numero="+")
          h4 Tercer salto  
          p La llegada de la era digital aniquiló todo servicio de carta escrita, dejando solo la movilización de paquetes con usos específicos.
        .tarjeta.color-acento-botones.p-3(x="19%" y="93%" numero="+")
          h4 Los servicios postales  
          p Haciendo uso de las redes postales, este proceso se realiza en el territorio nacional para envíos a otros países o para recibir del exterior.
      
      

    separador
        
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Servicio postal universal y sistema tarifario 
    
    p.mb-4 La prestación del servicio postal incluye el proceso de recogida, admisión, clasificación, transporte, distribución y entrega de los envíos postales nacionales e internacionales. Abarca elementos como cartas y tarjetas postales de máximo dos kilogramos de peso y de paquetes postales de hasta de veinte kilogramos de peso (MinTIC, 2020).

    .cajon.bgr.p-4.mb-4(data-aos="fade-left")
      p.m-0 La unión postal universal determina normas que se deben adoptar en el servicio postal universal, estas son aprobadas por Colombia con la firma del Convenio Postal Universal; con ello se establece que los servicios postales en el país no pueden ser inferiores a la oferta registrada y fijada en el convenio.
    
    p.mb-5 A continuación, ahonde en los aspectos clave y más importantes del servicio postal universal y del sistema tarifario; para ello, observe atentamente el siguiente video:
  
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Objetos postales
    
    p Son mercancías con propósito de traslado, con un remitente y destinatario, movilizado por operadores de servicio postal debidamente autorizados, quienes ejecutan el proceso de movilización, cumpliendo los parámetros establecidos por la ley, garantizando la seguridad de las mercancías, dejando la debida trazabilidad hasta el recibo final a manos del destinatario y el respectivo registro documental físico y digital de toda la transacción.
    p.mb-4 En cuanto a los objetos postales y su transporte tenga en cuenta los siguientes aspectos:

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(data-aos="zoom-in-up")
        .row.justify-center
          .col-md-2.align-items-center
            figure
              img(src='@/assets/curso/tema2/t2-4.svg', alt='img 2-3')
          .col-md-8.mb-4.mb-md-0.align-items-center
            p Se consideran objetos postales todas las mercancías transportadas por operadores de función específica postal.
        .row.justify-center
          .col-md-2.align-items-center
            figure
              img(src='@/assets/curso/tema2/t2-5.svg', alt='img 2-3')
          .col-md-8.mb-4.mb-md-0.align-items-center
            p Deben estar autorizados y son aquellos cuyo peso no supera las normas vigentes del SGSST para movilización humana.
        .row.justify-center
          .col-md-2.align-items-center
            figure
              img(src='@/assets/curso/tema2/t2-6.svg', alt='img 2-3')
          .col-md-8.mb-4.mb-md-0.align-items-center
            p Para el año 2021, 25 kg/paquete y volumetría ergonómica; de allí en adelante, tanto en peso como en volumen y arriba de la ergonomía se ordena usar equipo de movilización mecanizado.
        .row.justify-center
          .col-md-2.align-items-center
            figure
              img(src='@/assets/curso/tema2/t2-7.svg', alt='img 2-3')
          .col-md-8.mb-4.mb-md-0.align-items-center
            p Cuando los objetos postales superan las medidas de peso, volumen y ergonomía pasan a considerarse y  a denominarse como #[strong carga].
        .row.justify-center
          .col-md-2.align-items-center
            figure
              img(src='@/assets/curso/tema2/t2-3.svg', alt='img 2-3')
          .col-md-8.mb-4.mb-md-0.align-items-center
            p Son operadores de servicios postales las personas jurídicas habilitadas por el Ministerio de las Tecnologías de la Información y Comunicaciones, que ofrece al público en general servicios postales a través de una red postal.
      
    p.mb-4 A continuación, se enuncian y explican las generalidades de los objetos postales más comunes:
    
    SlyderD.mb-0.mb-md-5(:datos="datosSlyder")
  
    p.mb-5 Las características más importantes de los objetos postales son:

    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/t2-15.png')})`}")
            .tarjeta-flip__contenido.bgr_1.p-4.p-xl-5
              figure.justify-center
                img.img90(src='@/assets/curso/tema2/t2-18.svg', alt='img 2-18')
              h3 El peso
              p.m-0 Cantidad de kilos o gramos, esto según el tipo de envío postal que se esté manipulando y que se va a despachar. El peso es importante para calcular límites de consolidación de carga que finalmente, puede ser cargado en el vehículo. 

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/t2-16.png')})`}")
            .tarjeta-flip__contenido.bgr_1.p-4.p-xl-5
              figure.justify-center
                img.img90(src='@/assets/curso/tema2/t2-19.svg', alt='img 2-19')
              h3 El volumen
              p.m-0 Característica que se halla por cubicaje; sistema métrico decimal, milímetro, centímetro, metro. Define la capacidad de los tipos de vehículos que trasladará los objetos postales.

      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/t2-17.png')})`}")
            .tarjeta-flip__contenido.bgr_1.p-4.p-xl-5
              figure.justify-center  
                img.img90(src='@/assets/curso/tema2/t2-20.svg', alt='img 2-20')
              h3 Masa
              p.m-0 Es posible encontrar envíos con poco volumen, pero de mucha masa, por ejemplo, muestras en acero, piezas de mármol, que generalmente, son objetos postales que tienen un alto peso.
      
    p.mb-5 Además de lo anterior, es importante mencionar que un objeto postal está conformado por los siguientes elementos: 

    .infografia-autores.p-5
        figure.justify-center(data-aos="zoom-in-up")
          img.img600(src="@/assets/curso/tema2/t2-21.svg" alt="Adornos flotantes")
        .infografia-autores__img(@mouseover="mostrarIndicador = false")
          img(src="@/assets/curso/tema2/t2-22.svg" style="left: 22.2% ; right:  ; top: 24.2% ; bottom:  ; width: 154px ")
          .indicador--hover(v-if="mostrarIndicador" style=" top: 19% ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/t2-23.svg" style="left: 22.4% ; right:  ; top: 56.4% ; bottom:  ; width: 154px ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/t2-24.svg" style="left: 42.9% ; right:  ; top: 8% ; bottom:  ; width: 154px ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/t2-25.svg" style="left: 63.2% ; right:  ; top: 24% ; bottom:  ; width: 154px ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/t2-26.svg" style="left: 62.8% ; right:  ; top: 56% ; bottom:  ; width: 154px ")
        .infografia-autores__img: img(src="@/assets/curso/tema2/t2-27.svg" style="left: 42.6% ; right:  ; top: 72.5% ; bottom:  ; width: 154px ")

    separador          

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Mercancías
    
    p.mb-5 Son un bien que una persona puede vender o comprar a través de una transacción, también se define como cualquier elemento que sea posible intercambiar o comercializar en un mercado. Toda mercancía tiene como característica originaria satisfacer una necesidad del comprador o consumidor; con la venta de la mercancía se cubre una demanda específica. 

    .cajon.bgr.p-4.mb-5(data-aos="fade-left")
      .row
        .col-12.col-md-4.col-lg-4.mb-3
          figure.justify-end
            img.img250(src="@/assets/curso/tema2/t2-28.svg" alt="2-28")
        .col-12.col-md-8.col-lg-8.align-items-center  
          p.m-0 La Ley 1369 de 2009 integra las mercancías, paquetes u otros artículos de circulación permitida en el territorio nacional o internacional; estos pueden tener, o no, valor declarado y un peso máximo de 25 kilogramos. Los objetos postales son definidos como encomiendas y las empresas de servicios postales tienen la obligación de transportarlos.

    p.mb-5 Según su naturaleza, las mercancías están clasificadas así:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
   
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    modal1: false,
    datosSlyder: [
      {
        titulo: 'La carta',
        texto:
          'Esta es una comunicación escrita de carácter personal, que indica un remitente y un destinatario. El peso puede ser de hasta 2 kilogramos y se moviliza por las redes postales.',
        imagen: require('@/assets/curso/tema2/t2-8.png'),
      },
      {
        titulo: 'Telegrama',
        texto:
          'Comunicación de carácter escrita y breve, se caracteriza porque debe ser entregada mediante el correo telegráfico.',
        imagen: require('@/assets/curso/tema2/t2-9.png'),
      },
      {
        titulo: 'Impresos',
        texto:
          'Son todas las impresiones en papel u otro material; incluyen la prensa, las revistas de hasta 2 kilogramos, los folletos y los catálogos.',
        imagen: require('@/assets/curso/tema2/t2-10.png'),
      },
      {
        titulo: 'Objetos postales masivos',
        texto:
          'Es la entrega de una cantidad de objetos postales que son entregados al operador postal para que sean repartidos a muchos destinatarios; los objetos deben ir debidamente diligenciados con los datos de cada destinatario.',
        imagen: require('@/assets/curso/tema2/t2-11.png'),
      },
      {
        titulo: 'Cecogramas',
        texto:
          'Impresos que utilizan signos de cecografía en sistema braille (en tinta o alto relieve). Están destinados exclusivamente para personas con limitación visual o no videntes. Incluyen libros, revistas, libros digitales y papel destinado para uso de ciegos. Estos envíos de #[strong cecogramas] pueden tener hasta un peso máximo de 7 kilogramos.',
        imagen: require('@/assets/curso/tema2/t2-12.png'),
      },
      {
        titulo: 'Saca M',
        texto:
          'Son objetos postales que contienen publicaciones periódicas como los diarios u otros documentos similares. Suelen tener un único destinatario en el mismo destino. Tienen un peso máximo de 25 kilogramos.',
        imagen: require('@/assets/curso/tema2/t2-13.png'),
      },
      {
        titulo: 'Paquetes pequeños',
        texto: 'Son objetos postales que tienen máximo 2 kilogramos de peso.',
        imagen: require('@/assets/curso/tema2/t2-14.png'),
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
