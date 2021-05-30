class CommentsController < ApplicationController
helper_method :current_user
  # GET /comments
  def index
    @comment = Comment.all
    render json: @comment.to_json(only: [:comment])
  end

  # POST /comments
  def create
     comment = Comment.create(
             comment: Comment.find(params[:comment_id])
           )
           render json: comments
  end

  
  # GET /comments/1
  def show
    @comment = Comment.find(params[:id])
    render json: @comment.to_json(only: [:comment])
  end
 
  # GET /comments/new
  def new
    @comment = Comment.new
  end

  # GET /comments/1/edit
  def edit
  end


  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      redirect_to @comment, notice: 'Comment was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
    redirect_to comments_url, notice: 'Comment was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:comment, :image_id)
    end
end
