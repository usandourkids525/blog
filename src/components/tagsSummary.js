import React from 'react'
import PropTypes from 'prop-types'

import { map } from 'lodash'

import Tag from './tag'

import classes from '../styles/tagsSummary.module.css'

const TagsSummary = ({ tags }) => {
  if (!tags || tags.length <= 0) return null

  return (
    <div className={classes.container}>
      <header className={classes.header}>Tagged with</header>
      {map(tags, (tag, id) => (
        <Tag key={`tag-${id}`} url={`/tags/${tag}`}>
          {tag}
        </Tag>
      ))}
    </div>
  )
}

TagsSummary.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default TagsSummary