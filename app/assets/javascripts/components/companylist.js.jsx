var CompanyList = React.createClass({

  getInitialState() {
    return {
      status: 'current'
    };
  },

  handleState(e) {
    this.setState({status: e.target.value});
  },

  render() {

    var data = this.props.data.reverse()
    var showCompany = this.props.showCompany
    var status = this.state.status

    var companyList = data.map(function(company, index) {

      var company = data[index].company

      if (status === 'current') {

        if (company.archived === 'true') {
          return (
            <div id='hidden-div' key={company.id}>
            </div>
          )
        } else {
          return (
            <div id='company-wrapper' key={company.id}>
              <Company
                id={company.id}
                archived={company.archived}
                name={company.name}
                url={company.url}
                image={company.image}
                showCompany={showCompany}
              />
            </div>
          )
        }

      } else if (status === 'archived') {

        if (company.archived === 'true') {
          return (
            <div id='company-wrapper' key={company.id}>
              <Company
                id={company.id}
                archived={company.archived}
                name={company.name}
                url={company.url}
                image={company.image}
                showCompany={showCompany}
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
              id={company.id}
              archived={company.archived}
              name={company.name}
              url={company.url}
              image={company.image}
              showCompany={showCompany}
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
