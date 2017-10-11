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

    if (!this.state.show) {
      return null;
    }

    if (this.state.editable === false) {
      return (
        <div id='company-modal'>
          <div id='company-show-image'>
            <img src={this.state.image} alt={this.state.name} />
          </div>
          <br />
          <h1>{this.state.name}</h1>
          <a href={this.state.url} target='_blank'>{this.state.url}</a>
          <br />
          <button id='close-modal' onClick={this.props.closeCompany}>Close</button>
          <button id='edit' onClick={this.makeEditable}>Edit</button>
          <button id='archive' onClick={this.archive}>Archive</button>
        </div>
      );
    } else {
      return (
        <div>
          <form id='edit-company-form' onSubmit={this.handleCompanyEdit}>
            <h3>Edit Company #{this.state.id}</h3>
            <br />

            <p>Company name.</p>
            <FormInput
              value={this.state.name}
              text={this.state.name}
              onChange={this.setValue.bind(this, 'name')}
            />
            <br />

            <p>Link to company website.</p>
            <FormInput
              value={this.state.url}
              text={this.state.url}
              onChange={this.setValue.bind(this, 'url')}
            />
            <br />

            <p>Link to company image. File must be at least 240px wide by 150px high.</p>
            <FormInput
              value={this.state.image}
              text={this.state.image}
              onChange={this.setValue.bind(this, 'image')}
            />
            <br />

            <button id='submit' type='submit' value='Submit'>Save Changes</button>
            <br />
            <br />
            <center><a onClick={this.unMakeEditable}>Cancel</a></center>
          </form>

        </div>
      );
    }
  }

});
