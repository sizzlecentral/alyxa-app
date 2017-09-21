var CompanyList = React.createClass({

  render() {

    var data = this.props.data
    var companyList = data.map(function(company) {
      return (
        <Company
          key={company.id}
          name={company.name}
          url={company.url}
          image={company.image}
        />
      )
    });

    return (
      <div>
        {companyList}
      </div>
    )

  }
});






{/*

    var companyList = json.map(function(company, index) {
      return (
        <div id='company-row' key={index}>
          <a href={companyList[index].company.url} target='_blank'>
            <div id='company-image'>
              <img src={companyList[index].company.image} alt={companyList[index].company.name} height='75' width='75' />
            </div>
            <div id='company-name'>
              {companyList[index].company.name}
            </div>
          </a>
        </div>
      );
    });
    return (
      <div>
        {companyList}
      </div>
    )
  }
});

*/}
