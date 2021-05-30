class CommentSerializer
    include FastJsonapi::ObjectSerializer
  belongs_to :image
  
  attributes :comment
end
