import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTransactionButton from 'components/add-transaction-button';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [ 1, 2 ],
    };
    this.onAddTransactionClick = this.onAddTransactionClick.bind(this);
  }

  onAddTransactionClick() {
    const newValue = Math.floor(Math.random() * 100);
    this.setState({
      list: this.state.list.concat(newValue),
    });
    this.props.pushTransaction({ amount: newValue });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.list.map((entry, index) => <div key={ `${entry}_${index * 2}` }>{entry}</div>)}
        </div>
        <AddTransactionButton onClick={ this.onAddTransactionClick } />
      </div>);
  }
}

Summary.propTypes = {
  pushTransaction: PropTypes.func,
};

export default Summary;
