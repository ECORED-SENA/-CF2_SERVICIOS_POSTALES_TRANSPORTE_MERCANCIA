export default {
  global: {
    componenteFormativo: 'Recibo de mercancías',
    descripcionCurso:
      'Mediante este componente el aprendiz se afianzará en la aplicación de acciones del recibo de mercancías, como parte de la admisión técnica de objetos postales: filtro de características (físicas, lógicas, documentales) y revisiones de seguridad. Potenciará su capacidad para determinar la aceptación, que dará continuidad o no al proceso, para entonces, solicitar ajustes previos a la siguiente etapa del servicio postal.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    fondoBannerInterno: require('@/assets/curso/interno.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normativa asociada',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Servicio postal: definición y clasificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Servicio postal universal y sistema tarifario',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Objetos postales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Mercancías',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métodos de codificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Métodos de divulgación documental',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Fichas técnicas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Manejo de documentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Elaboración de informes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Documentos aplicados',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Comisión de Regulación de Comunicaciones. (2021). Tarifas minoristas de los servicios pertenecientes al Sistema Postal Universal. Postdata.',
      link:
        'https://www.postdata.gov.co/dataset/valores-regulados-de-los-servicios-postales/resource/4d2eb5fb-7fae-4d33-965e-d58add167366#{view-grid:{columnsWidth:[{column:!servicio,width:424}]}}',
    },
    {
      referencia:
        '<em>Fedex Express</em> (2020). Códigos postales de Colombia. Fedex.',
      link: 'https://www.fedex.com/lacpdf/CO_CodigosPostales_02014.pdf',
    },
    {
      referencia:
        'Ley 1369 de 2009. Por medio de la cual se establece el régimen de los servicios postales y se dictan otras disposiciones. Diciembre 30 de 2009. DO. N° 47.578',
      link: 'https://colombiatic.mintic.gov.co/679/articles-621_doc_norma.pdf',
    },
    {
      referencia:
        'Ministerio de las Tecnologías de la Información y Comunicaciones de Colombia. (2020). Plan de modernización del sector postal 2020 – 2024. MinTIC.',
      link: 'https://mintic.gov.co/portal/715/articles-150820_recurso_1.pdf',
    },
    {
      referencia:
        'Resolución 6128 de 2020. [Comisión de Regulación de Comunicaciones]. Por la cual se fijan los aspectos técnicos, los indicadores y las metas de los criterios de calidad y las tarifas para la prestación de los servicios pertenecientes al servicio postal. Diciembre 29 de 2020. ',
      link:
        'https://www.crcom.gov.co/sites/default/files/normatividad/00006128.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Admisión',
      significado:
        'cuando el envío está dispuesto para ser enviado al destino y cambia al estado en trámite.',
    },
    {
      termino: 'Calidad',
      significado:
        'resultado de la evaluación realizada por un cliente, en la que valora las expectativas frente al servicio recibido.',
    },
    {
      termino: 'Cecograma',
      significado:
        'producto postal que permite hacer envíos de elementos cacográficos con signos escritos en el sistema braille, sistema para no videntes.',
    },
    {
      termino: 'Codificación',
      significado:
        'conversión a símbolos de una información, con el objeto de ser transmitida y que sea entendida aplicando reglas predeterminadas.',
    },
    {
      termino: 'Correos',
      significado:
        'servicio de carácter público que tiene por esencia el transporte de correspondencia tanto privada como oficial.',
    },
    {
      termino: 'Empaques',
      significado:
        'elementos que permiten de forma más eficiente la distribución, almacenamiento y presentación de productos.',
    },
    {
      termino: 'Era digital',
      significado:
        'época de la humanidad que está ligada a la creación y desarrollo de las tecnologías de la información. Tiene como característica la velocidad del cambio en las comunicaciones y la transformación del entorno social.',
    },
    {
      termino: 'Mensajería',
      significado:
        'servicio de reparto de paquetes, cartas u otros objetos postales dentro de un espacio geográfico, usando un medio de transporte.',
    },
    {
      termino: 'Normativa',
      significado:
        'son las normas por las que se rige o se regula una actividad definida.',
    },
    {
      termino: 'OPO',
      significado: 'operadores postales oficiales.',
    },
    {
      termino: 'Postales',
      significado:
        'es una tarjeta postal, la cual contiene una ilustración generalmente que hace referencia a lugares importantes del mundo, se envía por los servicios de correo tradicional.',
    },
    {
      termino: 'Promedio',
      significado:
        'es un resultado obtenido de aplicar una operación matemática (división).',
    },
    {
      termino: 'Recepción de mercancías',
      significado:
        'operación con la cual los productos adquiridos arriban al almacén o centro de acopio, allí son seleccionados para proceder con su distribución.',
    },
    {
      termino: 'Servicios',
      significado: 'actividades que buscan la satisfacción de un cliente.',
    },
    {
      termino: 'SPU',
      significado: 'servicios postales universales.',
    },
    {
      termino: 'Tonelada',
      significado: 'unidad de medida que es equivalente a 1000 kilos.',
    },
    {
      termino: 'Transporte',
      significado:
        'medio que se usa para trasladar o movilizar objetos o personas de un lugar de origen a otro denominado destino.',
    },
  ],
  complementario: [
    {
      texto: 'Fedex Express. (2020). Códigos postales de Colombia. Fedex.',
      tipo: 'Documento',
      descarga: '/downloads/cod_post_fedex.pdf',
    },
    {
      texto:
        'Ministerio de las Tecnologías de la Información y Comunicaciones de Colombia. (2020). Plan de modernización del sector postal 2020 – 2024. MinTIC.',
      tipo: 'Documento',
      descarga: '/downloads/modernizacion_sector_postal_2020_2024.pdf',
    },
    {
      texto:
        'Ley 9 de 1991. Por la cual se dictan normas generales a las que deberá sujetarse el Gobierno Nacional para regular los cambios internacionales y se adoptan medidas complementarias. Enero 17 de 1991. ',
      tipo: 'Documento',
      descarga: '/downloads/ley_9_1991.pdf',
    },
    {
      texto:
        'Comisión de Regulación de Comunicaciones (2021). Tarifas minoristas de los Servicios Pertenecientes al Sistema Postal Universal. Postdata. ',
      tipo: 'Página web',
      link:
        'https://www.postdata.gov.co/dataset/valores-regulados-de-los-servicios-postales/resource/4d2eb5fb-7fae-4d33-965e-d58add167366#{view-grid:{columnsWidth:[{column:!servicio,width:424}]}}]',
    },
    {
      texto:
        'Ley 1369 de 2009. Por medio de la cual se establece el régimen de los servicios postales y se dictan otras disposiciones. Diciembre 30 de 2009. DO. N° 47.578. ',
      tipo: 'Documento',
      descarga: '/downloads/ley_1369_2009.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Cesar Augusto Cano Echeverri',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Risaralda',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario la Granja - Regional Tolima',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
