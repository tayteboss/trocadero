import React from 'react';
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components';
import Theme from '../shared/theme';
import GlobalStyle from '../shared/baseCSS';
import H1 from '../elements/typography/H1';
import Button from '../elements/buttons/Button';
import PortableText from '../utilities/portableText';

export default function Home({ data }) {
  console.log('data', data)
  data = data.allSanityPost.edges[0].node
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <H1>{data.title}</H1>
      <PortableText blocks={data._rawBody} />
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