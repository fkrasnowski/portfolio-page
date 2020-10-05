exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      github {
        user(login: "fkrasnowski") {
          pinnedItems(first: 4, types: REPOSITORY) {
            nodes {
              ... on GitHub_Repository {
                name
              }
            }
          }
        }
      }
      allDevArticles {
        nodes {
          article {
            id
            slug
          }
        }
      }
    }
  `)

  data.github.user.pinnedItems.nodes.forEach(({ name }) => {
    actions.createPage({
      path: `/projects/${name}`,
      component: require.resolve(`./src/templates/github-readme-page.js`),
      context: { name },
    })
  })
  data.allDevArticles.nodes.forEach(({ article: { id, slug } }) => {
    actions.createPage({
      path: `/posts/${slug}`,
      component: require.resolve(`./src/templates/dev-article-page.js`),
      context: { id },
    })
  })
}
