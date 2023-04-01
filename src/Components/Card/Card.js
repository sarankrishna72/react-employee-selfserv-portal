import React from 'react'
import './Card.scss'
import { PropTypes } from 'prop-types';
import ThreeDotLoader from '../ThreeDotLoader/ThreeDotLoader';

export const CardBody = ({classes = '', children}) => {
  return(
    <>
      <div className={`card-body ${classes}`}>
        {children}
      </div>
    </>
  )
}

export const CardHeader = ({classes = '', children}) => {
  return(
    <>
      <div className={`card-header ${classes}`}>
        {children}
      </div>
    </>
  )
}



const Card = ({classes = '', rounded, children, loading}) => {
  const buttonRadius = (radiusSpec) => {
    switch (radiusSpec) {
        case 'small':
            return 'rounded';
        case 'medium':
            return 'rounded-md'; 
        case 'large':
            return 'rounded-xl'; 
         case 'full-round':
            return 'rounded-full';       
        default:
            return '';
    }
};

  return (
    <div className={`card card-with-shadow relative ${buttonRadius(rounded)} ${classes}`}>
      {
        loading && 
        <ThreeDotLoader/>
      }
      
      
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  rounded: PropTypes.oneOf(['small', 'medium', 'large', 'full-round']),
  loading: PropTypes.bool
};

Card.defaultProps = {
  classes: '',
  children: null,
  rounded: 'small',
  loading: false
};

export default Card