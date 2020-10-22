import React from 'react';
import urlFor from './urlFor';

export default ({ node }) => {
  return (
    <figure>
        <img src={urlFor(node.image.asset._ref)} alt={node.alt} />
    </figure>
  )
}
