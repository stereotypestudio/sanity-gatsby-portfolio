export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e4325f5fe4589736c7649a1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dracek2x',
                  apiId: 'a1b2e17d-d549-48a8-826c-af7423a0893d'
                },
                {
                  buildHookId: '5e4325f505b95b46d2988d0b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mj5znrwq',
                  apiId: 'a29cb76b-5607-4c9e-9ab4-0c20009ae230'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stereotypestudio/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mj5znrwq.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
