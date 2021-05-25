class Image < ApplicationRecord
    has_many :urls
    
    def naming
      self.name.upcase
    end

end
