import React from 'react';
import urlFor from './urlFor';

export default ({ node }) => {
    console.log('node', node);
  return (
    <figure>
        <img src={urlFor(node.image.asset)} alt={node.alt} />
    </figure>
  )
}
