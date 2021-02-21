/* 

exports.createPages = async ({ graphql, actions }) => {
    const {data} = await graphql`
        query{
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    frontmatter {
                      slug
                    }
                    id
                  }
                }
              }
        }
    `


    const postPerPage = 2;
    
    const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);


    // Tüm postların listelenmesi için queryler
    Array.from({ length: numPages }).forEach(( _, index ) => {
        actions.createPages({
            path: index === 0 ? "/" : `/${index + 1}`,
            component: require.resolve("./src/templates/allPosts.js"),
            context: {
                limit: postPerPage,
                skip: index * postPerPage,
                numPages,
                currentPage: index + 1
            }
        })
    })

    // Single post için queryler
    data.allMdx.edges.forEach(edge => {
        const slug = edge.node.frontmatter.slug;
        const id = edge.node.id;

        actions.createPages({
            path: slug,
            component: require.resolve("./src/templates/singlePost.js"),
            context: { id }
        })
    })

}   */