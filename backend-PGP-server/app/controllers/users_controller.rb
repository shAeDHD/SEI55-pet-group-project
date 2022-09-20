class UsersController < ApplicationController

  
   # React frontend, so we wont have this token

  #  Note we may need to remove this autenticity token
  #  skip_before_action :verify_authenticity_token, raise:false


  # Users controller the before_action what to put here

  #  before_action :authenticate_user

  # Render current user information on My Profile page
   def current

     render json: current_user, include: :pet 
   end


  def new

    @user = User.new

    user = User.create!(
      name: params[:name],
      email: params[:email],
      display_name: params[:display_name],
      password: params[:password]
    )
    if user.persisted?
      render json: user
    else
      render json: { error: 'Count not create user' }, status: 422
    end
  end

  def signup

  end

  def create
  
    user = User.create!(
      name: params[:name],
      email: params[:email],
      display_name: params[:display_name],
      password: params[:password]
    )
    if user.persisted?
       # If your User model has a `to_token_payload` method, you should use that here
      auth_token = Knock::AuthToken.new payload: { sub: user.id }
      render json: {
        user: user,
        token: auth_token
      }
    else
      render json: { error: 'Count not create user' }, status: 422
    end
    # # headers['Access-Control-Allow-Origin'] = '*'
    # user = User.create 
  
    #   if user.present?
    #     #send the created reservation object to JSON
    #     render json: user
    #   else
    #     #error message
    #     render json: {error: 'Could not create user'}, status: 422
    #   end #if statement  
   
    # # Create a new user 
    # @user = User.create user_params
    
    # # New addition to save user - come back and do this
  
    #   if @user.persisted?
    #     session[:user_id] = @user.id #login automatically
    #     redirect_to user_path(@user.id) #go to user profile pages
    #     else
    #       render :new
    #   end

  end # create
  
  #2. Read
  
  def index
  
    # headers['Access-Control-Allow-Origin'] = '*'
    # Send to Ajax JS code, as JSON
    render json: User.all
  
    # Shows all users register
    @user = User.all
  end
  
  def show
    # @user = User.find params[:id]
  end
  
  #3 Update
  
  def edit
    # Below is used to extract current user information to edit it using a partial form
    @user = User.find params[:id]
  
    # Below ensures that edits cant be done by anyone but current user who owns the account
    if @user.id != @current_user.id
      redirect_to login_path
    end
  end
  
  def update
    # Below is used to save the updates created when editing user account
    @user = User.find params[:id]
  
    # Below ensures that edits cant be done by anyone but current user who owns the account
    if @user.id != @current_user.id
      redirect_to login_path
      return
    end
  
    # Once update completed redirects users to their account
    if @user.update user_params
      redirect_to @user
     else
      render :edit
    end
  
  end
  
  # 4. Destroy
  # Below is used to delete accounts
  def destroy
    User.destroy params[:id]
    redirect_to sign_up_path
  end
  
  private
  def user_params
  params.require(:user).permit(:name, :email, :password,:display_name)

  end

end
