import React from 'react';
import Helmet from 'react-helmet';

const Layout = ({
    title,
    metaDescription
}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={metaDescription} />
                <html lang='en-AU' />
            </Helmet>
        </>
    )
};

export default Layout;