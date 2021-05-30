class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :url
  has_many :comments
  
  def index
    images = Image.all
    render json: ImageSerializer.new(images)
  end
  
  def show
    image = Image.find(params[:id])
    render json: ImageSerializer.new(image)
  end
end
