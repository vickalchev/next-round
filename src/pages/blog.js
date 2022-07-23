import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle='Blog Posts'>
            {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>Updated: {node.parent.modifiedTime}</p>
                            <MDXRenderer>
                                {node.body}
                            </MDXRenderer>
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
            body
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