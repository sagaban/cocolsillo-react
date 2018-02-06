import React from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from 'react-redux-firebase';
import SummaryComponent from 'components/summary';

const Summary = ({ firebase }) => {
  const pushTransaction = transaction => firebase.push('transactions', transaction);
  return (<SummaryComponent pushTransaction={ pushTransaction } />);
};

Summary.propTypes = {
  firebase: PropTypes.object, // eslint-disable-line
};

export default withFirebase(Summary);
