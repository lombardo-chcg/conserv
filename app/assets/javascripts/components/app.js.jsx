var App = React.createClass({
  getInitialState: function() {
    return {
      screen: "login",
      userLoggedIn: false,
      currentUserID: undefined,
      houseMember: false
    }
  },

  updateView: function(newView, options = {}) {
    $('#chart').empty()
    this.setState({ screen: newView });
    this.setState(options);
  },

  logout: function() {
    this.logoutServer();
    this.setState({
      screen: "main",
      userLoggedIn: false,
      currentUserID: undefined,
    });
  },

  logoutServer: function() {
    $.ajax({
      url: '/logout',
      type: 'get'
    }).done(function(response) {console.log(response)})
  },

  updateScreenContent: function() {
    switch(this.state.screen) {
      case "login":
        return <Login onAction={this.updateView} />
      case "main":
        if (this.state.userLoggedIn === true) {
          return <HomePage onAction={this.updateView}/>
        } else { return <Login onAction={this.updateView} /> }
      case "register":
        return <Register onAction={this.updateView} />
      case "userShow":
        return <UserShow onAction={this.updateView} />
      case "claimEvent":
        return <ClaimEvent onAction={this.updateView} />
      case "lineGraph":
        return <LineGraph onAction={this.updateView} />
      case "pieGraph":
        return <PieGraph onAction={this.updateView} />
      case "barGraph":
        return <BarGraph onAction={this.updateView} />
      case "house":
      if (this.state.houseMember === true) {
        return <House onAction={this.updateView} />
      } else {
        return <HouseForm onAction={this.updateView} />
      }
      case "logout":
        this.logout()
    }
  },
  render: function(){
    return <div className="app-container">
    < NavBar onAction={this.updateView} />
      {this.updateScreenContent()}
    </div>
  },
});
