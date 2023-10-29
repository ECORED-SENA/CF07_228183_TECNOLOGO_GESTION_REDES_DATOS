export default {
  global: {
    componenteFormativo: 'Verificación / transmisión de datos',
    descripcionCurso:
      'Este componente formativo, aborda generalidades y aspectos clave del proceso de verificación / transmisión de datos, la comprobación del flujo de información sobre la infraestructura inalámbrica y otras acciones conexas. Con su estudio responsable, el aprendiz se afianzará en la gestión de medios inalámbricos, estándares de transmisión, seguridad en la red, medios y métodos de funcionamiento, entre otros. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estándares de transmisión inalámbrica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Seguridad en la red',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Implementación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.3. Seguridad en la red',
      referencia:
        'Castro, R. (2005). Avanzando en la seguridad de las redes WIFI. <em>ENFOQUES</em>, 73, p. 23-33.',
      tipo: 'Artículo',
      link:
        'https://www.rediris.es/difusion/publicaciones/boletin/73/ENFOQUE1.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Ad-hoc</em>',
      significado:
        'configuración del equipo cliente que ofrece conectividad independiente entre dispositivos dentro de una red LAN inalámbrica (Nafria, 2018).',
    },
    {
      termino: 'Confidencialidad en las LAN',
      significado:
        'integridad de la información que se transmite por ella. Es decir, que ningún ente sin autorización pueda acceder a dicha información.',
    },
    {
      termino: 'IEEE',
      significado:
        ' Instituto de Ingenieros Eléctricos y Electrónicos (IEEE, por sus siglas en inglés) es una organización dedicada a la implementación de estándares de comunicación en el área de las tecnologías de la comunicación y la información.',
    },
    {
      termino: 'Integridad de datos',
      significado:
        'es la capacidad de un protocolo inalámbrico para determinar si la información transmitida ha sido alterada por personas no autorizadas.',
    },
    {
      termino: 'Medios inalámbricos',
      significado:
        'espacios libres, por donde se propaga un tipo particular de ondas electromagnéticas: ondas de radiofrecuencia que son portadoras de señales de datos (Durán et al, 2008).',
    },
  ],
  referencias: [
    {
      referencia:
        'Baño, F. y Bosques, V. (2015). <em>Mecanismos de seguridad en redes inalámbricas aplicado a la Universidad Estatal de Bolívar Centro Académico Las Naves</em>. Universidad Regional Autónoma de Los Andes.',
      link: 'https://dspace.uniandes.edu.ec/handle/123456789/413',
    },
    {
      referencia:
        'Díaz, M. (2012). <em>Conexiones inalámbricas ¿Una puerta abierta para los hackers?</em> ITCA Editores. ',
      link: 'http://hdl.handle.net/10972/487',
    },
    {
      referencia:
        'Durán, F., Mondragón, N. y Sánchez, M. (2008). Redes cableadas e inalámbricas para transmisión de datos. <em>Científica</em>, 12(3), p. 113-118.',
      link: 'https://www.redalyc.org/pdf/614/61411377003.pdf',
    },
    {
      referencia:
        'Nafria, F. (2018). <em>Redes wifi,¿realmente se pueden proteger?</em>. UOC.',
      link:
        'http://openaccess.uoc.edu/webapps/o2/bitstream/10609/81269/3/fbnafriaTFM0618memoria.pdf',
    },
    {
      referencia:
        'Prieto, J. (2011). <em>Introducción a los sistemas de comunicación inalámbricos</em>. UOC.',
      link:
        'https://www.exabyteinformatica.com/uoc/Informatica/Tecnologia_y_desarrollo_en_dispositivos_moviles/Tecnologia_y_desarrollo_en_dispositivos_moviles_(Modulo_1).pdf',
    },
    {
      referencia: 'Salvetti, D. (2011). <em>Redes wireless</em>. Fox Andina.',
      link: '',
    },
    {
      referencia:
        'Soriano, M. (2014). <em>Seguridad en redes y seguridad de la información</em>. IMPROVET.',
      link:
        'https://www.academia.edu/40156122/Seguridad_en_redes_y_seguridad_de_la_informaci%C3%B3n',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Instructor',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Instructor',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Luz Mila Pacheco Fuentes',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología  - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
