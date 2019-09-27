class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?

  private 

  def current_user
    @current_user = User.find_by_session_token(session[:session_token])
  end

  def log_in!(user)
    session[:session_token] = user.session_token
  end

  def log_out!   
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def logged_in?
    !!@current_user
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
