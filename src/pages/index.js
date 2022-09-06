import React from 'react';
import PropTypes from 'prop-types';

import { Box, Link, Text, useTheme } from '@chakra-ui/react';

import { DefaultLayout } from '../components/Layouts';
import { Image, PostFeed, SEO, WebmentionMetadata } from '../components';

import { getAllPosts } from '../lib/blog';
import { generateRSSFeed } from '../utils/rss';
import { getCloudinaryImageUrl } from '../utils/images';
import config from '../config';
import { getAllNewsletters } from '../lib/newsletters';

export async function getStaticProps() {
  const posts = await getAllPosts();
  const newsletters = await getAllNewsletters();

  generateRSSFeed(posts, newsletters);

  return {
    props: {
      posts,
    },
  };
}

const headshotPublicId = 'mike-headshot-square';
const headshotPublicUrl = getCloudinaryImageUrl(headshotPublicId);

const HomePage = ({ posts }) => {
  const theme = useTheme();
  const pink = theme.colors.pink[400];
  return (
    <DefaultLayout>
      <SEO
        title="Latest articles on design, development, and the world around me"
        image={headshotPublicUrl}
      />
      <Box
        display={{ md: 'flex' }}
        margin="1rem 0 2rem 0"
        spacing={4}
        alignItems="flex-start"
      >
        <Box marginRight={[0, 0, '1rem']}>
          <Image
            alt="My headshot"
            publicId={headshotPublicId}
            objectFit="contain"
            objectPosition="bottom"
            height="250"
            width="250"
          />
        </Box>
        <Box maxWidth="50ch">
          <Text
            as="h2"
            fontSize="4xl"
            margin="0"
            lineHeight="1"
            marginBottom="0.5rem"
            fontWeight={'bold'}
          >
            Oh, hello
          </Text>
          <Text fontSize="xl" fontWeight="normal" margin="0">
            {"I'm"} a technologist, a designer, and a creator of things. I
            started this as a place to put together my thoughts on things that I
            think deserve a bigger stage than my{' '}
            <Link color={pink} href="https://twitter.com/irreverentmike">
              twitter
            </Link>{' '}
            or{' '}
            <Link color={pink} href="https://github.com/mbifulco">
              GitHub
            </Link>
            .
          </Text>
          <Text
            fontSize="xl"
            fontWeight="normal"
            fontStyle="italic"
            margin="0"
            marginTop="1rem"
          >
            I work at {config.employer.name} -- but the things I post here are
            my own, and {"don't "}
            necessarily reflect the views or opinions of {config.employer.name}.
          </Text>
        </Box>
      </Box>

      <Box>
        <Text color={pink} fontWeight={400}>
          LATEST POSTS
        </Text>
        <PostFeed posts={posts} />
      </Box>
      <WebmentionMetadata
        summary="mikebifulco.com - articles on design, development, and making the world a better place."
        title="Home - mikebifulco.com"
      />
    </DefaultLayout>
  );
};

HomePage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default HomePage;
