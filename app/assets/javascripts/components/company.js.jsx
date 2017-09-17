var Company = React.createClass({

  render() {

    var companyList = this.props.companies
    console.log(typeof companyList)

    return (
      <div>
        <div id='company-row'>{companyList}</div>
      </div>
    )
  }
});
