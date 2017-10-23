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

  makeEditable() {
    this.setState({editable: true})
  },

  unMakeEditable() {
    this.setState({editable: false})
  },

  archive(e) {
    e.persist();
    this.setState({archived: true}, function() {
      this.handleCompanyArchive(e);
    })
  },

  unArchive(e) {
    e.persist();
    this.setState({archived: false}, function() {
      this.handleCompanyArchive(e);
    })
  },

  handleCompanyArchive(e) {

    e.preventDefault();

    this.props.onCompanyArchive({
      id: this.props.id,
      archived: this.state.archived,
    });

    this.closeCompany();

  },

  handleCompanyEdit(e) {

    e.preventDefault();

    this.props.onCompanyEdit({
      name: this.state.name,
      url: this.state.url,
      image: this.state.image,
      id: this.props.id,
      archived: this.state.archived,
    });

    this.unMakeEditable();
    this.closeCompany();

  },

  handleCompanyDelete(e) {

    e.preventDefault();

    this.props.onCompanyDelete();

  },

  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  },

  render() {

    if (this.props.archived != 'true') {

      if (this.state.show != true) {
        return (
          <div id='company-card'>
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

      } else {
        return (
          <div>
            <Modal
              name={this.state.name}
              image={this.state.image}
              url={this.state.url}
              id={this.state.id}
              editable={this.state.editable}
              show={this.state.show}
              archived={this.state.archived}
              closeCompany={this.closeCompany}
              makeEditable={this.makeEditable}
              unMakeEditable={this.unMakeEditable}
              onCompanyEdit={this.handleCompanyEdit}
              onCompanyDelete={this.handleCompanyDelete}
              onCompanyArchive={this.archive}
              setValue={this.setValue}
            />
          </div>
        );
      }

    } else {

      if (this.state.show != true) {
        return (
          <div id='company-card-archive'>
            <a href={this.state.url} target='_blank'>
              <div id='company-image'>
                <img src={this.state.image} alt={this.state.name} />
              </div>
              <div id='company-name'>
                {this.state.name}
              </div>
            </a>
            <div>
              <button id='view-archive' onClick={this.showCompany}>View Details</button>
            </div>
          </div>
        );

      } else {
        return (
          <div>
            <Modal
              name={this.state.name}
              image={this.state.image}
              url={this.state.url}
              id={this.state.id}
              editable={this.state.editable}
              show={this.state.show}
              archived={this.state.archived}
              closeCompany={this.closeCompany}
              makeEditable={this.makeEditable}
              unMakeEditable={this.unMakeEditable}
              onCompanyEdit={this.handleCompanyEdit}
              onCompanyDelete={this.handleCompanyDelete}
              onCompanyArchive={this.unArchive}
              setValue={this.setValue}
            />
          </div>
        );
      }

    }

  }
});
