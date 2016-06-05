var ClaimEventButton = React.createClass({

  claimEvent: function(id) {
    $.ajax({
      url: "/events/claim",
      type: "post",
      data: {event_id: id}
    }).success(function(response){
      console.log(response)
      $("#"+id).fadeOut(1000);
    })
  },
  render: function() {
    return <div>
      <a
        onClick={this.claimEvent.bind(null, this.props.event.id)}
        className="waves-effect waves-light btn-large"
        id={this.props.event.id}
      >
        {this.props.event.start_time} | {this.props.event.end_time} | {this.props.event.points}
      </a>
    </div>
  },

})
