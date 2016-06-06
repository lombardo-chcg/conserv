var House = React.createClass({
  getInitialState: function(){
    return {
      data: undefined
    }
  },

  componentWillMount: function(){
    $.ajax({
      url: '/houses',
      type: 'GET'
    }).success(function(response){
      this.setState({data: response});
    }.bind(this));
  },

  handleFormSubmit: function(event){
    event.preventDefault();
    data = $(event.target).serialize();
    $.ajax({
      url: '/houses/add',
      type: 'POST',
      data: data
    })
  },

  render: function(){
    if (this.state.data != undefined) {
      return (
      <div className="house-info">
        <PieGraph />
        <h3> { this.state.data.data[0].house_name } </h3>
        <h5> Current Members: </h5>
        <ul>
          {this.state.data.data.map(function(data, i) {
            return <li key={i}>{data.user_name}</li>
          })}
        </ul>

        <h6> Add a new user to your house! </h6>
        <div className="add-member">
          <form onSubmit={this.handleFormSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">person_pin</i>
                <input type="text" className="validate" name="name" />
                <label>Username</label>
              </div>
              <div className="input-field col s12 center-align">
                <button className="btn waves-effect waves-light" type="submit" name="action">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
});
