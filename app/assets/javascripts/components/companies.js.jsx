var Companies = React.createClass({

  getDefaultProps() {
    return {
      companies: []
    };
  },

  getInitialState() {
    return {
      companies: this.props.companies
    };
  },

  addCompany(company) {
    {/* push new record into companies array */}
    this.state.companies.push(company)
    {/* set state to modified companies array */}
    this.setState({companies: this.state.companies});
  },

  deleteCompany(company) {
    {/* find index of company to be deleted in companies array */}
    {/* remove company from companies array */}
    {/* set state to modified companies array */}
  },

  updateCompany(company, info) {
    {/* find index of company to be updated in companies array */}
    {/* find and replace the target data for the company */}
    {/* set state to modified companies array */}
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
          <Company companies={companyList}  />
        </div>

        <div id='footer'>
          <Footer />
        </div>

      </div>

    )
  }
});
