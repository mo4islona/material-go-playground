import PropTypes from 'prop-types';


export const ServerResponse = PropTypes.shape({
  Errors: PropTypes.string,
  // Errors: PropTypes.oneOf([PropTypes.array, PropTypes.string]),
  Events: PropTypes.string,
  IsTest: PropTypes.bool,
});
