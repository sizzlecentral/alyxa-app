var NewCompany= React.createClass({

  addCompany() {
    var company = {
      name:     this.refs.name.value,
      url:      this.refs.url.value,
      image:    this.refs.image.value,
    }

    $.ajax({
      url:      '/companies',
      type:     'POST',
      dataType: 'json',
      data:      company,
      success: (company) => {
        this.props.handleSubmit(company);
      },
      error: function (company) {
      console.log(typeof company);
      },

    });
  },

  render() {

    return (
      <div id='new-company-form'>
        <h2>Add a new company:</h2>
        <div>
          <input ref='name' placeholder='Enter name of the company' />
        </div>
        <br />
        <div>
          <input ref='url' placeholder='Enter link to company website' />
        </div>
        <br />
        <div>
          <input ref='image' placeholder='Enter link to company image' />
        </div>
        <br />
        <div>
          <button onClick={this.addCompany}>Submit</button>
        </div>
      </div>
    )
  }
});
