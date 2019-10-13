class Api::TagsController < ApplicationController

  before_action :require_logged_in

  def show
    @tag = Tag.find(params[:id])
    render :show
  end

  def create
    card = Card.find(params[:card_id])
    @tag = card.receive_tag(tag_params)
    if @tag
      render :show
    else
      render json: ['Unable to add your tag...'], status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    if @tag.destroy
      render :show
    else
      render json: ['Unable to remove this tag'], status: 422
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :color)
  end

end
