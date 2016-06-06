class User < ActiveRecord::Base
  has_secure_password

  belongs_to :device
  belongs_to :house
  has_many  :events

  # validates :username, :email, { presence: true }
  # validates :password_digest, { length: { minimum: 4}}
  # validates :email, { uniqueness: true }


end
