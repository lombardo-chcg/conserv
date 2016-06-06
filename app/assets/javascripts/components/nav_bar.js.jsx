var NavBar = React.createClass ({
  handleClick: function(destination){
    this.props.onAction(destination);
    $('.button-collapse').sideNav('hide')
  },

  render: function(){
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo"><ConservLogo/></a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a onClick={this.handleClick} >User page</a></li>
            <li><a href="badges.html">House</a></li>
            <li><a href="collapsible.html">Settings</a></li>
            <li><a href="mobile.html">Invite Friends</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a onClick={this.handleClick.bind(null, "userShow")} >User page</a></li>
            <li><a onClick={this.handleClick.bind(null, "claimEvent")} >Claim Events</a></li>
            <li><a onClick={this.handleClick.bind(null, "lineGraph")} >lineGraph </a></li>
            <li><a onClick={this.handleClick.bind(null, "pieGraph")} >pieGraph </a></li>
            <li><a onClick={this.handleClick.bind(null, "barGraph")} >barGraph</a></li>
            <li><a onClick={this.handleClick.bind(null, "house")} >House</a></li>
            <li><a href="collapsible.html">Settings</a></li>
            <li><a href="mobile.html">Invite Friends</a></li>
            <li><a onClick={this.handleClick.bind(null, "logout")} >Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }

})




