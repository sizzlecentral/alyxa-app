var Company = React.createClass({

  getInitialState() {
    return {
      name:     this.props.name,
      url:      this.props.url,
      image:    this.props.image,
      editable: false,
    };
  },

  makeEditable() {
    return {
      name:     this.state.name,
      url:      this.state.url,
      image:    this.state.image,
      editable: true,
    };
    console.log('clicky');
  },

  handleCompanyEdit(e) {

    e.preventDefault();
    var name = this.state.name.trim();
    var url = this.state.url.trim();
    var image = this.state.image.trim();
    if (!name) {
      return;
    }

    this.props.onCompanyEdit({
      name: name,
      url: url,
      image: image
    });

  },

  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    object[editable] = false;
    this.setState(object);
  },

  render() {

    console.log(this.state.editable);

    if (this.state.editable === false) {
      return (
        <div>

            <div id='company-image'>
              <img src={this.state.image} alt={this.state.name} height='75' width='75' />
            </div>
            <div id='company-name'>
              {this.state.name}
            </div>
            <div>
              <button id='edit'>Edit</button>
            </div>

        </div>
      );

    } else {
      return (
        <div>
          <form id='edit-company-form' onSubmit={this.handleCompanyEdit}>
            <h3>Edit Company</h3>
            <div id='company-image'>
            <FormInput
              value={this.state.image}
              text={this.state.image}
              onChange={this.setValue.bind(this, 'image')}
            />
            <br />
            </div>
            <div id='company-name'>
              <FormInput
                value={this.state.name}
                text={this.state.name}
                onChange={this.setValue.bind(this, 'name')}
              />
              <br />
              <FormInput
                value={this.state.url}
                text={this.state.url}
                onChange={this.setValue.bind(this, 'url')}
              />
              <br />
            </div>
            <button type='submit' value='Submit'>Save Changes</button>
          </form>
        </div>
      );

    }

  }
});
