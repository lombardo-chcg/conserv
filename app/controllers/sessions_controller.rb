class SessionsController < ActionController::Base

  def new
    @user = User.new
  end

  def create
    @user = User.find_by(email: params[:email])
    @house = House.find_by(id: @user.house_id)
    if @user && @user.authenticate(params[:password])
      if @house == nil
        session[:user_id] = @user.id
        render json: { user_id: session[:user_id], house_member: false }
      else
        session[:user_id] = @user.id
        render json: { user_id: session[:user_id], house_member: true }
      end
    else
      @errors = "Invalid Credentials"
      render json: { errors: @errors}
    end
  end

  def destroy
    session[:user_id] = nil
       p session[:user_id]
    render json: {logout: true}
  end

  private
    def login_params
      params.permit(:email, :password)
    end
end
