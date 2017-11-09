var NewCompany= React.createClass({

  getInitialState() {
    return {
      name:     "",
      url:      "",
      image:    "",
      openForm: false,
    };
  },

  openForm() {
    this.setState({openForm: true})
  },

  closeForm() {
    this.setState({
      name:     "",
      url:      "",
      image:    "",
      openForm: false,
    })
  },

  handleCompanySubmit(e) {

    e.preventDefault();
    var name = this.state.name.trim();
    var url = this.state.url.trim();
    var image = this.state.image.trim();
    if (!name) {
      return;
    }

    this.props.onCompanySubmit({
      name: name,
      url: url,
      image: image
    });

    this.closeForm();

  },

  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  },

  render() {

    if (this.state.openForm === false) {
      return (
        <button id='new' onClick={this.openForm}>Add a Company</button>
      )
    } else {
      return (
        <form id='new-company-form' onSubmit={this.handleCompanySubmit}>
          <h2>Add a new company:</h2>

          <FormInput
            value={this.state.name}
            text="Enter the company name"
            onChange={this.setValue.bind(this, 'name')}
          />
          <br />

          <FormInput
            value={this.state.url}
            text="Link to the company url"
            onChange={this.setValue.bind(this, 'url')}
          />
          <br />

          <FormInput
            value={this.state.image}
            text="Link to the company logo"
            onChange={this.setValue.bind(this, 'image')}
          />
          <br />

          <button id='submit' type='submit' value='Submit'>Submit</button>
          <br />
          <br />
          <center><a onClick={this.closeForm}>Cancel</a></center>

        </form>
      )
    }

  }

});
