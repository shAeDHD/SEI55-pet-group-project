class AccessoriesController < ApplicationController
  def new
    @accessories = Accessory.new
  end

  def create
    @accessories = Accessory.create!(
      name: params[:accessories][:name],
      style: params[:accessories][:style]

      if @accessories.persisted?
        render json: @accessories
      else
        render json: { error: 'Count not create accessories' }, status: 422
      end

    )
  end

  def index
    @accessories = Accessory.all

  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

end #Accessories.controller
