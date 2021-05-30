class CommentsController < ApplicationController
helper_method :current_user
  # GET /comments
  def index
    comments = Comment.all
    render json: CommentSerializer.new(comments)
  end

  # POST /comments
   def create
         comment = Comment.new(comment_params)
         if comment.save
             render json: CommentSerializer.new(comment, include: [:image])
         else
             render json: {error: "could not save"}
         end
     end

  
  # GET /comments/1
  def show
    comment = Comment.find(params[:id])
    render json: comment.to_json(except: [:created_at, :updated_at], include: {image: {only: [:name]}})
  end
 
#  # GET /comments/new
#  def new
#  end
#
#  # GET /comments/1/edit
#  def edit
#  end


  # PATCH/PUT /comments/1
  def update
      comment = Comment.find(params[:id])
      if comment.update(comment_params)
          render json: CommentSerializer.new(comment)
      else
          render json: {error: "could not save"}
      end
  end

  # DELETE /comments/1
  def destroy
      comment = Comment.find(params[:id])
      comment.destroy
      render json: {message: "successfully deleted #{comment.name}"}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
#    def set_comment
#      @comment = Comment.find(params[:id])
#    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:comment, :image_id)
    end
end
