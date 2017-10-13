var CompanyNav = React.createClass({

  render() {

    return (
      <div>
        <button id='new' onClick={this.props.current}>Current</button>
        <button id='new' onClick={this.props.archived}>Archived</button>
        <button id='new' onClick={this.props.all}>All</button>
      </div>
    )

  }
});
