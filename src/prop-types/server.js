import PropTypes from 'prop-types';


export const ServerResponse = PropTypes.shape({
  Errors: PropTypes.string,
  Events: PropTypes.string,
  IsTest: PropTypes.bool,
});

export const ServerResponseDefault = {
  Errors: '',
  Events: '',
  IsTest: false
};
