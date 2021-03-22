class Item < ApplicationRecord
    belongs_to :image
    
    validates :item_1, :presence => true, :uniqueness => true
end
