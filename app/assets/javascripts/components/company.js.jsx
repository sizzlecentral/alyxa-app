var Company = React.createClass({

  getInitialState() {
    return {
      name:     this.props.name,
      url:      this.props.url,
      image:    this.props.image,
      editable: false,
    };
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
    this.setState(object);
  },

  render() {

    console.log(this.state);

    return (
      <div>

          <div id='company-image'>
            <img src={this.state.image} alt={this.state.name} height='75' width='75' />
          </div>
          <div id='company-name' onChange={this.handleCompanyEdit}>
            {this.state.name}
          </div>

      </div>
    );

  }
});
