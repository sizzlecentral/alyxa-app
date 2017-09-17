var Company = React.createClass({

  render() {

    var companyList = this.props.companies
    console.log(companyList[0].company.name)

    var listed = companyList.map(function(company, index){
          return <div id='company-row' key={index}>
            <a href={companyList[index].company.url}>
              <div id='company-image'>
                <img src={companyList[index].company.image} alt={companyList[index].company.name} />
              </div>
              <div id='company-name'>
                {companyList[index].company.name}
              </div>
            </a>
          </div>;
        })

    return (
      <div>
        {listed}
      </div>
    )
  }
});
