class Api::CardsController < ApplicationController

  def show
    @card = Card.find(params[:id])
    render :show
  end

  def create
    @card = Card.new(card_params)
    next_order = Card.find_next_order(params[:board_column_id])

    @card.assign_attributes(
      author_id: current_user.id,
      board_column_id: params[:board_column_id],
      order: next_order
    )

    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end
  
  def update
    @card = Card.find(params[:id])
    
    if @card.update_attributes(card_params)
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @card = Card.find(params[:id])
    if @card.destroy
      render :show
    else
      render json: ['Card does not exist'], status: 422
    end
  end

  private

  def card_params
    params.require(:card).permit(:archived, :title, 
    :color, :due_date, :description, :order, :reorder, :board_column_id)
  end

end
