class Api::CollectionsController < ApplicationController
  before_action :require_logged_in

  def index
    @collections = current_user.subscribed_collections
    render :index
  end
  
  def show
    @collection = Collection.find(params[:id])
    render :show
  end

  def create
    @collection = Collection.new(collection_params)
    @collection.author_id = current_user.id
    
    if @collection.save
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def update
    @collection = Collection.find(params[:id])
    if @collection.update_attributes(collection_params)
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end    
  end

  def destroy
    @collection = Collection.find(params[:id])
    if @collection.author_id != current_user.id
      render json: ['You are not the owner of this collection']
    end

    if @collection
      @collection.destroy
      render :show
    else
      render json: ["The collection you're trying to delete does not exist"], status: 422
    end
  end

  def add_member
    user = User.find_by(member_params)
    @collection = Collection.find(params[:id])

    if !user
      render json: ['User does not exist. Please try again'], status: 422
      return
    end

    if @collection.author_id != current_user.id
      render json: ['You are not the owner of this collection'], status: 422
      return
    end
    
    if @collection.team_members << user
      render :show
    else
      render json: ['Unable to add user...'], status: 422
    end

  end

  def remove_member
    user = User.find_by(member_params)
    @collection = Collection.find(params[:id])

    if !user
      render json: ['User does not exist. Please try again'], status: 422
      return
    end

    unless @collection.author_id == current_user.id || user.id == current_user.id
      render json: ['You do not have permission to remove this user'], status: 422
      return
    end

    if @collection.team_members.delete(user)
      render :show
    else
      render json: ['We were unable to remove the user'], status: 422
    end

  end

  private

  def collection_params
    params.require(:collection).permit(:title)
  end

  def member_params
    params.require(:member).permit(:email, :username)
  end

end
