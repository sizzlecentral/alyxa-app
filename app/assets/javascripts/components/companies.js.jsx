var Companies = React.createClass({

  getInitialState() {
    return {
      companies: this.props.companies
    };
  },

  getDefaultProps() {
    return {
      companies: []
    };
  },

  render() {

  return (

  <div>

  <div id='header'>
    <Header />
  </div>

    <div id='company-list'>
      {this.state.companies}
    </div>

        <div id='footer'>
          <Footer />
        </div>

      </div>
    )
  }
});
