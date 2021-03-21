Rails.application.routes.draw do
   root to: 'welcome#home'
   resources :users
   resources :sessions, :only => [:create]

   get 'signup', to: 'users#new', as: 'signup'
   get 'login', to: 'sessions#new', as: 'login'

   get 'logout', to: 'sessions#destroy', as: 'logout'
   delete '/logout', to: 'sessions#destroy'

   post 'users' => 'users#create'
   get '/auth/:provider/callback', to: 'sessions#createauth'
end
