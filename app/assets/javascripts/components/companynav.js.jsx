var CompanyNav = React.createClass({

  current() {
    console.log('current');
  },

  archived() {
    console.log('archived');
  },

  all() {
    console.log('all');
  },

  render() {

    return (
      <div>
        <button id='new' onClick={this.current}>Current</button>
        <button id='new' onClick={this.archived}>Archived</button>
        <button id='new' onClick={this.all}>All</button>
      </div>
    )

  }
});
