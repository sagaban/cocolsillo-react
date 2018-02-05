import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

const AddTransactionButton = ({ onClick }) => (
  <FloatingActionButton style={ style } onClick={ onClick }>
    <ContentAdd />
  </FloatingActionButton>);

AddTransactionButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddTransactionButton;
