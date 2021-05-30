class ImagesController < ApplicationController

        helper_method :current_user
  
      def index
        images = Image.all
            options = {include: [:comments]}
            render json: ImageSerializer.new(images, include: [:comments])
      end
        
      def show
        image = Image.find(params[:id])
        render json: image.to_json
      end
           
      def create
        image = Image.new(image_params)
        if image.save
           render json: ImageSerializer.new(image)
        else
           render json: {error: "could not save"}
        end
      end
        

      def destroy
        image = Image.find(params[:id])
        image.destroy
        render json: {message: "successfully deleted #{image.name}"}
      end

      def update
        image = Image.find(params[:id])
        if image.update(image_params)
            render json: ImageSerializer.new(image)
        else
            render json: {error: "could not save"}
        end
      end

        private

      def image_params
        params.require(:image).permit(:name, :url)
      end

end
