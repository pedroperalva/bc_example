import React from 'react';

import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function RouteWrapper({
  isPrivate,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (
          <Component {...props} />
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  admin: PropTypes.bool,
  option: PropTypes.string.isRequired,
  changeTo: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  admin: false,
  changeTo: '',
};
