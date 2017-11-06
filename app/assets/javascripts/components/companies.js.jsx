var Companies = React.createClass({

  getDefaultProps() {
    return {
      data: []
    };
  },

  getInitialState() {
    return {
      data: this.props.companies,
      showModal: false,
      currentCompanyId: undefined,
    }
  },

  showCompany(companyId) {
    this.setState({
      showModal: true,
      currentCompanyId: companyId,
    })
  },

  closeCompany(companyId) {
    this.setState({
      showModal: false,
      currentCompanyId: companyId,
    })
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
      }
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
      success: function(resData) {
        var newData = that.state.data
        for (var i = 0; i < newData.length; i++) {
          if (newData[i].company.id === company.id) {
            newData.splice(i, 1, resData)
          }
        }
        that.setState({data: newData});
      }
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
        var newData = that.state.data;
        newData.splice(index, 1);
        that.setState({data: newData});
      }
    });
  },

  render() {

    if (this.state.showModal === true) {

      var newData = this.state.data
      var currentCompany = {}
      for (var i = 0; i < newData.length; i++) {
        if (newData[i].company.id === this.state.currentCompanyId) {
          currentCompany = newData[i].company
        }
      }

      return (
        <div>

          <div id='header'>
            <Header />
          </div>

          <div id='global-modal'>
            <GlobalModal
              id={currentCompany.id}
              name={currentCompany.name}
              url={currentCompany.url}
              image={currentCompany.image}
              archived={currentCompany.archived}
              showModal={this.state.showModal}
              closeCompany={this.closeCompany}
              onCompanyEdit={this.handleCompanyEdit}
              onCompanyDelete={this.handleCompanyDelete}
            />
          </div>

          <div id='company-list'>
            <NewCompany
              onCompanySubmit={this.handleCompanySubmit}
            />
            <CompanyList
              data={this.state.data}
              showCompany={this.showCompany}
            />
          </div>

          <div id='footer'>
            <Footer />
          </div>

        </div>
      )

    } else {

      return (
        <div>

          <div id='header'>
            <Header />
          </div>

          <div id='company-list'>
            <NewCompany
              onCompanySubmit={this.handleCompanySubmit}
            />
            <CompanyList
              data={this.state.data}
              showCompany={this.showCompany}
            />
          </div>

          <div id='footer'>
            <Footer />
          </div>

        </div>
      )

    }


  }

});
