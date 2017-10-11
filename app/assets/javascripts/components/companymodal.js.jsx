var Modal = React.createClass({

  getInitialState() {
    return {
      name:     this.props.name,
      image:    this.props.image,
      url:      this.props.url,
      editable: this.props.editable,
      archived: this.props.archived,
      show:     this.props.show,
    };
  },

  onClose(e) {
    this.setState({
      show:     false,
      editable: false
    })
    console.log(this.state.show);
    console.log(this.state.editable);
  },


  render() {

    if (!this.state.show) {
      return null;
    }

    return (
      <div id='company-modal'>
        <div id='company-image'>
          <img src={this.state.image} alt={this.state.name} />
        </div>
        <br />
        <h1>{this.state.name}</h1>
        <a href={this.state.url} target='_blank'>{this.state.url}</a>
        <br />
        <button id='close-modal' onClick={this.onClose}>Close</button>
      </div>
    );
  }

});
