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

  handleCompanySubmit(company) {
    var that = this
    $.ajax({
      url:      '/companies',
      dataType: 'json',
      type:     'POST',
      headers: {
        'X-Transaction': 'POST',
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data:      { company: company },
      success: function(data) {
        var newData = that.state.data.concat([data]);
        that.setState({data: newData});
      }.bind(that),
    });
  },

  handleCompanyEdit(company) {
    var that = this
    $.ajax({
      url:      `/companies/${company.id}`,
      dataType: 'json',
      type:     'PUT',
      headers: {
        'X-Transaction': 'PUT',
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data:      { company: company },
      success: function(data) {
        var newData = that.state.data.reverse();
        that.setState({data: newData});
      }.bind(that),
    });
  },

  handleCompanyDelete(id, index) {
    var that = this
    $.ajax({
      url:      `/companies/${id}`,
      dataType: 'json',
      type:     'DELETE',
      headers: {
        'X-Transaction': 'DELETE',
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data:      { company: { id: id } },
      success: function(data) {
        var newData = this.state.data;
        newData.splice(index, 1);
        that.setState({data: newData});
      }.bind(that),
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
          <CompanyList data={this.state.data} onCompanyEdit={this.handleCompanyEdit} onCompanyDelete={this.handleCompanyDelete} />
        </div>

        <div id='footer'>
          <Footer />
        </div>

      </div>
    )
  }

});
