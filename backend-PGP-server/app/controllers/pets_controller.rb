class PetsController < ApplicationController

  #  Note we may need to remove this autenticity token
  skip_before_action :verify_authenticity_token, raise:false

  def new
    @pet = Pet.new
  end

  def create

    pet = Pet.create!(
      
      name: ''
      # age: params[:age],
      # species: params[:species],
      # level: params[:level],
      # experience: params[:experience],
      # accessories: params[:accessories]

    )

    if pet.persisted?
      render json: pet 
    else
      render json: { error: 'Count not create pet' }, status: 422
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

  #######################################
  private

  def pet_params

    params.require(:pet).permit(:name, :age, :species, :level, :experience, :accessories)
    
  end

end
