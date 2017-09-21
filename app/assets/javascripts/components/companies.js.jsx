var Companies = React.createClass({

  getInitialState() {
    return {
      companies: []
    };
  },

  loadCompanies() {
    this.setState({
      companies: this.props.companies
    });
  },

  componentDidMount() {
    this.loadCompanies();
  },

  handleCompanySubmit(company) {
    $.ajax({
      url:      '/companies',
      dataType: 'json',
      type:     'POST',
      data:      company,
      success(data) {
        this.setState({
          companies: data
        });
      }
    });
  },

  render() {

  var companyList = this.state.companies
  var listed = JSON.stringify(companyList)

  return (

      <div>

        <div id='header'>
          <Header />
        </div>

        <div id='company-list'>
          <NewCompany handleSubmit={this.handleSubmit}/>
          <Company companies={companyList} handleDelete={this.deleteCompany} onUpdate={this.updateCompany}  />
        </div>

        <div id='footer'>
          <Footer />
        </div>

      </div>

    )
  }
});
