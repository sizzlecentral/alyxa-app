var Companies = React.createClass({

  getInitialState() {
    return {
      data: []
    };
  },

  loadCompanies() {
    this.setState({
      data: this.props.companies
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
          data: data
        });
      }
    });
  },

  render() {
    return (
      <div>

        <div id='header'>
          <Header />
        </div>

        <div id='company-list'>
          <NewCompany onCompanySubmit={this.handleCompanySubmit} />
          <CompanyList data={this.state.data} />
        </div>

        <div id='footer'>
          <Footer />
        </div>

      </div>
    )
  }

});
