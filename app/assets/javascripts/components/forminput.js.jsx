var FormInput = React.createClass({

  getInitialState() {
    return {
      isEmpty:  true,
    };
  },

  handleChange(e) {
    if(this.props.onChange) {
      this.props.onChange(e);
    }
  },

  render() {

    return (
      <div>
        <input
          value={this.props.value}
          placeholder={this.props.text}
          onChange={this.handleChange}
        />
      </div>
    );

  }

});
