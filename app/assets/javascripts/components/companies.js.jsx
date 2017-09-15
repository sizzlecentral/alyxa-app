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

  var listed = []
  var companyList = this.state.companies
  for (i in companyList) {
    listed.push(companyList[i]);
  }

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
