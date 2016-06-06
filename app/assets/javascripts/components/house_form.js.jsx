var HouseForm = React.createClass({
  handleFormSubmit: function(event) {
    event.preventDefault();
    data = $(event.target).serialize();
    $.ajax({
      url: '/houses',
      type: 'post',
      data: data
    }).success(function(response){
      if (response.errors) {
        var errors = response.errors
        $(".errors").append(`<li> ${errors} </li>`)
      } else {
        this.props.onAction('house', {houseMember: true})
      }
    }.bind(this));
  },

  render: function(){
    return (
      <div className="house-form-page">
        <h5> create or find a house </h5>
        <div className="house-form">
          <form onSubmit={this.handleFormSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">store</i>
                <input type="text" className="validate" name="name" />
                <label>House name</label>
              </div>
              <div className="input-field col s12 center-align">
                <button className="btn waves-effect waves-light" type="submit" name="action">
                Submit
                </button>
              </div>
            </div>
          </form>
          <div className="errors-div">
            <ul className="errors">
            </ul>
          </div>
        </div>
      </div>
    )
  }
});
