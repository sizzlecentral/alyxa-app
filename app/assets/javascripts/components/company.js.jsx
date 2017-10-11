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
    var archived = this.state.archived;
    var id = this.state.id;

    this.props.onCompanyEdit({
      id: id,
      archived: archived,
    });

  },

  handleCompanyEdit(e) {

    e.preventDefault();
    var name = this.state.name.trim();
    var url = this.state.url.trim();
    var image = this.state.image.trim();
    var editable = this.state.editable;
    var id = this.state.id;
    var archived = this.state.archived;
    if (!name) {
      return;
    }

    this.props.onCompanyEdit({
      name: name,
      url: url,
      image: image,
      editable: editable,
      id: id,
      archived: archived,
    });

    this.unMakeEditable();

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
            <button id='view' onClick={this.showCompany}>View Progress</button>
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
            editable={this.state.editable}
            archived={this.state.archived}
            show={this.state.show}
            closeCompany={this.closeCompany}
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
