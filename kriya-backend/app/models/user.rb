class User < ApplicationRecord
     has_secure_password
     
     validates :email, :presence => true, :uniqueness => true
     validates_uniqueness_of :email
     
     before_save { self.email = email.downcase }
end
