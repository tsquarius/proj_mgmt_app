class Api::BoardColumnsController < ApplicationController

  def index
    @board_columns = BoardColumn.where(board_id: params[:board_id])
    render :index
  end

  def show
    @board_column = BoardColumn.find(params[:id])
    render :show
  end

  def create
    @board_column = BoardColumn.new(board_column_params)
    @board_column.board_id = params[:board_id]
    @board_column.order = BoardColumn.find_next_order(params[:board_id])

    if @board_column.save
      render :show
    else
      render json: @board_column.errors.full_messages, status: 422
    end
  end

  def update
    @board_column = BoardColumn.find(params[:id])
    
    if @board_column.update_attributes(board_column_params)
      render :show
    else
      render json: @board_column.errors.full_messages, status: 422
    end
  end

  def destroy
    @board_column = BoardColumn.find(params[:id])
    if @board_column
      @board_column.destroy
      render :show
    else
      render json: ['Board column does not exist'], status: 422
    end
  end

  private

  def board_column_params
    params.require(:board_column).permit(:title, :order, :board_id)
  end

end
