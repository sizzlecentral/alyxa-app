var CompanyNav = React.createClass({

  sendArchivedStatus(e) {
    this.props.toggle(e.target.value)
  },

  render() {

    if (this.props.archivedStatus === 'current') {
      return (
        <div>
          <button id='new-active' value='current' onClick={this.sendArchivedStatus}>Current</button>
          <button id='new' value='archived' onClick={this.sendArchivedStatus}>Archived</button>
          <button id='new' value='all' onClick={this.sendArchivedStatus}>All</button>
        </div>
      )
    } else if (this.props.archivedStatus === 'archived') {
      return (
        <div>
          <button id='new' value='current' onClick={this.sendArchivedStatus}>Current</button>
          <button id='new-active' value='archived' onClick={this.sendArchivedStatus}>Archived</button>
          <button id='new' value='all' onClick={this.sendArchivedStatus}>All</button>
        </div>
      )
    } else {
      return (
        <div>
          <button id='new' value='current' onClick={this.sendArchivedStatus}>Current</button>
          <button id='new' value='archived' onClick={this.sendArchivedStatus}>Archived</button>
          <button id='new-active' value='all' onClick={this.sendArchivedStatus}>All</button>
        </div>
      )
    }



  }
});
