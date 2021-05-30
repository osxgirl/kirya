class Image < ApplicationRecord
    has_many :urls
    has_many :comments
end
