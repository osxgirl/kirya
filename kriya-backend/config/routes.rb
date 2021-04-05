Rails.application.routes.draw do
   root to: 'welcome#home'
   resources :users
   resources :images
   resources :sessions, only: [:new, :create, :destroy]
   
   get '/test', to: 'application#test'
   
   get '/index', to: 'images#index'
   get '/show', to: 'images#show'
   
   get '/images' => 'images#index'
   
   
   get 'signup', to: 'users#new', as: 'signup'
   get 'login', to: 'sessions#new', as: 'login'
   
   get 'logout', to: 'sessions#destroy', as: 'logout'


   post 'users', to: 'users#create'
   get '/auth/:provider/callback', to: 'sessions#createauth'
end
