var UserShow = React.createClass ({
  getInitialState: function() {
    return {
      data: undefined
    }
  },

  componentWillMount: function(){
    $.ajax({
      url: '/users/show',
      type: 'GET'
    }).success(function(response){
      this.setState({data: response});
    }.bind(this));
  },

  render: function(){
    if (this.state.data != undefined) {
      return(
        <div>
          <img src="gravatar_tag { this.state.data.url }" width="50" height="50" alt="Gravatar" />
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
});
