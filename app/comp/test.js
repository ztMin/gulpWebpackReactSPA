import React from 'react';

module.exports = React.createClass({
  getInitialState: function() {
    return {test: '大撒旦机卡是打开手机号'};
  },
  render: function () {
    return (
      <div>
        <p>突然诶太热{this.props.test || this.state.test}</p>
      </div>
    );
  }
});