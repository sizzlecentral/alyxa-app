var Company = React.createClass({

  getInitialState() {
    return {
      name:   this.props.name,
      url:    this.props.url,
      image:  this.props.image,
    };
  },

  render() {

    return (
      <div>
        <div id='company-image'>
          <img src={this.state.image} alt={this.state.name} height='75' width='75' />
        </div>
        <div id='company-name'>
          {this.state.name}
        </div>
      </div>
    );

  }
});
