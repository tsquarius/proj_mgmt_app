class Api::CollectionsController < ApplicationController

  def index
    @collections = Collection.where(author_id: current_user.id)
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
    if @collection
      @collection.destroy
    else
      render json: ["The collection you're trying to delete does not exist"], status: 422
    end
  end

  private

  def collection_params
    params.require(:collection).permit(:title)
  end

end
