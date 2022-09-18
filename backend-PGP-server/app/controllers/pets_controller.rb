class PetsController < ApplicationController

  #  Note we may need to remove this autenticity token
  skip_before_action :verify_authenticity_token, raise:false

  def new
    @pet = Pet.new
  end

  def create

    if user.present?
      # send the created reservation object to JSON
      render json: user.id
    else
      # error message
      render json: {error: 'Could not create pet - user not logged in'}, status: 422
    end #if statement  
    
    @pet = Pet.create(
      name: params[:pet][:name],
      age: params[:pet][:age],
      species: params[:pet][:species],
      accessories: params[:pet][:accessories],
      level: params[:pet][:level],
      experience: params[:pet][:experience],
      last_fed: params[:pet][:last_fed],
      last_fought: params[:pet][:last_fought],
      last_slept: params[:pet][:last_slept],
      last_stretched: params[:pet][:last_stretched],
      last_drank: params[:pet][:last_drank]
    )

      if @pet.persisted?
        render json: @pet
      else
        render json: { error: 'Could not create pet' }, status: 422
      end

  end #create

  def index
    
    @pets = Pet.all
    render json: @pets
    # respond_to do |format|
    #   format.json{render json:{@pets}}
    # end

  end # index

  def show
  end # show

  def edit
  end # edit

  def update
  end # update

  def destroy
  end # destroy

end
