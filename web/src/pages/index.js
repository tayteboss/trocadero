import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../shared/theme';
import GlobalStyle from '../shared/baseCSS';
import H1 from '../elements/typography/H1';
import Button from '../elements/buttons/Button';
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import myConfiguredSanityClient from '../utilities/sanityClient';

const builder = imageUrlBuilder(myConfiguredSanityClient);

//MOVE TO HELPER
function urlFor(source) {
  return builder.image(source)
}
//MOVE TO HELPER
const serializer = {
  types: {
    figure: props => (
      <figure>
        <img src={urlFor(props.node.image.asset)} alt={props.node.alt} />
      </figure>
    )
  }
}

export default function Home({ data }) {
  console.log('data', data)
  data = data.allSanityPost.edges[0].node
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <H1>{data.title}</H1>
      <BlockContent blocks={data._rawBody} serializers={serializer(props)} />
      <Button styletype='primary'>Button</Button>
    </ThemeProvider>
  )
};

export const query = graphql`
  query allSanityPostQuery {
    allSanityPost {
      edges {
        node {
          title
          _rawBody
        }
      }
    }
  }
`;