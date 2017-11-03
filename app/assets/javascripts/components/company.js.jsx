var Company = React.createClass({

  getInitialState() {
    return {
      id:       this.props.id,
      archived: this.props.archived,
      name:     this.props.company.name,
      url:      this.props.company.url,
      image:    this.props.company.image,
      editable: false,
      show:     false,
    };
  },

  showCompany() {
    this.setState({show: true})
  },

  closeCompany() {
    this.setState({show: false})
  },

  makeEditable() {
    this.setState({editable: true})
  },

  unMakeEditable() {
    this.setState({editable: false})
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
          <button id='view' onClick={this.showCompany}>View Details</button>
        </div>
      </div>
    )
  },

  render() {

    if (this.props.archived != 'true') {

      if (this.state.show != true) {

        return (
          <div id='company-card'>
            {this.cardGuts()}
          </div>
        );

      } else {

        return (
          <div>
            <GlobalModal
              name={this.state.name}
              image={this.state.image}
              url={this.state.url}
              id={this.props.id}
              editable={this.state.editable}
              show={this.state.show}
              archived={this.props.archived}
              closeCompany={this.closeCompany}
              makeEditable={this.makeEditable}
              unMakeEditable={this.unMakeEditable}
            />
          </div>
        );
      }

    } else {

      if (this.state.show != true) {

        return (
          <div id='company-card-archive'>
            {this.cardGuts()}
          </div>
        );

      } else {

        return (
          <div>
            <GlobalModal
              name={this.state.name}
              image={this.state.image}
              url={this.state.url}
              id={this.props.id}
              editable={this.state.editable}
              show={this.state.show}
              archived={this.props.archived}
              closeCompany={this.closeCompany}
              makeEditable={this.makeEditable}
              unMakeEditable={this.unMakeEditable}
            />
          </div>
        );
      }

    }

  }
});
