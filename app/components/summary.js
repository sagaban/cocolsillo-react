import React from 'react';
import PropTypes from 'prop-types';
import AddTransactionButton from 'components/add-transaction-button';
import CircularProgress from 'material-ui/CircularProgress';

const Summary = ({
  isDataLoaded,
  isDataEmpty,
  transactions,
  pushTransaction,
}) => {
  const onAddTransactionClick = () => {
    const newValue = Math.floor(Math.random() * 100);
    pushTransaction({ amount: newValue });
  };
  let transactionList;
  if (!isDataLoaded) {
    transactionList = <CircularProgress />;
  } else {
    transactionList = isDataEmpty
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
  isDataLoaded: PropTypes.bool,
  isDataEmpty: PropTypes.bool,
  pushTransaction: PropTypes.func,
};

export default Summary;
