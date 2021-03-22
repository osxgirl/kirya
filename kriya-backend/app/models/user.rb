class User < ApplicationRecord
     has_secure_password
     
     validates :email, :presence => true, :uniqueness => true
     validates_uniqueness_of :email
     
     before_save { self.email = email.downcase }
     
     has_many :images
     has_many :items, through: :images
     
end
