import React from 'react';
import { graphql } from 'gatsby'
import H2 from '../../elements/typography/H2';
import PortableText from '../../utilities/portableText';

const Post = ({ data }) => {
  return (
    <>
      <H2>{data.title}</H2>
      <PortableText blocks={data._rawBody} />
    </>
  )
};

export default Post;

export const query = graphql`
  fragment ComponentPostsFragment on SanityPost {
    id
    _rawBody
    _rawImage
    title
  }
`;