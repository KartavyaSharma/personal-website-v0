import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'

export default function SEO({ title, description, slug, isPost = false }) {
    const { pathname } = useLocation();
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
        url: `${siteUrl}${pathname}`,
    }

    const slugWithoutSlashes = () => isPost ? slug.replace(/\//g, '') : slug;

    const socialImage = !isPost
    ? `${siteUrl}/images/logo.png`
    : `${siteUrl}/${slugWithoutSlashes()}-share.png`;

    return (
        <Helmet 
            htmlAttributes={{
                lang: 'en'
            }}
            title={seo.title}
            titleTemplate={`%s ${title ? '' : '. '+seo.title}`}
            defaultTitle={seo.title}
            meta={[
                {
                    name: 'description',
                    content: seo.description,
                },
                {
                    property: `og:title`,
                    content: seo.title,
                },
                {
                    property: 'og:description',
                    content: seo.description,
                },
                {
                    property: 'og:url',
                    content: slug ? `${siteUrl}/content/posts/${slug}` : `${siteUrl}`,
                },
                {
                    property: 'og:image',
                    content: socialImage,
                },
                {
                    property: 'og:type',
                    content: 'website',
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