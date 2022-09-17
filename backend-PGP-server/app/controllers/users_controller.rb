class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.create!(
      name: params[:user][:name],
      email: params[:user][:email],
      display_name: params[:user][:display_name],
      premium: params[:user][:premium],
      password_digest: params[:user][:password_digest]

      if @user.persisted?
        render json: @user
      else
        render json: { error: 'Count not create user' }, status: 422
      end

    )
  end

  def index
    @user = User.all

  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

end # User.controller
