class CommentSerializer
    include FastJsonapi::ObjectSerializer
    
    attributes :id, :comment
    
    belongs_to :image
  
end
