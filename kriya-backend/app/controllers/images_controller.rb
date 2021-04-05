    class ImagesController < ApplicationController

        helper_method :current_user
        
    #    def index
    #      render json: { test: "images success" }
    #    end
    #
        
      def index
        @image = Image.all
        render json: @image.to_json(only: [:name, :url, :id])
      end
      
      def create
        image = Image.create(
          image: Image.find(params[:image_id])
        )
        render json: images
      end
      
       def show
         @image = Image.find(params[:id])
         render json: @image.to_json(only: [:name, :url, :id])
       end
      
      private
      
      def image_params
            params.require(:image).permit(:name, :url)
      end

    end


