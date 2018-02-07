import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import SummaryComponent from 'components/summary';
import { selectTransactionsFromState } from 'selectors/firebase';

const Summary = (props) => {
  const pushTransaction = transaction => props.firebase.push('transactions', transaction);
  return (<SummaryComponent { ...props } pushTransaction={ pushTransaction } />);
};

Summary.propTypes = {
  firebase: PropTypes.object, // eslint-disable-line
  transactions: PropTypes.object, // eslint-disable-line
  isDataLoaded: PropTypes.bool,
  isDataEmpty: PropTypes.bool,
};

const mapStateToProps = state => ({
  transactions: selectTransactionsFromState(state),
});

const mergeProps = ({ transactions }, dispatchProps, { firebase }) => {
  const isDataLoaded = isLoaded(transactions);
  const isDataEmpty = isDataLoaded && isEmpty(transactions);
  return {
    firebase,
    transactions,
    isDataLoaded,
    isDataEmpty,
  };
};

export default compose(
  firebaseConnect([
    'transactions', // { path: '/transactions' } // object notation
  ]),
  connect(mapStateToProps, {}, mergeProps),
)(Summary);
