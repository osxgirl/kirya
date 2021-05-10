Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
   root to: 'welcome#home'
   resources :images
   resources :videos
   
   get 'images' => 'images#index'
   get '/videos' => 'videos#index'
 
   

end
