var Company = React.createClass({

  render() {

    var companies = ['Hubba', 'Shopify', 'Wealthsimple']
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
