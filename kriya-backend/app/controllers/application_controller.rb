class ApplicationController < ActionController::Base
      skip_before_action :verify_authenticity_token
      #protect_from_forgery with: :null_session
      
      
      helper_method :current_user

    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end
end
