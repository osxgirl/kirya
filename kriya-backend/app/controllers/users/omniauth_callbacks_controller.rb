class WelcomeController < ApplicationController

  def home
      @user = current_user
      render '/home.html.erb'
  end
  
  def facebook
    @user = User.from_omniauth(request.env["omniauth.auth"])
    sign_in_and_redirect @user
  end
  
end
