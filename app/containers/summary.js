import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import SummaryComponent from 'components/summary';
import { selectTransactionsFromState } from 'selectors/firebase';
import { firebaseActions } from 'actions';

const Summary = (props) => {
  return (<SummaryComponent { ...props } />);
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

const mapDispatchToProps = dispatch => ({
  pushTransaction: value => dispatch(firebaseActions.addTransaction(value)),
});

const mergeProps = ({ transactions }, { pushTransaction }) => {
  const isDataLoaded = isLoaded(transactions);
  const isDataEmpty = isDataLoaded && isEmpty(transactions);
  return {
    transactions,
    isDataLoaded,
    isDataEmpty,
    pushTransaction,
  };
};

export default compose(
  firebaseConnect([
    'transactions', // { path: '/transactions' } // object notation
  ]),
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
)(Summary);
