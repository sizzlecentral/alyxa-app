var GlobalModal = React.createClass({

  getInitialState() {
    return {
      id: this.props.id,
      name: this.props.name,
      url: this.props.url,
      image: this.props.image,
      showModal: this.props.showModal,
      editable: false,
    }
  },

  makeEditable() {
    this.setState({
      editable: true,
    })
  },

  unMakeEditable() {
    this.setState({
      editable: false,
    })
  },

  closeCompany(e){
    this.props.closeCompany(e.target.value)
  },

  handleCompanyArchive(e, archived) {

    console.log(e);

    e.preventDefault();

    this.props.onCompanyEdit({
      id: this.props.id,
      archived: archived,
    });

    this.unMakeEditable();
    this.props.closeCompany(this.props.id);

  },

  handleCompanyEdit(e) {

    e.preventDefault();

    this.props.onCompanyEdit({
      id: this.props.id,
      name: this.state.name,
      url: this.state.url,
      image: this.state.image,
    });

    this.unMakeEditable();
    this.props.closeCompany(this.props.id);

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

  editForm() {
    return (
      <form id='edit-company-form' onSubmit={this.handleCompanyEdit}>
        <h3>Edit Company #{this.props.id}</h3>
        <br />

        <p>Company name.</p>
        <FormInput
          value={this.props.name}
          text={this.props.name}
          onChange={this.setValue.bind(null, 'name')}
        />
        <br />

        <p>Link to company website.</p>
        <FormInput
          value={this.props.url}
          text={this.props.url}
          onChange={this.setValue.bind(null, 'url')}
        />
        <br />

        <p>Link to company image. File must be at least 240px wide by 150px high.</p>
        <FormInput
          value={this.props.image}
          text={this.props.image}
          onChange={this.setValue.bind(null, 'image')}
        />
        <br />

        <button id='submit' type='submit' value='Submit'>Save Changes</button>
        <br />
        <br />
        <center><a value={this.props.id} onClick={this.unMakeEditable}>Cancel</a></center>
      </form>
    )
  },

  modalGuts() {
    return (
      <div>
        <div id='company-show-image'>
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <br />
        <h1>{this.props.name}</h1>
        <a href={this.props.url} target='_blank'>{this.props.url}</a>
        <br />
        <button id='close-modal' value={this.props.id} onClick={this.closeCompany}>Close</button>
      </div>
    )
  },

  render() {

    if (!this.props.showModal) {
      return null;
    }

    if (this.props.archived != 'true') {

      if (this.state.editable === false) {
        return (
          <div id='global-modal-background'>
            <div id='global-modal-box'>
              {this.modalGuts()}
              <button id='edit' onClick={this.makeEditable}>Edit</button>
              <button id='archive'
                onClick={function(e) {
                    this.handleCompanyArchive(e, true)
                  }.bind(this)
                }
                >Archive
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div id='global-modal-background'>
            <div id='global-modal-box'>
              {this.editForm()}
            </div>
          </div>
        );
      }

    } else {

      if (this.state.editable === false) {
        return (
          <div id='global-modal-background'>
            <div id='global-modal-box'>
              {this.modalGuts()}
              <button id='delete' onClick={this.handleCompanyDelete}>Delete</button>
              <button id='archive'
                onClick={function(e) {
                    this.handleCompanyArchive(e, false)
                  }.bind(this)
                }
                >Un-Archive
              </button>
            </div>
          </div>
        );
      }
    }

  }

});
