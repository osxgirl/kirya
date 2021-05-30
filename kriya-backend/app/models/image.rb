class Image < ApplicationRecord
    has_many :urls
    has_many :comments

    def naming
      self.name.upcase
    end

end
