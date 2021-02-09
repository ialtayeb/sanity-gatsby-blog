export default {
  widgets: [
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
                  buildHookId: '60223702b6b8c578466cf9a3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8z1jbrac',
                  apiId: '4bce2613-cf36-415d-b170-f397f247d20c'
                },
                {
                  buildHookId: '602237029034199157b96bc6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ve53r9yh',
                  apiId: 'd27a4de5-25ac-4f94-a4da-b07688fb1ee2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ialtayeb/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ve53r9yh.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
