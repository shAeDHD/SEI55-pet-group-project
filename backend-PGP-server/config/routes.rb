Rails.application.routes.draw do
 
  # root to temporary home page
  root to: 'users#home'

  # roots to login details
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/login' => 'sessions#destroy' 

  #Get the login token from Knock
  post '/user_token' => 'user_token#create'
  #User routes
  get '/users/current' => 'users#current'

  post '/user/signup' => 'users#create'


  # get '/pet/new' => 'pets#new'
  # get '/pets/index' => 'pets#index'
  # post '/pets/create' => 'pets#create'
  # delete '/pets' => 'pets#destroy'


  #resources
  resources :users
  resources :pets
  resources :accessories


end 
