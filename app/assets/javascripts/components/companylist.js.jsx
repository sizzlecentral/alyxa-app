var CompanyList = React.createClass({

  render() {

    var data = this.props.data
    var handleCompanyEdit = this.props.onCompanyEdit
    var deleteCompany = this.props.onCompanyDelete;

    var companyList = data.map(function(company, index) {
      var id = data[index].company.id;

      return (
        <div id='company-wrapper' key={id}>
          <Company
            data={data}
            onCompanyEdit={handleCompanyEdit}
            onCompanyDelete={function() {
                deleteCompany(id, index)
              }
            }
            onCompanyDelete={ () => deleteCompany(id, index) }
            onCompanyDelete={deleteCompany.bind(null, id, index)}
            id={data[index].company.id}
            name={data[index].company.name}
            url={data[index].company.url}
            image={data[index].company.image}
          />
        </div>
      )
    });

    return (
      <div>
        {companyList}
      </div>
    )

  }
});
