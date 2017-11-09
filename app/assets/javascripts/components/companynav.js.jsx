var CompanyNav = React.createClass({

  sendArchivedStatus(e) {
    this.props.toggle(e.target.value)
  },

  render() {

    return (
      <div>
        <button id='new' value='current' onClick={this.sendArchivedStatus}>Current</button>
        <button id='new' value='archived' onClick={this.sendArchivedStatus}>Archived</button>
        <button id='new' value='all' onClick={this.sendArchivedStatus}>All</button>
      </div>
    )

  }
});
