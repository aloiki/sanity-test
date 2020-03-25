export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-hnjsvqxn',
                  apiId: '47da5ff1-12b3-4320-9727-ff4303852e30'
                },
                {
                  buildHookId: '5e7b990b2158d00227a491e2',
                  title: 'Events Website',
                  name: 'sanity-test-web-h25nftxb',
                  apiId: 'fd340944-3629-49d6-80c2-9e8a08bb00fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aloiki/sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-web-h25nftxb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
