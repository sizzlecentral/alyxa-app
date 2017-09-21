var Company = React.createClass({

  render() {

    return (
      <div>
        <a href={this.props.url} target='_blank'>
          <div id='company-image'>
            <img src={this.props.image} alt={this.props.name} height='75' width='75' />
          </div>
          <div id='company-name'>
            {this.props.name}
          </div>
        </a>
      </div>
    );

  }
});
