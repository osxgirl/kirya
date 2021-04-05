class ApplicationController < ActionController::Base
      include ::ActionController::Serialization

      skip_before_action :verify_authenticity_token

      helper_method :current_user

      
      def test
        render json: { test: "success" }
      end 
    def current_user
      if session[:user_id]
        @current_user ||= User.find(session[:user_id])
      else
        @current_user = nil
      end
    end
    
    
    
    
end
