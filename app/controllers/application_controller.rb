class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private 

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in!(user)
    user.reset_session_token
    session[:session_token] = user.session_token
    @current_user = user
  end

  def log_out!   
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

  def require_logged_out
    unless !current_user
      render json: { base: ['Already logged in'] }, status: 401
    end
  end

end
