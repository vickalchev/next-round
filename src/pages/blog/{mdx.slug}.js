import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPost = ({data}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
            <p>My blog post content will go here eventually.</p>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }`
  

export default BlogPost;