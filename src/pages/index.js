import React from 'react';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Next Round'>
    
      <p>I'm making this by following a Gatsby tutorial</p>
      <StaticImage
        src='https://global-uploads.webflow.com/5d2dd7e1b4a76d8b803ac1aa/5d8b254f3cb747f878270bd7_image-asset.png'
        alt='Gatsby Graph'
        />

        
        <StaticImage 
          src='../images/icon.png'
          alt='Gatsby Logo'
        />
      </Layout>
  )
}

export default IndexPage