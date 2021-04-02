class ImagesController < ApplicationController

    helper_method :current_user

#    def index
#      render json: { test: "images success" }
#    end
#
    
  def index
    images = Image.all
    render json: images, only: [:id, :url]
  end
  
  def create
    image = Image.create(
      image: Image.find(params[:image_id])
    )
    render json: images
  end
  
  def show
      images = Image.all
      render json: images, only: [:id, :url]
  end
  
  private
  
  def image_params
        params.require(:image).permit(:id, :url)
  end

end


