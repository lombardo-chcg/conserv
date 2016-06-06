class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: { user_id: session[:user_id] }
    else
      @errors = @user.errors.full_messages
      render json: { errors: @errors }
    end
  end

  def show
    @user = User.find(current_user.id)
    render json: { url: @user.email }
  end

  # def edit
  # end

  # def update
  # end

  private
    def user_params
      params.require(:user).permit(:email, :username, :password)
    end
end
