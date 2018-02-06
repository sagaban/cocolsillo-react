import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import SummaryComponent from 'components/summary';

const Summary = ({ firebase, transactions }) => {
  const pushTransaction = transaction => firebase.push('transactions', transaction);
  return (<SummaryComponent pushTransaction={ pushTransaction } transactions={ transactions } />);
};

Summary.propTypes = {
  firebase: PropTypes.object, // eslint-disable-line
  transactions: PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  transactions: state.firebase.data.transactions,
});

export default compose(
  firebaseConnect([
    'transactions', // { path: '/transactions' } // object notation
  ]),
  connect(mapStateToProps),
)(Summary);
