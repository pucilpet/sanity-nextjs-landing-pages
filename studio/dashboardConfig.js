export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62abc104033a9c51543a6f35',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tx52hn9z',
                  apiId: '9210fb08-66b2-4d82-9ec4-bb4dacbd1304'
                },
                {
                  buildHookId: '62abc1046a2a7e4f660f94c8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-895np6r8',
                  apiId: 'd5940ae5-9a62-4876-9c0e-fb745cbcf392'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pucilpet/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-895np6r8.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
