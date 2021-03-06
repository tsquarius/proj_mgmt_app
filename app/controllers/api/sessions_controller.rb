class Api::SessionsController < ApplicationController

  before_action :require_logged_out, only: [:create]
  before_action :require_logged_in, only: [:destroy]

  def create
    @user = User.find_by_credentials(user_params)

    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials were entered'], status: 422
    end

  end

  def destroy
    if current_user
      log_out!
      render json: {}
    else
      render json: ['Not logged in'], status: 422
    end

  end


end
