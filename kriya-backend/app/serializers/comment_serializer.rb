class CommentSerializer < ActiveModel::Serializer
  attributes :comment
  has_one :image
end
