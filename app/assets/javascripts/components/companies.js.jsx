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

  render() {

  var companyList = this.state.companies
  var listed = JSON.stringify(companyList)

  return (

  <div>

  <div id='header'>
    <Header />
  </div>

    <div id='company-list'>
      <Company companies={listed}  />
    </div>

        <div id='footer'>
          <Footer />
        </div>

      </div>
    )
  }
});
