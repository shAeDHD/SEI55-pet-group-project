class PetsController < ApplicationController
  def new
    @pet = Pet.new
  end

  def create
    @pet = Pet.create!(
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

      if @pet.persisted?
        render json: @pet
      else
        render json: { error: 'Count not create pet' }, status: 422
      end

    )
  end

  def index
    @pet = Pet.all

  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
