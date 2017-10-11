var Modal = React.createClass({

  getInitialState() {
    return {
      show: this.props.show,
    };
  },

  onClose(e) {
    this.setState({show: false})
  },


  render() {

    if (!this.state.show) {
      return null;
    }

    return (
      <div id='company-modal'>
        <button id='close-modal' onClick={this.onClose}>Close</button>
      </div>
    );
  }

});
