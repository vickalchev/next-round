import React from 'react';
import Layout from '../../components/layout';
import { Link,graphql } from 'gatsby';


const BlogPage = ({data}) => {
    return (
        <Layout pageTitle='Blog Posts'>
            {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>Updated: {node.modifiedTime}</p>
                        </article>
                    ))
            }
            
        </Layout>
    )
}

export const query = graphql `
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            }
            id
            slug
            parent {
            ... on File {
                id
                name
                modifiedTime(formatString: "MMMM D, YYYY")
            }
            }
        }
        }
    }`

export default BlogPage;