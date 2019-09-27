class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params)

    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def destroy
    if current_user
      log_out!
      render json: {}
    else
      render json: ['Not logged in'], status: 404
    end

  end


end
