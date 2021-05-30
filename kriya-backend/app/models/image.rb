class Image < ApplicationRecord
    has_many :urls
<<<<<<< HEAD
    has_many :comments
=======
    
    def naming
      self.name.upcase
    end

>>>>>>> edf316689362adf83bf94784c01e96a862ce45eb
end
