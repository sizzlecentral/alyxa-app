var CompanyList = React.createClass({

  render() {

    var data = this.props.data.reverse()
    var handleCompanyEdit = this.props.onCompanyEdit
    var deleteCompany = this.props.onCompanyDelete;

    var companyList = data.map(function(company, index) {

      var id = data[index].company.id;

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
              onCompanyDelete={function() {
                  deleteCompany(id, index)
                }
              }
              id={data[index].company.id}
              name={data[index].company.name}
              url={data[index].company.url}
              image={data[index].company.image}
              archived={data[index].company.archived}
              editable={data[index].company.editable}
              show={data[index].company.show}
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
