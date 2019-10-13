class Api::CommentsController < ApplicationController

  before_action :require_logged_in

  def index
    @comments = Comment.find_by(card_id: params[:card_id])
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.assign_attributes(
      card_id: params[:card_id], 
      author_id: current_user.id)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render :show
    else
      render json: ['Comment does not exist'], status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end

end
