var Company = React.createClass({

  getInitialState() {
    return {
      name:     this.props.name,
      url:      this.props.url,
      image:    this.props.image,
      id:       this.props.id,
      archived: this.props.archived,
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

  render() {

    if (this.state.archived != true && this.state.show != true) {
      return (
        <div id='company-row'>
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
      );

    } else if (this.state.show === true) {
      return (
        <div>
          <Modal
            name={this.state.name}
            image={this.state.image}
            url={this.state.url}
            id={this.state.id}
            editable={this.state.editable}
            archived={this.state.archived}
            show={this.state.show}
            closeCompany={this.closeCompany}
            onCompanyEdit={this.props.onCompanyEdit}
            onCompanyDelete={this.props.onCompanyDelete}
          />
        </div>
      );

    } else {
      return (
        <div>
        </div>
      );
    }

  }
});
