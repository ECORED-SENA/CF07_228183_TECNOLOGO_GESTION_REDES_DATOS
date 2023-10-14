<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Implementación
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width: 450px" ,alt='').m-auto
      .col-lg-8
        p El modo de funcionamiento de la Infraestructura se basa en que todos los dispositivos se tienen que comunicar entre ellos a través de un dispositivo central y nunca directamente uno con otro.
        p.mb-0 Sus componentes son:
    .row.bg-c9
      .col-12
        .px-5
          TabsC.color-acento-botones.mb-5
            .bg-c10(titulo="Punto de acceso")
              .p-5
                .row.justify-content-center.align-items-center
                  .col-lg-3.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img2.svg', style="width: 350px" ,alt='').m-auto
                  .col-lg-7
                    p Es el dispositivo que crea la conexión inalámbrica y al cual todos los clientes deben conectarse para poder transmitir información entre ellos. Este dispositivo define las características de la red inalámbrica, como su identificador SSID (Service Set Identifier), la velocidad de transmisión, la banda de frecuencia, la codificación de la información, etc. 
                    p.mb-0 Normalmente, este dispositivo, a su vez, se conecta a una red Ethernet para dar acceso al resto de equipos.
            .bg-c10(titulo="Cliente")
              .p-5
                .row.justify-content-center.align-items-center
                  .col-lg-3.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img3.svg', style="width: 350px" ,alt='').m-auto
                  .col-lg-7
                    p Es el dispositivo que se conecta a un punto de acceso para transmitir información a través de él al resto de clientes o a la red Ethernet si existiera. 
                    p.mb-0 Dispositivo que se comunica directamente con otro cliente.
            .bg-c10(titulo="Repetidor")
              .p-5
                .row.justify-content-center.align-items-center
                  .col-lg-3.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img4.svg', style="width: 350px" ,alt='').m-auto
                  .col-lg-7
                    p Dispositivo opcional que se encarga de amplificar las ondas de emisión de un punto de acceso para que la señal llegue a puntos más lejanos. 
                    p.mb-0 El modo de funcionamiento ad-hoc (punto a punto) se basa en que los dispositivos se comunican entre sí, directamente, sin necesitar un dispositivo central que los relacione.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
