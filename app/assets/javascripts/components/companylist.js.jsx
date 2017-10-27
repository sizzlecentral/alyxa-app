var CompanyList = React.createClass({

  getInitialState() {
    return {
      shown: 'current'
    };
  },

  handleState(e) {
    this.setState({shown: e.target.value});
  },

  render() {

    var data = this.props.data.reverse()
    var handleCompanyEdit = this.props.onCompanyEdit
    var deleteCompany = this.props.onCompanyDelete
    var archiveCompany = this.props.onCompanyArchive
    var state = this.state.shown

    var companyList = data.map(function(company, index) {

      var company = data[index].company

      if (state === 'current') {

        if (company.archived === 'true') {
          return (
            <div id='hidden-div' key={company.id}>
            </div>
          )
        } else {
          return (
            <div id='company-wrapper' key={company.id}>
              <Company
                company={company}
                id={company.id}
                archived={company.archived}
                onCompanyEdit={handleCompanyEdit}
                onCompanyArchive={archiveCompany}
                onCompanyDelete={function() {
                    deleteCompany(company.id, index)
                  }
                }
              />
            </div>
          )
        }

      } else if (state === 'archived') {

        if (company.archived === 'true') {
          return (
            <div id='company-wrapper' key={company.id}>
              <Company
                company={company}
                id={company.id}
                archived={company.archived}
                onCompanyEdit={handleCompanyEdit}
                onCompanyArchive={archiveCompany}
                onCompanyDelete={function() {
                    deleteCompany(company.id, index)
                  }
                }
              />
            </div>
          )

        } else {
          return (
            <div id='hidden-div' key={company.id}>
            </div>
          )
        }

      } else {

        return (
          <div id='company-wrapper' key={company.id}>
            <Company
              company={company}
              id={company.id}
              archived={company.archived}
              onCompanyEdit={handleCompanyEdit}
              onCompanyArchive={archiveCompany}
              onCompanyDelete={function() {
                  deleteCompany(company.id, index)
                }
              }
            />
          </div>
        )
      }

    });

    return (
      <div>
        <CompanyNav
          toggle={this.handleState}
        />
        {companyList}
      </div>
    )

  }
});
