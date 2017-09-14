var Company = React.createClass({

  render() {

    var listed = []
    var companyList = this.props.companies.split('{"id":')
    for (i in companyList) {
      listed.push(companyList[i]);
    }

    return (
      <div>
        {listed.map(function(company, index) {
            return <div id='company-row' key={index}>{company}</div>
          })
        }
        {companyList}
      </div>
    )
  }
});
