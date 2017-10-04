var Company = React.createClass({

  getInitialState() {
    return {
      name:     this.props.name,
      url:      this.props.url,
      image:    this.props.image,
      id:       this.props.id,
      editable: false,
    };
  },

  makeEditable() {
    this.setState({editable: true})
  },

  unMakeEditable() {
    this.setState({editable: false})
  },

  handleCompanyEdit(e) {

    e.preventDefault();
    var name = this.state.name.trim();
    var url = this.state.url.trim();
    var image = this.state.image.trim();
    var editable = this.state.editable;
    var id = this.state.id;
    if (!name) {
      return;
    }

    this.props.onCompanyEdit({
      name: name,
      url: url,
      image: image,
      editable: editable,
      id: id
    });

    this.unMakeEditable();

  },

  handleCompanyDelete(e) {

    e.preventDefault();
    var name = this.state.name.trim();
    var url = this.state.url.trim();
    var image = this.state.image.trim();
    var editable = this.state.editable;
    var id = this.state.id;

    this.props.onCompanyDelete({
      name: name,
      url: url,
      image: image,
      editable: editable,
      id: id
    });

  },

  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  },

  render() {

    if (this.state.editable === false) {
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
            <button id='edit' onClick={this.makeEditable}>Edit</button>
            <button id='delete' onClick={this.handleCompanyDelete}>Delete</button>
          </div>
        </div>
      );

    } else {
      return (
        <div>
          <form id='edit-company-form' onSubmit={this.handleCompanyEdit}>
            <h3>Edit Company</h3>
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

            <p>Link to company image. File must be at least 75px x 75px.</p>
            <FormInput
              value={this.state.image}
              text={this.state.image}
              onChange={this.setValue.bind(this, 'image')}
            />
            <br />

            <button type='submit' value='Submit'>Save Changes</button>
          </form>

        </div>
      );

    }

  }
});
