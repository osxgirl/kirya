class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :url
end
