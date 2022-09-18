Rails.application.routes.draw do
 
# root to temporary home page
root to: 'users#home'

# roots to login details
get '/login' => 'sessions#new'
post '/login' => 'sessions#create'
delete '/login' => 'sessions#destroy' 
 #Get the login token from Knock
 post 'user_token' => 'user_token#create'
 #User routes
 get '/users/current' => 'users#current'


  get '/pet' => 'pet#new'
  post '/pet' => 'pet#create'
  delete '/pet' => 'pet#destroy'


  #resources
  resources :users
  resources :pets
  resources :accessories


end 
