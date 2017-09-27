var CompanyList = React.createClass({

  render() {

    var data = this.props.data
    var handleCompanyEdit = this.props.onCompanyEdit

    var companyList = data.map(function(company, index) {
      return (
        <div id='company-row' key={index}>
          <Company
            onCompanyEdit={handleCompanyEdit}
            key={data[index].company.id}
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
