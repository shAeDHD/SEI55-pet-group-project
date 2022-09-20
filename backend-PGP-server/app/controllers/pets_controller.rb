class PetsController < ApplicationController

  #  Note we may need to remove this autenticity token
  skip_before_action :verify_authenticity_token, raise:false

  # Before action to verify user logged in with user id - using knock gem
  # any controller action that requies you to be logged in, i.e. needs access to current_user
  # should involve this before action 
  before_action :authenticate_user, except: [:index, :show]

  # Render current Pet information on My Profile page
  def current
    render json: current_pet



  end

  def new
    @pet = Pet.new
    pet = Pet.create!(
      name: params[:name],
      age: params[:age],
      species: params[:species],
      level: params[:level],
      experience: params[:experience]
    )
    if pet.persisted?
      render json: pet
    else
      render json: { error: 'Count not create pet' }, status: 422
    end
  end

  def create
    pet = Pet.create!(
      name: params[:name],
      # TODO: current age only sets in pet.rb set others as defaults
      # age: params[:age],
      # level: params[:level],
      # experience: params[:experience],
      species: params[:species],
      # last_fed: params[:last_fed],
      # last_fought: params[:last_fought],
      # last_slept: params[:last_slept], 
      # last_stretched: params[:last_stretched],
      # setting user_id to current_user.id which is different to params
      user_id: current_user.id
      # last_drank: params[:last_drank] 
    )
    if pet.persisted?
      render json: { pet: pet }
    else
      render json: { error: 'Count not create user' }, status: 422
    end

  end #create

  # def pet_json
    
  #   @pets = Pet.all
  #   render json: @pets
  #   # respond_to do |format|
  #   #   format.json{render json:{@pets}}
  #   # end

  # end

  def index
    render json: Pet.all
    @pets = Pet.all

  end # index

  def show
  end # show

  def edit
  end # edit

  def update
  end # update

  def destroy

    Pet.destroy params[:id]
    redirect_to pets_path
    
  end # destroy

  def update_last_action
    #   post '/pets/:id/action/:action' => 'pets#update_last_action'
    pet = Pet.find params[:id]
    
    if params[:action] == 'feed'
      pet.update last_fed: Time.now
    
    elsif params[:action] == 'drink'
      pet.update last_drank: Time.now
    
    else
      pet.update experience: (Pet.experience - 50)  
      
    end

    render json: pet 
  end

  #######################################
  private

  def pet_params

    params.require(:pet).permit(:name, :age, :species, :level, :experience, :accessories)
    
  end

end
