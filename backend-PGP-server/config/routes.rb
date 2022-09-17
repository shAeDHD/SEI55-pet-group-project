Rails.application.routes.draw do
  
  get '/users' => 'users#index'
  


  resources :users
  resources :pets
  resources :accessories


end
