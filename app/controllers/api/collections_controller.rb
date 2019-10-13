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

  private

  def collection_params
    params.require(:collection).permit(:title)
  end

  def require_membership
    #should render error message unless we're a user
    #impacts show
  end

end
