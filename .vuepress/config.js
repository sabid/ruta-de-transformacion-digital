module.exports = {
    title: 'Transformación Dígital',
    description: 'Comercio Electrónico',

    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/google-analytics', {
            ga: ''
        }],
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>',
        }],
        ['sitemap', {
            hostname: '',
        }],
    ],

    markdown: {
        lineNumbers: true,
    },

    head: [
        [
            'link',
            {
                href: 'https://fonts.googleapis.com/css?family=Nunito:100,300,400,500,600,700',
                rel: 'stylesheet',
                type: 'text/css',
            },
        ],
        [
            "link",
            {
                rel: 'manifest',
                href: '/manifest.json'
            }
        ],
        [
            "link",
            {
                rel: 'icon',
                href: '/icon.png'
            }
        ]
    ],

    themeConfig: {
        logo: '/assets/img/logo-small.png',
        repo: 'maatwebsite/Laravel-Excel',
        docsRepo: 'contacto@negociosonline.net',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Tienes consultas escríbenos contacto@negociosonline.net',
        displayAllHeaders: false,
        sidebarDepth: 0,
        algolia: {
            apiKey: 'aadef574be1f9252bb48d4ea09b5cfe5',
            indexName: 'demo_ecommerce',
            algoliaOptions: {'facetFilters': ["version:3.1"]},
        },

        nav: [
            {
                text: 'Version',
                link: '/',
                items: [
                    {text: '1.0', link: '/3.1/'},
                    // {text: 'LE 3.0', link: '/3.0/'},
                    // {text: 'LE 2.1', link: '/2.1/', divider: true},
                    //{text: 'CSV 1.0', link: '/csv/1.0/', divider: true},
                    // {text: 'Nova 1.1', link: '/nova/1.1/'},
                    // {text: 'Nova 1.0', link: '/nova/1.0/'},
                ]
            },
        ],

        sidebar: {
            '/3.1/': require('./3.1'),
            '/3.0/': require('./3.0'),
            '/2.1/': require('./2.1'),
            '/nova/1.0/': require('./nova/1.0'),
            '/nova/1.1/': require('./nova/1.1'),
            //'/csv/1.0/': require('./csv/1.0'),
        },
    },
};
