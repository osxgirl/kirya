class VideoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :url
  
  def index
    videos = Video.all
    render json: VideoSerializer.new(videos)
  end
end
