import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

export default function SEO({ title, description, image, where, isPost = false }) {
    const { site } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    defaultTitle: title
                    defaultDescription: description
                    siteUrl: url
                    twitterUsername
                }
            }
        }
    `);

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
    } = site.siteMetadata

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: isPost ? where : 'https://www.kartavyas.com',
    }

    const socialImage = !isPost
    ? `${siteUrl}/images/logo.png`
    : `https://www.kartavyas.com${image}`;

    return (
        <Helmet 
            htmlAttributes={{
                lang: 'en'
            }}
            title={isPost ? `${seo.title} | Kartavya Sharma` : seo.title}
            defaultTitle={seo.title}
            meta={[
                {
                    name: 'description',
                    content: seo.description,
                },
                {
                    property: `og:title`,
                    content: isPost ? `${seo.title} | Kartavya Sharma` : seo.title,
                },
                {
                    property: 'og:description',
                    content: seo.description,
                },
                {
                    property: 'og:url',
                    content: seo.url,
                },
                {
                    property: 'og:image',
                    content: socialImage,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    property: 'author',
                    content: 'Kartavya Sharma',
                },
            ]}
        /> 
    )
}


SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
}