import React from 'react';
import PropTypes from 'prop-types';
import AddTransactionButton from 'components/add-transaction-button';
import { isLoaded, isEmpty } from 'react-redux-firebase';


const Summary = ({ transactions, pushTransaction }) => {
  const onAddTransactionClick = () => {
    const newValue = Math.floor(Math.random() * 100);
    pushTransaction({ amount: newValue });
  };
  let transactionList;
  if (!isLoaded(transactions)) {
    transactionList = 'Loading...';
  } else {
    transactionList = isEmpty(transactions)
      ? 'There are not transactions'
      : Object.keys(transactions).map((key, id) => (
        <div key={ key } id={ id }>{ transactions[key].amount }</div>
      ));
  }
  return (
    <div>
      <div>
        { transactionList }
      </div>
      <AddTransactionButton onClick={ onAddTransactionClick } />
    </div>);
};

Summary.propTypes = {
  transactions: PropTypes.object, //eslint-disable-line
  pushTransaction: PropTypes.func,
};

export default Summary;
