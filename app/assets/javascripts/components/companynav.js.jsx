var CompanyNav = React.createClass({

  render() {

    return (
      <div>
        <button id='new' value='current' onClick={this.props.toggle}>Current</button>
        <button id='new' value='archived' onClick={this.props.toggle}>Archived</button>
        <button id='new' value='all' onClick={this.props.toggle}>All</button>
      </div>
    )

  }
});
