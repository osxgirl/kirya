class WelcomeController < ApplicationController

  def home
      @user = current_user
      render '/home.html.erb'
  end

end
