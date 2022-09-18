class PetsController < ApplicationController

  #  Note we may need to remove this autenticity token
  skip_before_action :verify_authenticity_token, raise:false

  def new
    @pet = Pet.new
  end

  def create

    @pet = Pet.new pet_params
    @pet.user_id = @current_user.id
    
    # if params[:pet][:image].present?

    #   response = Cloudinary::Uploader.upload params[:pet][:image]
    #   @pet.image = response["public_id"]
      
    # end #if
    
    @pet.save

    if @pet.persisted?
      redirect_to pet_path
    else
      render :new
    end #if

  end #create

  def pet_json
    
    @pets = Pet.all
    render json: @pets
    # respond_to do |format|
    #   format.json{render json:{@pets}}
    # end

  end

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
