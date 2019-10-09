class Api::BoardsController < ApplicationController

  def index
    @boards = Board
      .includes(:board_columns)
      .includes(:cards)
      .where(author_id: current_user.id, collection_id: params[:collection_id])
    render :index
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def create
    @board = Board.new(board_params)
    next_order = Board.find_next_order(params[:collection_id])
    @board.assign_attributes(
      author_id: current_user.id,
      collection_id: params[:collection_id],
      order: next_order
    )

    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end

  end

  def update
    @board = Board.find(params[:id])
    if @board.update_attributes(board_params)
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @board = Board.find(params[:id])
    if @board
      @board.destroy
      render :show
    else
      render json: ['Board cannot be found'], status: 422
    end
  end

  private

  def board_params
    params.require(:board).permit(:title, :collection_id)
  end

end
