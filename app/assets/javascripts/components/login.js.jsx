var Login = React.createClass({
  handleFormSubmit: function(event) {
    event.preventDefault();
    formData = $(event.target).serialize();
    var request = $.ajax({
      url: '/sessions',
      type: 'post',
      data: formData
    })
    request.done(function(response){
      if (response.errors) {
        var errorsList = response.errors
        $(".errors").append(`<li> ${errorsList} </li>`)
      } else {
        this.props.onAction('main', { currentUserID: response.user_id, userLoggedIn: true, houseMember: response.house_member })
      }
    }.bind(this))
  },

  handleRegisterClick: function(){

    this.props.onAction("register")
  },

  render: function(){
    return (
      <div className="login-form">

        <form onSubmit={this.handleFormSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <i className="material-icons prefix">email</i>
              <input type="text" className="validate" name="email"/>
              <label>Email</label>
            </div>
            </div>
            <div className="row">
            <div className="input-field col s10">
              <i className="material-icons prefix">lock</i>
              <input type="password" className="validate" name="password"/>
              <label>Password</label>
            </div>
            </div>
            <div className="row">
            <div className="input-field col s10 center-align">
              <button className="btn waves-effect waves-light" type="submit" name="action">submit

              </button>
            </div>
             <a id="register-button" className="input-field col s10 center-align" onClick={this.handleRegisterClick}>Register to conserv</a>
            </div>
        </form>


          <div className="errors-div">
            <ul className="errors">
            </ul>
          </div>
      </div>
    )
  }
});
