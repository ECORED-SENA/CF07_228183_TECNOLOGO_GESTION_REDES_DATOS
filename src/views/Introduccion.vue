<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mx-0
      .col-12.bg-c1(data-aos="fade-right")
        .p-4
          .row
            .col-12.bg-white.shadow-lg
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/intro/img1.svg', style="width: 40px" ,alt='').m-auto
                  .col
                    p.mb-0 Reciba una cordial bienvenida al estudio del componente formativo “#[b.txt-c1 Verificación / transmisión de datos]”; comience consultando el video que se propone enseguida con el cual usted podrá familiarizarse con el enfoque y temas que aquí se desarrollarán. #[b.txt-c1 ¡Adelante!]
    .row
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
