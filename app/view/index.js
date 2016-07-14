import React from 'react';

module.exports =React.createClass({
  getInitialState: function() {
    return {test: 'rest Test'};
  },
  render: function () {
    return (
      <div>
        <p>Index</p>
      </div>
    );
  }
});