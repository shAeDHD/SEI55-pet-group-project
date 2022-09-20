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

  get '/pets/current' => 'pets#current'
  # get '/pet/new' => 'pets#new'

  # get '/pet/index' => 'pets#index'
  # get '/pet/create' => 'pets#create'
  # delete '/pet' => 'pets#destroy'



  #resources
  resources :users
  resources :pets
  resources :accessories


end 
