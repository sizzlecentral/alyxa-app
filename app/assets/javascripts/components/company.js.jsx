var Company = React.createClass({

  render() {

    var companies = companies
    var companyList = companies.map(function(name) {
      return <div id="company-row">{name}</div>;
    })

    return (
      <div>
        {companyList}
      </div>
    )
  }
});
