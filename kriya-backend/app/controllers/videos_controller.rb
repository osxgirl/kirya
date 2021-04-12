    class VideosController < ApplicationController

        helper_method :current_user
        
    #    def index
    #      render json: { test: "images success" }
    #    end
    #
        
      def index
        @video = Video.all
        render json: @video.to_json(only: [:url])
      end
      
      def create
        video = Video.create(
          video: Video.find(params[:video_id])
        )
        render json: videos
      end
      
       def show
         @video = Video.find(params[:id])
         render json: @video.to_json(only: [:url])
       end
      
      private
      
      def video_params
            params.require(:video).permit(:url)
      end

    end


