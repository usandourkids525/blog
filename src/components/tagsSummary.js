import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '@chakra-ui/react';

import Tag from './tag';

const TagsSummary = ({ tags }) => {
  if (!tags || tags.length <= 0) return null;

  return (
    <Flex fontSize="smaller" direction="row" flexWrap="wrap">
      {tags.map((tag, id) => (
        <Tag
          key={`tag-${id || tag.name || tag}`}
          url={`/tags/${tag.name || tag}`}
        >
          {tag.name || tag}
        </Tag>
      ))}
    </Flex>
  );
};

TagsSummary.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string])
  ),
};

export default TagsSummary;
