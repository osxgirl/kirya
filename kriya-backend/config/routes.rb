Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
   root to: 'welcome#home'
   resources :images
   resources :videos
   resources :comments
   
   get '/test', to: 'application#test'
   get '/index', to: 'images#index'
  
   get '/show', to: 'images#show'
   
   get 'images' => 'images#index'
   get 'videos' => 'videos#index'
 
   

end
