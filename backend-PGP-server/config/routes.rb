Rails.application.routes.draw do
  get 'pets/new'
  get 'pets/create'
  get 'pets/index'
  get 'pets/show'
  get 'pets/edit'
  get 'pets/update'
  get 'pets/destroy'
  get 'users/new'
  get 'users/create'
  get 'users/index'
  get 'users/show'
  get 'users/edit'
  get 'users/update'
  get 'users/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
