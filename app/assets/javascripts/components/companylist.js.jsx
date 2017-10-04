var CompanyList = React.createClass({

  render() {

    var data = this.props.data
    var handleCompanyEdit = this.props.onCompanyEdit
    var handleCompanyDelete = this.props.onCompanyDelete

    var companyList = data.map(function(company, index) {
      return (
        <div id='company-wrapper' key={data[index].company.id}>
          <Company
            onCompanyEdit={handleCompanyEdit}
            onCompanyDelete={handleCompanyDelete}
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
