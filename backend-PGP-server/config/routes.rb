Rails.application.routes.draw do
 
# root to temporary home page
root to: 'users#home'

# roots to login details
get '/login' => 'sessions#new'
post '/login' => 'sessions#create'
delete '/login' => 'sessions#destroy' 

#resources
resources :users
resources :pets
resources :accessories


end
