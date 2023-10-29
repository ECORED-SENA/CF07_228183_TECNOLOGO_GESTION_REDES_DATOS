<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Medios inalámbricos
    .row.align-items-center.mb-4.mb-lg-5(data-aos='fade-right')
      .col-lg-8.mb-4.mb-lg-0
        p Dicho en términos de expertos y pioneros en la materia, los medios inalámbricos se pueden definir como:
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          p.mb-2 #[b Aquellos espacios libres, por donde se propaga un tipo particular de ondas electromagnéticas: ondas de radiofrecuencia que son portadoras de señales de datos.]
          span - Durán et al. (2008).
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="max-width: 450px" ,alt='').m-auto
    .row.align-items-center.mb-5(data-aos='fade-left')
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img2.svg', style="max-width: 450px" ,alt='').m-auto
      .col-lg-7
        p En otras palabras:
        .tarjeta.tarjeta--azul(data-aos='fade-right')
          .p-4
            SlyderA(tipo="b")
              .row
                .col-12
                  p #[b Canales de transmisión]
                  p Son todos aquellos medios por los cuales se puede transmitir información sin la presencia de cableado.
              .row
                .col-12
                  p #[b Medios prácticos y accesibles]
                  p Este tipo de medio de comunicación es muy práctico para aquellos puntos donde se hace difícil el tendido de cables por la ubicación geográfica.
              .row
                .col-12
                  p #[b Medios susceptible]
                  p Su naturaleza la hace susceptible a interferencias e interceptaciones, lo que puede significar una principal desventaja en su implementación.
              .row
                .col-12
                  p #[b Medios electromagnéticos]
                  p Este tipo de comunicación se vale del espectro electromagnético, el cual Prieto (2011) define como el rango de frecuencias de todas las ondas electromagnéticas que se pueden propagar a través del espacio libre, ordenadas según su longitud de onda y su frecuencia.
    p.mb-5 Los rangos de frecuencias más utilizados en las comunicaciones inalámbricas son:
    .row.align-items-center(data-aos='fade-left')
      .col-xl-8.mb-4.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row.align-items-center(titulo="Infrarrojos (IR)")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Se utilizan en comunicaciones punto a punto de corto alcance, son muy direccionales y no pueden atravesar obstáculos. Este medio se utiliza habitualmente en el mando a distancia de la televisión y, hasta hace unos años, era también un sistema de comunicación que se utilizaba a menudo para conectar dispositivos situados el uno al lado del otro. Es el rango de frecuencia más alto para comunicaciones inalámbricas.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img2.png', style="max-width: 450px" ,alt='').m-auto
          .row.align-items-center(titulo="Microondas (MW)")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Este rango de frecuencias es adecuado para transmisiones de largo recorrido (comunicaciones por satélite, comunicaciones terrestres punto a punto como alternativa al cable coaxial o la fibra óptica y, también, la mayoría de las tecnologías inalámbricas más habituales que existen en la actualidad, como UMTS, Bluetooth o WLAN). Las microondas suelen ser direccionales y utilizan una parte del espectro con frecuencias más pequeñas que los infrarrojos.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img3.png', style="max-width: 450px" ,alt='').m-auto
          .row.align-items-center(titulo="Radiofrecuencias (RF)")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Es el rango que utilizan las transmisiones de radio (FM, AM) y televisión digital terrestre (TDT). Las radiofrecuencias son omnidireccionales y pueden atravesar obstáculos sin ningún problema.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img4.png', style="max-width: 450px" ,alt='').m-auto
      .col-xl-4.d-none.d-xl-block
        figure
          img(src='@/assets/curso/tema1/img1.png', style="max-width: 450px" ,alt='').m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Estándares de transmisión inalámbrica
    p.mb-5 Los estándares en la comunicación inalámbrica permiten una versatilidad en todos los servicios y productos que ofrece esta tecnología. Esto se traduce en una interoperabilidad, es decir, que puede alternar entre diferentes proveedores de esta tecnología, como:
    .row.bg-c2.mb-5
      .col-12
        .px-5.pt-5.pt-lg-0(data-aos='zoom-in')
          .row.justify-content-center.mb-5
            .col-lg-5.bg-c3
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img5.svg', style="max-width: 80px" ,alt='')
                p.text-white El Instituto de Ingenieros Eléctricos y Electrónicos (IEEE, por sus siglas en inglés) es una organización dedicada a la implementación de estándares de comunicación en el área de las tecnologías de la comunicación y la información.
            .col-lg-5.bg-c4
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img6.svg', style="max-width: 80px" ,alt='')
                p.text-white Está constituido por una serie de profesionales, ingenieros eléctricos, electrónicos, de sistemas y afines, los cuales aportan sus conocimientos para determinar los mejores canales y mecanismos a la hora de establecer sistemas de comunicaciones.
          .row.align-items-center.mb-5
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img7.svg', style="max-width: 80px" ,alt='').m-auto
            .col
              p.mb-0 El conjunto de estándares para redes de área local LAN son definidos por el Instituto de Ingenieros Eléctricos y Electrónicos IEEE. Este organismo define los estándares de obligatorio cumplimiento, en este caso, en el desarrollo de productos de red. Uno de estos estándares es el 802. Existen muchos estándares individuales dentro del paraguas del 802, incluyendo los 802.3 (redes basadas en cable) y los 802.11 (redes inalámbricas).
          p.mb-5 Estos son, algunos estándares de transmisión inalámbrica más comunes y usados:
          .tarjeta.tarjeta--blanca
            .p-4.p-lg-5.mb-5
              LineaTiempoC.color-acento-botones(text-small)
                .row(titulo="IEEE802.3")
                  .col-12
                    h4.mt-4 IEEE802.3
                    p.mb-0 Estándar para redes basadas en cable: se originó a finales de los años setenta y es mundialmente conocido como el estándar Ethernet. Inicialmente, definió redes a velocidad de 10Mbps (Megabits por segundo) sobre cable de tipo coaxial o también de par trenzado.
                .row(titulo="IEEE 802.11")
                  .col-12
                    h4.mt-4 IEEE 802.11
                    p Estándar creado en 1997 que define y gobierna las redes de área local inalámbricas WLAN que operan en el espectro de los 2,4 GHz (Gigahercios). El estándar original especificaba la operación a 1 y 2 Mbps, usando tres tecnologías diferentes:
                    ul.lista-ul
                      li
                        i.lista-ul__vineta
                        span #[i Frequency Hopping Spread Spectrum FHSS]
                      li
                        i.lista-ul__vineta
                        span #[i Direct Sequence Spread Spectrum DSSS]
                      li
                        i.lista-ul__vineta
                        span Infrarrojos IR
                .row(titulo="IEEE 802.11b")
                  .col-12
                    h4.mt-4 IEEE 802.11b
                    p Definido en 1999. Permite velocidades de 5,5 y 11 Mbps en el espectro de los 2,4GHz. Compatible con el estándar original de 1 y 2 Mbps (sólo con los sistemas DSSS, no con los FHSS o sistemas infrarrojos), incluye una nueva técnica de modulación llamada Complementary Code Keying (CCK), que permite el incremento de velocidad. El estándar 802.11b define una única técnica de modulación para las velocidades superiores - CCK - al contrario que el estándar original 802.11, que permitía tres técnicas diferentes (DSSS, FHSS e infrarrojos).
                .row(titulo="IEEE 802.11b+")
                  .col-12
                    h4.mt-4 IEEE 802.11b+
                    p Variación del IEEE 802.11b, opera a 22Mbps contra los 11Mbps de la versión 11b; sin embargo, no es un estándar. Aunque aparece en la mayoría de las documentaciones como IEEE 802.11b+, IEEE nunca lo ha certificado como estándar. Fue diseñado por Texas Instruments y adoptado por algunos fabricantes de dispositivos inalámbricos, como D-Link y Global Sun, que utilizan estos chipsets.
                .row(titulo="IEEE 802.11g")
                  .col-12
                    h4.mt-4 IEEE 802.11g
                    p Ofrece 54Mbps en la banda de 2,4GHz, compatible con los equipos wifi preexistentes. Para dispositivos inalámbricos de tipo wifi 802.11g, proporciona una forma sencilla de migración a alta velocidad, extendiendo el período de vida de los dispositivos de 11Mbps.
                .row(titulo="IEEE 802.15")
                  .col-12
                    h4.mt-4 IEEE 802.15
                    p Define las redes de área personal WPAN. Estas redes también se conocen como redes inalámbricas de corta distancia y se usan principalmente en PDAs, periféricos, teléfonos móviles y electrónica de consumo. El objetivo de este grupo de trabajo es publicar estándares WPAN para el mercado doméstico y de consumo que, además, sean compatibles con otras soluciones inalámbricas Bluetooth y basadas en cable. Aún no tienen estándares operativos definidos.
                .row(titulo="IEEE 802.16")
                  .col-12
                    h4.mt-4 IEEE 802.16
                    p Acceso inalámbrico a banda ancha WiMAX. La misión del grupo de trabajo 802.16 es desarrollar sistemas Inalámbricos de Área Metropolitana. Durante el año pasado, WiMAX se ha promocionado como el estándar inalámbrico de banda ancha del futuro.
    .row.align-items-center(data-aos='fade-right')
      .col-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img5.png', style="max-width: 350px" ,alt='').m-auto
      .col-lg-10
        p #[b.txt-c2 ¿Qué sucede cuando un fabricante o proveedor no desea compartir sus secretos comerciales?]
        ul.lista-ul
          li.d-flex
            i.fas.fa-check(style="color: #8054F8")
            span Puede definir un estándar cerrado.
          li.d-flex
            i.fas.fa-check(style="color: #8054F8")
            span En caso contrario, lo puede definir como abierto.
          li.d-flex
            i.fas.fa-check(style="color: #8054F8")
            span Definir un estándar como cerrado trae consigo muchos beneficios al fabricante o vendedor, pues no podrá ser objeto de plagios que pongan en riesgo su actividad.
          li.d-flex
            i.fas.fa-check(style="color: #8054F8")
            span El estándar cerrado suele aumentar los ingresos económicos del proveedor.
        .row.align-items-center
          .col-md-auto.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/img8.svg', style="max-width: 170px" ,alt='').m-auto
          .col
            p.mb-0 La anterior determinación influye negativamente en el constante proceso de evolución de la tecnología, pues muchos de los conocimientos adquiridos en cierto sistema de comunicación quedan limitados a su fabricante. En contraste, un estándar definido como abierto, está dispuesto para toda la comunidad científica y de ingenieros, los cuales pueden realizar mejoras, aportes al estándar y, así mismo, contribuir al desarrollo de dicha tecnología.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Seguridad en la red
    .row.align-items-center.mb-0.mb-lg-5(data-aos='fade-right')
      .col-lg-6.mb-4.mb-lg-0
        p La seguridad en la red de datos, sea alámbrica o no, es un factor fundamental en el libre desarrollo del desempeño de cualquier organización, pues es por la red por donde circula uno de los activos más importantes con los que cuenta dicha organización.
        p La seguridad en la red, entonces, consiste en mantener alejados a los diferentes entes maliciosos que desean obtener la información sin previa autorización.
        p Sobre el concepto de seguridad en la red, es clave tener presente aspectos como:
      .col-lg-6.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img6.png', style="max-width: 650px" ,alt='').m-auto
    .row.align-items-center.mb-5(data-aos='fade-right')
      .col-xl-4.d-none.d-xl-block.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img7.png', style="max-width: 450px" ,alt='').m-auto
      .col-xl-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row.align-items-center(titulo="¿Qué es, realmente la seguridad en la red?")
            .col-12
              p De acuerdo con Soriano (2014), el concepto de seguridad de la información no se limita a eliminar virus, evitar que hackers puedan acceder a la red y suprimir el spam en el correo electrónico.
          .row.align-items-center(titulo="Procedimientos de la seguridad")
            .col-12
              p La seguridad de la información también abarca los procedimientos que deben seguir los empleados y la dirección de una compañía para garantizar la protección de los datos confidenciales y de los sistemas de información frente a las amenazas actuales.
          .row.align-items-center(titulo="Implicaciones organizacionales")
            .col-12
              p La seguridad de la información se convierte en una política obligatoria, que toda empresa debe implementar para proteger su activo más preciado.
          .row.align-items-center(titulo="Elementos de garantía de la seguridad")
            .col-12
              p Son cinco los elementos necesarios para garantizar la seguridad de la información:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check(style="color: #8054F8")
                  span Confidencialidad.
                li.d-flex
                  i.fas.fa-check(style="color: #8054F8")
                  span Autenticación.
                li.d-flex
                  i.fas.fa-check(style="color: #8054F8")
                  span Integridad.
                li.d-flex
                  i.fas.fa-check(style="color: #8054F8")
                  span Disponibilidad.
                li.d-flex
                  i.fas.fa-check(style="color: #8054F8")
                  span No repudiación (rendición de cuentas).
    p.mb-5 Estas son algunas especificaciones que usted debe tener en cuenta, en relación con los cinco elementos de garantía de la seguridad de la información:
    .row.align-items-center.mb-5(data-aos='fade-right')
      .col-xl-8.mb-4.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row.align-items-center(titulo="Confidencialidad")
            .col-12
              p Hay que asegurar que la información no es divulgada a personas no autorizadas, procesos o dispositivos. (Protección contra divulgación no autorizada).
          .row.align-items-center(titulo="Autenticación")
            .col-12
              p Medida de seguridad diseñada para establecer la validez de una transmisión, mensaje o remitente, o un medio para verificar la autorización de un individuo para recibir categorías específicas de información (verificación de emisor).
          .row.align-items-center(titulo="Integridad")
            .col-12
              p La calidad de un sistema de información refleja el correcto funcionamiento y confiabilidad del sistema operativo, la coherencia del #[em hardware] y el #[em software] que implementan los sistemas de protección y la consistencia de las estructuras de datos de la información almacenada.
          .row.align-items-center(titulo="Disponibilidad")
            .col-12
              p Acceso oportuno y confiable a datos y servicios de información para usuarios autorizados.
          .row.align-items-center(titulo="No repudiación (rendición de cuentas)")
            .col-12
              p Hay que asegurar que el remitente de información está provisto de una prueba de envío y que el receptor es provisto de una prueba de la identidad del remitente, de manera que ninguna de las partes pueda negar el proceso de dicha información.

      .col-xl-4.d-none.d-xl-block
        figure
          img(src='@/assets/curso/tema1/img8.png', style="max-width: 450px" ,alt='').m-auto
    .row.bg-c5.mb-5(data-aos='fade-right')
      .col-12
        .p-5
          .h3.text-white.mb-5 #[span.txt-c3 Confidencialidad en WLAN]
          p.mb-0 La confidencialidad en las LAN inalámbricas hace referencia a la integridad de la información que se transmite por ella. Es decir, que ningún ente sin autorización pueda acceder a dicha información. Esta confidencialidad, en otras palabras, debe garantizar que la conexión entre uno o varios puntos de la red no sea susceptible a interceptaciones.
    .h3.text-white.mb-5 #[span.txt-c3 Protocolos de seguridad (WEP, WPA, WPA2)]
    p.mb-5 Dado el auge de las conexiones inalámbricas, se hizo necesario desarrollar una serie de protocolos que garanticen la integridad de la información en dicha tecnología. Algunos de ellos se detallan a continuación:
    .row.mb-5
      .col-lg-10.mb-4.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="WEP")
            .row
              .col-12
                p El cifrado WEP o #[em Wired Equivalent Privacy] (desde 1999) tenía como finalidad proteger la privacidad de la información enviada a través de la conexión wifi. Sin embargo, se demostró que este estándar tenía muchas debilidades y permitía a los atacantes leer la información cifrada que se transportaba en la red. Tuvo algunas mejoras, llegando a la versión WEP2, pero no fueron suficientes para tratar todas las debilidades que se presentaban.
          .tarjeta.color-acento-botones.p-4(titulo="WPA")
            .row
              .col-12
                p La poca seguridad ofrecida por el estándar WEP dio origen, en 2003, a la incorporación del WPA (#[em Wifi Protected Access]). Este estándar se caracterizó por incorporar algoritmos de cifrado más robustos para el intercambio de información, que, junto al uso de claves de mayor tamaño, permitió reforzar en gran medida la seguridad de las comunicaciones wifi.
          .tarjeta.color-acento-botones.p-4(titulo="WPA2")
            .row
              .col-12
                p Se crea como una actualización de los protocolos WEP y WPA. Incluía todos los requisitos del estándar IEEE 802.11i, ofreciendo un control de acceso más seguro y mayor protección de los datos. En julio de 2004, se publicó el WPA2, basado en el mecanismo #[em Robust Security Network] (RSN), soportando mecanismos disponibles en su predecesor y las siguientes mejoras:
                ol.lista-ol
                  li.d-flex
                    span.text-bold a.
                    span Prestación de un mayor apoyo tanto a la infraestructura como a las redes #[em ad-hoc], en términos de cifrado y autenticación. El WPA se limitaba únicamente a las redes de infraestructura.
                  li.d-flex
                    span.text-bold b.
                    span Provisión de caché de claves oportunista, reduciendo costes de itinerancia entre los puntos de acceso.
      .col-lg-2
        figure
          img(src='@/assets/curso/tema1/img10.svg', style="max-width: 250px" ,alt='').m-auto
    .row.bg-c6.mb-5(data-aos='fade-right')
      .col-12
        .p-5
          .h3.text-white.mb-5 #[span.txt-c3 Autenticación en redes inalámbricas]
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0
              p Por tratarse de una tecnología que transmite información, es de suma importancia establecer políticas de autenticación para el ingreso a una WLAN. Es decir, se deben instaurar o determinar una serie de requisitos que deben cumplir los interesados en unirse a una red inalámbrica y así adquirir el derecho a transmitir por dicha red.
              .row.align-items-center.mb-3
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img11.svg', style="max-width: 70px" ,alt='').m-auto
                .col
                  p.mb-0 Tal como sucede con un celular a la hora de conectarse a una red inalámbrica, el proceso de autenticación inicia con una sesión de comunicación entre un nodo (celular) y un punto de acceso. A este proceso se le conoce como “asociación”.
              p Cuando el estándar IEEE 802.11b fue diseñado, se introdujeron dos mecanismos de “asociación”:
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img9.png', style="max-width: 450px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-5.bg-c3
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img12.svg', style="max-width: 80px" ,alt='')
                p.text-white Autenticación abierta
                p.text-white Implica que no hay seguridad y cualquiera puede hablarle al punto de acceso.
            .col-lg-5.bg-c4
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img13.svg', style="max-width: 80px" ,alt='')
                p.text-white Autenticación con llave compartida
                p.text-white Se comparte una contraseña entre el punto de acceso y la estación cliente. Un mecanismo de reto/respuesta le permite al punto de acceso verificar que el cliente conoce la llave compartida y, entonces, concede el acceso.
    .h3.text-white.mb-5 #[span.txt-c3 Evitar difundir la SSID]
    .row.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-8.mb-4.mb-lg-0
        p De acuerdo con Salvetti (2011), el término SSID (#[em Service Set Identifier]) se refiere al nombre asignado a la red inalámbrica y sirve para diferenciarla de otras, pues hoy en día son demasiadas las que se encuentran en una rango determinado. El objetivo principal de este identificador es informar a los potenciales nodos que pueden unirse a una red específica con el objetivo de adquirir los derechos de transmisión de dicha red.
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img14.svg', style="max-width: 80px" ,alt='')
          .col
            p.mb-0 Evitar difundir la SSID puede verse como una medida de seguridad, pero no necesariamente evitará que alguna aplicación maliciosa detecte la conexión o petición de conexión por parte de otro potencial nodo.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img10.png', style="max-width: 450px" ,alt='').m-auto
    .row.bg-c7.mb-5(data-aos='fade-right')
      .col-12
        .p-5
          .h3.text-white.mb-5 #[span.txt-c3 Filtrar direcciones MAC]
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p Es una opción en el esfuerzo de mejorar la seguridad en las redes inalámbricas. Díaz (2012) plantea que cada tarjeta de red tiene una dirección única de 6 #[em bytes], denominada MAC.
              p Sobre las direcciones MAC, se destacan aspectos como:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check(style="color: #8054F8")
                  span En el filtrado MAC, se autentican las estaciones clientes en el AP, el cual tiene una tabla de direcciones aprobadas.
                li.d-flex
                  i.fas.fa-check(style="color: #8054F8")
                  span Este planteamiento tiene una ventaja y es que los usuarios involuntarios no pueden conectarse a la red.
                li.d-flex
                  i.fas.fa-check(style="color: #8054F8")
                  span Mientras que una debilidad es que un usuario malintencionado corre una aplicación, lee los paquetes y detecta una o más MAC validadas en la tabla y, mediante #[em software], cambia la MAC de su tarjeta, pudiendo acceder al AP.
                li.d-flex
                  i.fas.fa-check(style="color: #8054F8")
                  span Claramente, el filtrado de las direcciones MAC no es una solución definitiva a los problemas referentes a la seguridad en las redes tipo #[em wireless].
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img11.png', style="max-width: 450px" ,alt='').m-auto
    .h3.text-white.mb-5 #[span.txt-c3 Integridad de datos en WLAN]
    p De acuerdo con Baño y Bosques (2015), la integridad de datos es la capacidad de un protocolo inalámbrico para determinar si la información transmitida ha sido alterada por personas no autorizadas.
    .row.bg-c8
      .col-12
        .p-5
          p.mb-5(data-aos='fade-right') Estos son algunos datos que usted debe conocer sobre la integridad de datos en WLAN:
          .row.align-items-center
            .col-xl-4.d-none.d-xl-block
              figure
                img(src='@/assets/curso/tema1/img16.svg', style="max-width: 350px" ,alt='').m-auto
            .col-xl-8
              SlyderF(columnas="col-md-6")
                .tarjeta.color-primario.p-4
                  .row.justify-content-center.mb-3
                    .col-auto.bg-white.rounded
                      .p-3
                        p.fs-3.mb-0 #[b.txt-c4 1]
                  p.text-center.text-white En 1999, el protocolo WEP también buscó proveer integridad de tráfico de datos, pero desafortunadamente el mecanismo de integridad, o CRC (código de redundancia cíclica), resultó inseguro.
                .tarjeta.color-primario.p-4
                  .row.justify-content-center.mb-3
                    .col-auto.bg-white.rounded
                      .p-3
                        p.fs-3.mb-0 #[b.txt-c4 2]
                  p.text-center.text-white El diseño fallido de WEP permite la alteración del código CRC del tráfico, sin la necesidad de saber la llave WEP, es decir que el tráfico puede alterarse sin que se note.
                .tarjeta.color-primario.p-4
                  .row.justify-content-center.mb-3
                    .col-auto.bg-white.rounded
                      .p-3
                        p.fs-3.mb-0 #[b.txt-c4 3]
                  p.text-center.text-white Los protocolos WPA y WPA2 resolvieron el problema de la integridad de datos en WEP, mediante la inclusión de un mensaje de código de autenticación más seguro y la inclusión de un contador de segmentos (#[em frames]), que previene los “ataques por repetición” (#[em replay attack]).
                .tarjeta.color-primario.p-4
                  .row.justify-content-center.mb-3
                    .col-auto.bg-white.rounded
                      .p-3
                        p.fs-3.mb-0 #[b.txt-c4 4]
                  p.text-center.text-white En un ataque de repetición, el atacante registra la conversación entre un cliente y un punto de acceso, para obtener un acceso no autorizado.
                .tarjeta.color-primario.p-4
                  .row.justify-content-center.mb-3
                    .col-auto.bg-white.rounded
                      .p-3
                        p.fs-3.mb-0 #[b.txt-c4 5]
                  p.text-center.text-white Al responder una conversación “antigua”, el atacante no necesita saber la llave secreta WEP.

</template>

<script>
export default {
  name: 'Tema1',
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
