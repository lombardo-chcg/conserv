class EventsController < ApplicationController
  def index
    all_events = Event.where(device_id: 1)
    # need to add column to DB  to link a device to a user
    # device_owner_id = current_user.id
    unclaimed_events = all_events.where(event_claimer_id: nil)
    render json: { events: unclaimed_events }
  end

  def generate_events
    e = Event.create
    e.create_events(1)
    redirect_to '/'
  end

  def claim
    event = Event.find(params[:event_id])
    p event
    event.event_claimer_id = current_user.id
    event.save
    render json: {status: true}
  end

  private
    def claim_event_params
      params.permit(:event_id)
    end
end
