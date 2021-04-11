class ApplicationController < ActionController::Base
      include ::ActionController::Serialization

      skip_before_action :verify_authenticity_token
      helper_method :current_user

      def test
        render json: { test: "success" }
      end 
   
   
      def after_sign_in_path_for(resource)
        request.env['omniauth.origin'] || root_path
      end
end
