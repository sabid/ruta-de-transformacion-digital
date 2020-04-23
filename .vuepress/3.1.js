module.exports = [
    {
        title: 'Ruta de Transformación Dígital',
        collapsable: true,
        children: prefix('ruta-de-transformacion-digital', [
            'comercio-electronico',
            'tienda-en-linea',
            'formas-de-pago',
            'logistica',
            'marketing-digital',
        ]),
    },
    {
        title: 'Tienda en Línea',
        collapsable: true,
        children: prefix('tienda-en-linea', [
            '',
            'plataformas',
            'desarrollo-propio',
        ]),
    },
    {
        title: 'Formas de Pago',
        collapsable: true,
        children: prefix('formas-de-pagos', [
            '',
            'nacionales',
            'internacionales',
        ]),
    },
    {
        title: 'Logística',
        collapsable: true,
        children: prefix('logistica', [
            '',
            'proveedores',
            'tiempos-de-entega',
            'metodo-de-envio'
        ]),
    },
    {
        title: 'Marketing Digital',
        collapsable: true,
        children: prefix('marketing-digital', [
            '',
            'seo',
            'marketing-de-contenidos',
            'email-marketing',
            'redes-sociales',

        ]),
    },
    {
        title: 'Facturación Electrónica',
        collapsable: false,
        children: prefix('facturacion', [
            '',
        ]),
    },
];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
