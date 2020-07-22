import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import { getImageUrl } from 'takeshape-routing';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Heading } from '@chakra-ui/core';

import MentionsSummary from './mentionsSummary';
import TagsSummary from './tagsSummary';
import Navigation from './navigation';
import style from '../styles/post.module.css';

const Post = ({ summary, mentions, post, previous, next }) => {
  const {
    author,
    excerpt,
    featureImage,
    bodyHtml: html,
    bodyMdx,
    path,
    tags,
    title,
  } = post;

  const date = post._enabledAt || post.date;

  const previousPath = previous && previous.path;
  const previousLabel = previous && previous.title;
  const nextPath = next && next.path;
  const nextLabel = next && next.title;

  const postPath = `/posts/${path}`;

  const coverImageUrl =
    featureImage &&
    getImageUrl(featureImage.path, {
      auto: 'format',
      fit: 'max',
      w: 760,
      h: 535,
      q: 80,
    });
  const coverImageAlt = featureImage && featureImage.description;

  let coverImageContainer;
  if (featureImage && featureImage.childImageSharp) {
    coverImageContainer = (
      <Img
        loading="lazy"
        fluid={featureImage.childImageSharp.fluid}
        className={style.coverImage}
      />
    );
  } else if (coverImageUrl) {
    coverImageContainer = (
      <img
        loading="lazy"
        src={coverImageUrl}
        className={style.coverImage}
        alt={coverImageAlt}
      />
    );
  }

  const formattedDate = moment(new Date(date)).format('DD MMMM YYYY');

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <Heading as="h1" className={style.title}>
          {summary ? <Link to={postPath}>{title}</Link> : title}
        </Heading>
        <div className={style.meta}>
          {formattedDate} {author && <>— Written by {author}</>}
        </div>
        <TagsSummary tags={tags} />
        {coverImageContainer}

        {summary ? (
          <>
            <p>{excerpt}</p>
            <Link to={postPath} className={style.readMore}>
              Read more →
            </Link>
          </>
        ) : (
          <>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: html }} />

            {bodyMdx && <MDXRenderer>{bodyMdx}</MDXRenderer>}

            <MentionsSummary mentions={mentions} />

            <Navigation
              previousPath={previousPath}
              previousLabel={previousLabel}
              nextPath={nextPath}
              nextLabel={nextLabel}
            />
          </>
        )}
      </div>
    </div>
  );
};

Post.propTypes = {
  mentions: PropTypes.arrayOf(PropTypes.shape({})),
  post: PropTypes.shape({
    bodyHtml: PropTypes.string,
    bodyMdx: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string])
    ),
    title: PropTypes.string,
    date: PropTypes.string,
    _enabledAt: PropTypes.string,
    featureImage: PropTypes.shape({
      childImageSharp: PropTypes.object,
      description: PropTypes.string,
      path: PropTypes.string,
    }),
    path: PropTypes.string,
    coverImage: PropTypes.object,
    coverImageAlt: PropTypes.string,
    coverImageUrl: PropTypes.string,
    author: PropTypes.string,
    excerpt: PropTypes.string,
    html: PropTypes.string,
    id: PropTypes.string,
  }),
  summary: PropTypes.bool,
  previous: PropTypes.object,
  next: PropTypes.object,
};

export default Post;
