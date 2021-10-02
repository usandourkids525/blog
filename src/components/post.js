import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import moment from 'moment';

import { MDXRemote } from 'next-mdx-remote';

import { Heading, Link, Text, useColorMode, useTheme } from '@chakra-ui/react';

import MentionsSummary from './mentionsSummary';
import TagsSummary from './tagsSummary';
import * as style from '../styles/post.module.scss';
import { Image } from '.';
import frontmatterType from '../types/frontmatter';

const Post = ({ summary, mentions, post }) => {
  const { frontmatter } = post;

  const { author, coverImagePublicId, date, excerpt, path, tags, title } =
    frontmatter;

  const theme = useTheme();
  const { colorMode } = useColorMode();

  const headerColors = {
    dark: theme.colors.gray[200],
    light: theme.colors.gray[900],
  };

  const dateColors = {
    dark: theme.colors.gray[400],
    light: '#555555',
  };


  const postPath = `/posts/${path}`;

  // TODO test cover image support

  const coverImageContainer = (
    <Image
      className={style.coverImage}
      marginBottom="2em"
      publicId={coverImagePublicId || `posts/${path}/cover`}
      alt={excerpt}
    />
  );

  const formattedDate = moment(new Date(date)).format('DD MMMM YYYY');

  return (
    <article className={style.post}>
      <div className={style.postContent}>
        <header>
          <Heading
            as="h1"
            color={theme.colors.pink[500]}
            textDecoration="none"
            border={0}
          >
            {summary ? (
              <Link
                as={NextLink}
                href={postPath}
              >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>{title}</a>
              </Link>
            ) : (
              title
            )}
          </Heading>
          <Text fontSize="1rem" color={dateColors[colorMode]}>
            {formattedDate} {author && <>— Written by {author}</>}
          </Text>
          <TagsSummary tags={tags} />
          {coverImageContainer}
        </header>

        {summary ? (
          <>
            <p>{excerpt}</p>
            <Link
              as={NextLink}
              href={postPath}
            >
              Read more →
            </Link>
          </>
        ) : (
          <>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <MDXRemote {...post.source} />

            <MentionsSummary mentions={mentions} />
          </>
        )}
      </div>
    </article>
  );
};

Post.propTypes = {
  mentions: PropTypes.arrayOf(PropTypes.shape({})),
  post: PropTypes.shape({
    frontmatter: frontmatterType,
    source: PropTypes.shape({}),
  }),
  summary: PropTypes.bool,
  previous: PropTypes.object,
  next: PropTypes.object,
};

export default Post;
