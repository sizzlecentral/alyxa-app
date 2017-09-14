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

  return (

  <div>

  <div id='header'>
    <Header />
  </div>

    <div id='company-list'>
      <Company companies={this.state.companies} />
    </div>

        <div id='footer'>
          <Footer />
        </div>

      </div>
    )
  }
});
