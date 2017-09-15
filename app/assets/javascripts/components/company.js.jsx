var Company = React.createClass({

  render() {

    var companyList = this.props.companies

    return (
      <div>
        <div id='company-row'>{companyList}</div>
      </div>
    )
  }
});
