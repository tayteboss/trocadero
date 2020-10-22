import React from 'react';
import Post from '../post';

const Components = ({ components }) => (
    <>
        {components.map((data, index) => {
            const {__typename: componentType } = data
            switch (componentType) {
                case 'SanityPost':
                    return (
                        <Post 
                            key={`${componentType}_${index}`}
                            data={data}
                        />
                    )
                default:
                    return null
            }
        })}
    </>
);  

export default Components;