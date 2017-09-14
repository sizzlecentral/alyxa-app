var Company = React.createClass({

  render() {

    var companyList = this.props.companies

    return (
      <div>
        {companyList}
      </div>
    )
  }
});
