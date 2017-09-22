var Companies = React.createClass({

  getDefaultProps() {
    return {
      data: []
    };
  },

  getInitialState() {
    return {
      data: this.props.companies
    }
  },

  componentDidMount() {
    this.getInitialState();
  },

  handleCompanySubmit(company) {
    var that = this
    $.ajax({
      url:      '/companies',
      dataType: 'json',
      type:     'POST',
      headers: {
        'X-Transaction': 'POST Example',
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data:      { company: company },
      success: function(data) {
        console.log(data)
        that.setState({data: data});
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
