class WelcomeController < ApplicationController

  def home
      @user = current_user
      render '/layouts/home.html.erb'
  end

end
