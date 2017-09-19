var Company = React.createClass({

  deleteCompany() {
    {/* Delete request code goes here */}
    console.log('Deleting company')
  },

  updateCompany() {
    {/* Put request code goes here */}
    console.log('Updating company')
  },

  render() {

    var companyList = this.props.companies

    var listed = companyList.map(function(company, index){
          return <div id='company-row' key={index}>
            <a href={companyList[index].company.url} target='_blank'>
              <div id='company-image'>
                <img src={companyList[index].company.image} alt={companyList[index].company.name} height='75' width='75' />
              </div>
              <div id='company-name'>
                {companyList[index].company.name}
              </div>
            </a>
            <div>
              <button id='delete' onClick={this.deleteCompany}>Delete</button>
              <button id='edit' onClick={this.updateCompany}>Edit</button>
            </div>
          </div>;
        })

    return (
      <div>
        {listed}
      </div>
    )
  }
});
