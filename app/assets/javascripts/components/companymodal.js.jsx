var Modal = React.createClass({

  editForm() {
    return (
      <form id='edit-company-form' onSubmit={this.props.onCompanyEdit}>
        <h3>Edit Company #{this.props.id}</h3>
        <br />

        <p>Company name.</p>
        <FormInput
          value={this.props.name}
          text={this.props.name}
          onChange={this.props.setValue.bind(null, 'name')}
        />
        <br />

        <p>Link to company website.</p>
        <FormInput
          value={this.props.url}
          text={this.props.url}
          onChange={this.props.setValue.bind(null, 'url')}
        />
        <br />

        <p>Link to company image. File must be at least 240px wide by 150px high.</p>
        <FormInput
          value={this.props.image}
          text={this.props.image}
          onChange={this.props.setValue.bind(null, 'image')}
        />
        <br />

        <button id='submit' type='submit' value='Submit'>Save Changes</button>
        <br />
        <br />
        <center><a onClick={this.props.unMakeEditable}>Cancel</a></center>
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
        <button id='close-modal' onClick={this.props.closeCompany}>Close</button>
      </div>
    )
  },

  render() {

    if (!this.props.show) {
      return null;
    }

    if (this.props.archived != 'true') {

      if (this.props.editable === false) {
        return (
          <div id='company-modal'>
            {this.modalGuts()}
            <button id='edit' onClick={this.props.makeEditable}>Edit</button>
            <button id='archive' onClick={this.props.onCompanyArchive}>Archive</button>
          </div>
        );
      } else {
        return (
          <div>
            {this.editForm()}
          </div>
        );
      }

    } else {

      if (this.props.editable === false) {
        return (
          <div id='company-modal'>
            {this.modalGuts()}
            <button id='delete' onClick={this.props.onCompanyDelete}>Delete</button>
            <button id='archive' onClick={this.props.onCompanyArchive}>Un-Archive</button>
          </div>
        );
      } else {
        return (
          <div>
            {this.editForm()}
          </div>
        );
      }
    }

  }

});
