var CompanyList = React.createClass({

  render() {

    var data = this.props.data
    var handleCompanyEdit = this.props.onCompanyEdit
    var deleteCompany = this.props.onCompanyDelete;

    var companyList = data.map(function(company, index) {

      if (data[index].company.archived === 'true') {
        return (
          <div id='hidden-div' key={data[index].company.id}>
          </div>
        )
      } else {
        return (
          <div id='company-wrapper' key={data[index].company.id}>
            <Company
              data={data}
              onCompanyEdit={handleCompanyEdit}
              onCompanyDelete={handleCompanyDelete}
              id={data[index].company.id}
              name={data[index].company.name}
              url={data[index].company.url}
              image={data[index].company.image}
              archived={data[index].company.archived}
            />
          </div>
        )
      }

    });

    return (
      <div>
        {companyList}
      </div>
    )

  }
});
