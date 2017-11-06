var Company = React.createClass({

  getInitialState() {
    return {
      id:       this.props.id,
      archived: this.props.archived,
      name:     this.props.company.name,
      url:      this.props.company.url,
      image:    this.props.company.image,
    };
  },

  sendCompanyId(e){
    this.props.showCompany(e.target.value)
  },

  cardGuts() {
    return (
      <div>
        <a href={this.state.url} target='_blank'>
          <div id='company-image'>
            <img src={this.state.image} alt={this.state.name} />
          </div>
          <div id='company-name'>
            {this.state.name}
          </div>
        </a>
        <div>
          <button id='view' value={this.props.id} onClick={this.sendCompanyId}>View Details</button>
        </div>
      </div>
    )
  },

  render() {

    if (this.props.archived != 'true') {

      return (
        <div id='company-card'>
          {this.cardGuts()}
        </div>
      );

    } else {

      return (
        <div id='company-card-archive'>
          {this.cardGuts()}
        </div>
      );

    }

  }
});
