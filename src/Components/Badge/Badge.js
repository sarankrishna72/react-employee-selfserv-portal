import React from 'react'
import './Badge.scss'
import { PropTypes } from 'prop-types';
const Badge = ({classes, children, badgeType}) => {
  return (
    <span className={`badge badge-pill badge-${badgeType} ${classes} user-status`}>
        {children}
    </span>
  )
}


Badge.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.string,
    badgeType: PropTypes.string
};
  
Badge.defaultProps = {
    classes: '',
    children: null,
    badgeType: 'success'
};

export default Badge