class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :points
      t.integer :device_id
      t.integer :event_claimer_id
      t.datetime :start_time
      t.datetime :end_time
      t.timestamps(null: false)
    end
  end
end

# need to add device ID rather than depending on user id
