/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const TwitchIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnslink="http://www.w3.org/1999/xlink"
    viewBox="0 0 28 28"
    xmlSpace="preserve"
    fill="currentColor"
    height={size || '1em'}
    width={size || '1em'}
    preserveAspectRatio="xMidYMid meet"
    style={{ verticalAlign: 'middle' }}
  >
    <g>
      <path d="M11.5,11.7c-0.8,0-1.4,0.7-1.4,1.6s0.6,1.6,1.4,1.6c0.8,0,1.4-0.7,1.4-1.6 C12.9,12.4,12.3,11.7,11.5,11.7L11.5,11.7z M16.6,11.7c-0.8,0-1.4,0.7-1.4,1.6s0.6,1.6,1.4,1.6c0.8,0,1.4-0.7,1.4-1.6 S17.4,11.7,16.6,11.7L16.6,11.7z" />
      <path d="M23.4,0H4.6C3,0,1.8,1.3,1.8,2.9v18.9c0,1.6,1.3,2.9,2.9,2.9h15.9l-0.7-2.6l1.8,1.7l1.7,1.6 l3,2.7V2.9C26.2,1.3,25,0,23.4,0L23.4,0z M18,18.3c0,0-0.5-0.6-0.9-1.1c1.8-0.5,2.5-1.7,2.5-1.7c-0.6,0.4-1.1,0.6-1.6,0.8 c-0.7,0.3-1.4,0.5-2,0.6c-1.3,0.3-2.6,0.2-3.6,0c-0.8-0.2-1.5-0.4-2.1-0.6c-0.3-0.1-0.7-0.3-1-0.5c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1,0 c-0.3-0.1-0.4-0.2-0.4-0.2s0.7,1.1,2.4,1.7c-0.4,0.5-0.9,1.2-0.9,1.2c-3.1-0.1-4.3-2.1-4.3-2.1c0-4.5,2-8.2,2-8.2 c2-1.5,3.9-1.5,3.9-1.5L12,6.7C9.5,7.4,8.3,8.5,8.3,8.5s0.3-0.2,0.8-0.4c1.5-0.7,2.7-0.8,3.2-0.9c0.1,0,0.2,0,0.2,0 c0.9-0.1,1.8-0.1,2.8,0c1.3,0.2,2.8,0.5,4.2,1.3c0,0-1.1-1.1-3.5-1.8l0.2-0.2c0,0,1.9,0,3.9,1.5c0,0,2,3.7,2,8.2 C22.3,16.2,21.1,18.2,18,18.3L18,18.3z" />
    </g>
  </svg>
);

TwitchIcon.propTypes = {
  size: PropTypes.string,
}

export default TwitchIcon;
