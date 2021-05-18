    class VideosController < ApplicationController

        helper_method :current_user
        
    #    def index
    #      render json: { test: "images success" }
    #    end
    #
        
      def index
          videos = Video.all
          
          render json: VideoSerializer.new(videos)
      end
      
      def create
          video = Video.new(video_params)
          if video.save
             render json: VideoSerializer.new(video)
          else
          render json: {error: "couls not save"}
          end
      end
      
       def show
           video = Video.find(params[:id])
           render json: video.to_json
       end
      
      private
      
      def video_params
            params.require(:video).permit(:name, :url)
      end

    end


