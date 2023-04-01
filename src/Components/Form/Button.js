import React from 'react'
import PropTypes from 'prop-types';
import './Form.scss'

const buttonType = (btnType) => {
    switch (btnType) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'primary-outline':
        return 'btn-primary-outline';
      case 'secondary-outline':
        return 'btn-secondary-outline';
      case 'tertiary':
        return 'btn-tertiary';
      case 'tertiary-outline':
        return 'btn-tertiary-outline';  
      case 'success':
        return 'btn-success';
      case 'success-outline':
        return 'btn-success-outline';    
      case 'info':
        return 'btn-info';
      case 'info-outline':
        return 'btn-info-outline';  
      default:
        return '';
    }
};

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

const buttonDimentions = (buttonSize) => {
  switch (buttonSize) {
    case 'small':
      return 'px-3 py-2';
    case 'medium':
      return 'px-6 py-3';
    case 'large':
      return 'px-8 py-4';
    default:
      return '';
  }
};

const fullWidthButton = (isFullWidth) => (isFullWidth ? 'block w-full' : '');

const Button = (
    {
        btnType,
        rounded,
        size,
        fullWidth,
        onClick,
        classes,
        children,
        ...props
      }
) => {
  return (
    <button {...props} className={`${buttonType(btnType)} ${buttonRadius(rounded)}
    ${buttonDimentions(size)} ${fullWidthButton(fullWidth)} ${classes} ripple inline-flex items-center justify-center`} > 
        {children}
    </button>
  )
}

Button.propTypes = {
    btnType: PropTypes.oneOf([
      'primary',
      'secondary',
      'primary-outline',
      'secondary-outline',
      'tertiary',
      'tertiary-outline',
      "success",
      "success-outline",
      "info",
      "info-outline"
    ]),
    rounded: PropTypes.oneOf(['small', 'medium', 'large', 'full-round']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    fullWidth: PropTypes.bool,
    onClick: PropTypes.func,
    classes: PropTypes.string,
    children: PropTypes.node,
  };
  
  Button.defaultProps = {
    btnType: 'primary',
    rounded: 'small',
    size: 'small',
    fullWidth: false,
    onClick: () => {},
    classes: '',
    children: null,
  };

export default Button