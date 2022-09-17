class UsersController < ApplicationController

   # React frontend, so we wont have this token

  #  Note we may need to remove this autenticity token
   skip_before_action :verify_authenticity_token, raise:false


  def new
    @user = User.new
  end

  
  def create
  
    headers['Access-Control-Allow-Origin'] = '*'
    user = User.create 
  
      if user.present?
        #send the created reservation object to JSON
        render json: user
      else
        #error message
        render json: {error: 'Could not create reservation'}, status: 422
      end #if statement  
   
    # Create a new user 
    @user = User.create user_params
    
    # New addition to save user - come back and do this
  
    if @user.persisted?
    session[:user_id] = @user.id #login automatically
    redirect_to user_path(@user.id) #go to user profile pages
    else
      render :new
    end
   

#     @user = User.create!(
#       name: params[:user][:name],
#       email: params[:user][:email],
#       display_name: params[:user][:display_name],
#       premium: params[:user][:premium],
#       password_digest: params[:user][:password_digest]

#       if @user.persisted?
#         render json: @user
#       else
#         render json: { error: 'Count not create user' }, status: 422
#       end

#     )
# >>>>>>> 0831b4b7594c5d182a9e13c38a92cd7c899c2114
  end # create
  
  #2. Read
  
  def index
  
    headers['Access-Control-Allow-Origin'] = '*'
    # Send to Ajax JS code, as JSON
    render json: User.all
  
    # Shows all users register
    @user = User.all
  end
  
  def show
    @user = User.find params[:id]
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
  params.require(:user).permit(:name, :email, :password,:password_confirmation)
  end

end
